// 🔗 روابط البث لكل قناة (HLS m3u8)
//
// كيفية الاستخدام:
//   ضع رابط البث لكل قناة بجانب معرّفها. بمجرد إضافة الرابط تعمل القناة فوراً.
//   اترك القيمة فارغة '' للقنوات التي لا رابط لها بعد.
//
// ملاحظة أمان: إن كانت الروابط حساسة، يُفضّل وضعها في متغيرات بيئة
//   أو ملف غير مرفوع لـ git بدل كتابتها هنا مباشرة.

export const streamUrls: Record<string, string> = {
    // ⚽ ALWAN SPORTS
    'alwan-sports-1': '',
    'alwan-sports-2': '',
    'alwan-sports-3': '',
    'alwan-sports-4': '',
    'alwan-sports-5': '',
    'alwan-sports-6': '',

    // 🏆 Max s
    'max-s-1': '',
    'max-s-2': '',
    'max-s-3': '',
    'max-s-4': '',

    // 🇸🇦 SAUDI
    '1-copy': '', // الثامنة 2
    '1-copy-copy': '', // الثامنة 3
    'ad-sport-1': '',
    'ad-sport-2': '',

    // 📡 الكفو X
    'x-1-mpxbq7r6': '',
    'x-2-mpxbq7r6': '',
    'x-3-mpxbq7r6': '',
    'x-4-mpxbq7r6': '',
    'x-5-mpxbq7r6': '',
    'x-6-mpxbq7r6': '',
    'x-7-mpxbq7r6': '',
    'x-8-mpxbq7r6': '',

    // 🕌 quran-tv
    'quran-minshawi': '',
    'quran-musad': '',
    'quran-lahoni': '',
    'quran-barrak': '',
    'quran-qatami': '',
    'quran-hamid': '',
    'quran-tarabulsi': '',
    'quran-shuraim': ''
};

// إرجاع رابط القناة إن وُجد
export function getStreamUrl(channelId: string): string | undefined {
    const url = streamUrls[channelId];
    return url && url.trim() !== '' ? url : undefined;
}
