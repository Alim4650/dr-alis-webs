// 🔗 روابط البث لكل قناة (HLS m3u8)
//
// كيفية الاستخدام:
//   ضع رابط البث لكل قناة بجانب معرّفها. بمجرد إضافة الرابط تعمل القناة فوراً.
//   اترك القيمة فارغة '' للقنوات التي لا رابط لها بعد.
//
// ملاحظة أمان: هذه الروابط تحتوي على اسم المستخدم وكلمة المرور الخاصة باشتراكك
//   (Xtream Codes). إن كان المستودع عاماً يُفضّل وضعها في متغيرات بيئة
//   أو ملف غير مرفوع لـ git بدل كتابتها هنا مباشرة.
//
// المصدر: قائمة التشغيل الشخصية (8ksat100.xyz) — صيغة الرابط:
//   http://8ksat100.xyz/live/<user>/<pass>/<stream_id>.m3u8

export const streamUrls: Record<string, string> = {
    // ⚽ ALWAN SPORTS  (ALWAN SPORT 1-6 HD)
    'alwan-sports-1': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1540618.m3u8',
    'alwan-sports-2': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1540617.m3u8',
    'alwan-sports-3': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1540616.m3u8',
    'alwan-sports-4': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1540615.m3u8',
    'alwan-sports-5': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1540614.m3u8',
    'alwan-sports-6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1540613.m3u8',

    // 🏆 Max s  (beIN SPORTS MAX 1-4)
    'max-s-1': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1997494.m3u8',
    'max-s-2': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1997493.m3u8',
    'max-s-3': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1997492.m3u8',
    'max-s-4': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1997491.m3u8',

    // 🇸🇦 SAUDI
    '1-copy': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1752080.m3u8', // الثامنة 2 — THAMANYA 2 SPORT HD
    '1-copy-copy': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/1752079.m3u8', // الثامنة 3 — THAMANYA 3 SPORT HD
    'ad-sport-1': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/498838.m3u8', // AD SPORTS 1 HD
    'ad-sport-2': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/498839.m3u8', // AD SPORTS 2 HD

    // 📡 الكفو X  (beIN SPORTS 1-8 HD)
    'x-1-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544431.m3u8',
    'x-2-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544430.m3u8',
    'x-3-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544429.m3u8',
    'x-4-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544428.m3u8',
    'x-5-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544427.m3u8',
    'x-6-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544426.m3u8',
    'x-7-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544425.m3u8',
    'x-8-mpxbq7r6': 'http://8ksat100.xyz/live/alimastor/792c5cbedf/544424.m3u8',

    // 🕌 quran-tv — قنوات غير رياضية، تُترك فارغة (المطلوب القنوات الرياضية فقط)
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
