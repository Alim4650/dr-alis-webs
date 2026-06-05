import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { getStreamProfile, type StreamProfile } from '../data/streamProfiles';

interface Props {
    src: string; // رابط البث (HLS m3u8)
    poster?: string;
    profile?: string; // اسم ملف البث (maxs-fast / ultra-hq / furnas / purple)
    autoPlay?: boolean;
}

type PlayerState = 'loading' | 'ready' | 'error';

/**
 * مشغّل بث احترافي يعتمد hls.js:
 * - أجهزة آبل (Safari/iOS): تشغيل HLS أصلي مدمج.
 * - باقي المتصفحات: hls.js مع إعدادات أداء لكل قناة.
 * - استعادة تلقائية عند أخطاء الشبكة أو الوسائط (حتى 3 محاولات).
 */
export default function VideoPlayer({ src, poster, profile, autoPlay = true }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [state, setState] = useState<PlayerState>('loading');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const cfg: StreamProfile = getStreamProfile(profile);
        let hls: Hls | null = null;
        let recoverCount = 0;
        const MAX_RECOVER = 3;

        const tryAutoPlay = () => {
            if (!autoPlay) return;
            // التشغيل التلقائي يتطلب الكتم في معظم المتصفحات
            video.muted = true;
            video.play().catch(() => {
                /* يتجاهل منع التشغيل التلقائي */
            });
        };

        // 1) دعم HLS الأصلي (Safari / iOS)
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
            video.addEventListener(
                'loadedmetadata',
                () => {
                    setState('ready');
                    tryAutoPlay();
                },
                { once: true }
            );
            return () => {
                video.removeAttribute('src');
                video.load();
            };
        }

        // 2) hls.js لباقي المتصفحات
        if (Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: cfg.lowLatencyMode,
                liveSyncDurationCount: cfg.liveSyncDurationCount,
                liveMaxLatencyDurationCount: cfg.liveMaxLatencyDurationCount,
                backBufferLength: 90
            });

            hls.loadSource(src);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                setState('ready');
                tryAutoPlay();
            });

            hls.on(Hls.Events.ERROR, (_evt, data) => {
                if (!data.fatal || !hls) return;
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        if (recoverCount < MAX_RECOVER) {
                            recoverCount++;
                            setMessage('جارٍ إعادة الاتصال بالبث...');
                            hls.startLoad();
                        } else {
                            setState('error');
                            setMessage('تعذّر الاتصال بالبث. تحقّق من اتصالك.');
                        }
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        if (recoverCount < MAX_RECOVER) {
                            recoverCount++;
                            setMessage('جارٍ استعادة التشغيل...');
                            hls.recoverMediaError();
                        } else {
                            setState('error');
                            setMessage('خطأ في الوسائط. حاول التحديث.');
                        }
                        break;
                    default:
                        setState('error');
                        setMessage('تعذّر تشغيل البث.');
                        hls.destroy();
                }
            });

            return () => {
                hls?.destroy();
            };
        }

        // 3) لا دعم إطلاقاً
        setState('error');
        setMessage('متصفحك لا يدعم تشغيل هذا البث.');
    }, [src, profile, autoPlay]);

    return (
        <div className="relative w-full overflow-hidden rounded-2xl bg-black">
            <video
                ref={videoRef}
                poster={poster}
                controls
                playsInline
                className="aspect-video w-full"
            />

            {state === 'loading' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 text-sm text-white">
                    <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>{message || 'جارٍ تحميل البث...'}</span>
                </div>
            )}

            {state === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/85 px-4 text-center text-sm text-red-300">
                    <span className="text-3xl">⚠️</span>
                    <span>{message}</span>
                    <button
                        onClick={() => location.reload()}
                        className="mt-1 rounded-lg bg-white/10 px-4 py-1.5 text-white transition hover:bg-white/20"
                    >
                        إعادة المحاولة
                    </button>
                </div>
            )}
        </div>
    );
}
