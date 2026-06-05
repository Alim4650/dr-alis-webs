import { useEffect, useRef, useState } from 'react';

interface Props {
    src: string; // رابط البث (HLS m3u8)
    poster?: string;
}

/**
 * مشغّل فيديو يدعم بث HLS.
 * - في Safari/iOS: يعمل البث مباشرة عبر <video> الأصلي.
 * - في باقي المتصفحات: يحمّل hls.js من CDN عند الحاجة فقط.
 */
export default function VideoPlayer({ src, poster }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: any = null;
        let cancelled = false;

        // المتصفح يدعم HLS أصلاً (Safari / iOS)
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
            setLoading(false);
            return;
        }

        // باقي المتصفحات: تحميل hls.js ديناميكياً من CDN
        (async () => {
            try {
                const mod = await import(
                    /* @vite-ignore */ 'https://esm.sh/hls.js@1.5.13'
                );
                if (cancelled) return;
                const Hls = mod.default;
                if (Hls.isSupported()) {
                    hls = new Hls({ enableWorker: true, lowLatencyMode: true });
                    hls.loadSource(src);
                    hls.attachMedia(video);
                    hls.on(Hls.Events.MANIFEST_PARSED, () => setLoading(false));
                    hls.on(Hls.Events.ERROR, (_e: unknown, data: any) => {
                        if (data?.fatal) setError('تعذّر تشغيل البث. حاول مرة أخرى.');
                    });
                } else {
                    setError('متصفحك لا يدعم تشغيل هذا البث.');
                }
            } catch {
                if (!cancelled) setError('تعذّر تحميل مشغّل البث.');
            }
        })();

        return () => {
            cancelled = true;
            if (hls) hls.destroy();
        };
    }, [src]);

    return (
        <div className="relative w-full overflow-hidden rounded-2xl bg-black">
            <video
                ref={videoRef}
                poster={poster}
                controls
                playsInline
                className="aspect-video w-full"
            />
            {loading && !error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm text-white">
                    جارٍ تحميل البث...
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 px-4 text-center text-sm text-red-300">
                    {error}
                </div>
            )}
        </div>
    );
}
