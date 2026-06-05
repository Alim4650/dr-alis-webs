// أنواع وبيانات القنوات (مستخرجة من موقع بلادي سبورت الأصلي)
export interface Channel {
    id: string;
    name: string;
    group: string; // اسم المجموعة الخام (group_name)
    accent: string; // لون القناة
    sortOrder: number;
    streamProfile: string; // إعداد المشغّل: maxs-fast / furnas / ultra-hq / purple
    // ملاحظة: روابط البث الأصلية موقّعة ومؤقتة ومقيّدة بعنوان IP،
    // لذلك تُترك فارغة ليملأها صاحب الموقع بمصدره الخاص.
    streamUrl?: string;
}

// معلومات عرض كل مجموعة (الترتيب + الاسم العربي + الرمز)
export interface ChannelGroup {
    key: string; // يطابق group في القنوات
    label: string; // الاسم المعروض
    icon: string;
}

export const channelGroups: ChannelGroup[] = [
    { key: 'ALWAN SPORTS', label: 'ألوان سبورت', icon: '⚽' },
    { key: 'Max s', label: 'Max s', icon: '🏆' },
    { key: 'SAUDI', label: 'قنوات سعودية', icon: '🇸🇦' },
    { key: 'الكفو X', label: 'الكفو X', icon: '📡' },
    { key: 'quran-tv', label: 'قنوات القرآن الكريم', icon: '🕌' }
];

export const channels: Channel[] = [
    // ⚽ ALWAN SPORTS
    { id: 'alwan-sports-1', name: 'ألوان 1', group: 'ALWAN SPORTS', accent: '#7c3aed', sortOrder: 20, streamProfile: 'maxs-fast' },
    { id: 'alwan-sports-2', name: 'ألوان 2', group: 'ALWAN SPORTS', accent: '#7c3aed', sortOrder: 40, streamProfile: 'maxs-fast' },
    { id: 'alwan-sports-3', name: 'ألوان 3', group: 'ALWAN SPORTS', accent: '#7c3aed', sortOrder: 50, streamProfile: 'maxs-fast' },
    { id: 'alwan-sports-4', name: 'ألوان 4', group: 'ALWAN SPORTS', accent: '#7c3aed', sortOrder: 60, streamProfile: 'maxs-fast' },
    { id: 'alwan-sports-5', name: 'ألوان 5', group: 'ALWAN SPORTS', accent: '#7c3aed', sortOrder: 70, streamProfile: 'maxs-fast' },
    { id: 'alwan-sports-6', name: 'ألوان 6', group: 'ALWAN SPORTS', accent: '#7c3aed', sortOrder: 80, streamProfile: 'maxs-fast' },

    // 🏆 Max s
    { id: 'max-s-1', name: 'Max 1 s', group: 'Max s', accent: '#7c3aed', sortOrder: 70, streamProfile: 'maxs-fast' },
    { id: 'max-s-2', name: 'Max 2 s', group: 'Max s', accent: '#7c3aed', sortOrder: 80, streamProfile: 'maxs-fast' },
    { id: 'max-s-3', name: 'Max 3 s', group: 'Max s', accent: '#7c3aed', sortOrder: 90, streamProfile: 'maxs-fast' },
    { id: 'max-s-4', name: 'Max 4 s', group: 'Max s', accent: '#7c3aed', sortOrder: 100, streamProfile: 'maxs-fast' },

    // 🇸🇦 SAUDI
    { id: '1-copy', name: 'الثامنة 2', group: 'SAUDI', accent: '#7c3aed', sortOrder: 20, streamProfile: 'ultra-hq' },
    { id: '1-copy-copy', name: 'الثامنة 3', group: 'SAUDI', accent: '#7c3aed', sortOrder: 21, streamProfile: 'ultra-hq' },
    { id: 'ad-sport-1', name: 'AD SPORT 1', group: 'SAUDI', accent: '#7c3aed', sortOrder: 30, streamProfile: 'ultra-hq' },
    { id: 'ad-sport-2', name: 'AD SPORT 2', group: 'SAUDI', accent: '#7c3aed', sortOrder: 40, streamProfile: 'ultra-hq' },

    // 📡 الكفو X
    { id: 'x-1-mpxbq7r6', name: 'الكفو 1 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 20, streamProfile: 'ultra-hq' },
    { id: 'x-2-mpxbq7r6', name: 'الكفو 2 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 30, streamProfile: 'ultra-hq' },
    { id: 'x-3-mpxbq7r6', name: 'الكفو 3 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 40, streamProfile: 'purple' },
    { id: 'x-4-mpxbq7r6', name: 'الكفو 4 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 50, streamProfile: 'ultra-hq' },
    { id: 'x-5-mpxbq7r6', name: 'الكفو 5 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 60, streamProfile: 'ultra-hq' },
    { id: 'x-6-mpxbq7r6', name: 'الكفو 6 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 70, streamProfile: 'ultra-hq' },
    { id: 'x-7-mpxbq7r6', name: 'الكفو 7 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 80, streamProfile: 'ultra-hq' },
    { id: 'x-8-mpxbq7r6', name: 'الكفو 8 bein', group: 'الكفو X', accent: '#7c3aed', sortOrder: 90, streamProfile: 'ultra-hq' },

    // 🕌 quran-tv
    { id: 'quran-minshawi', name: 'الشيخ محمد صديق المنشاوي', group: 'quran-tv', accent: '#16a34a', sortOrder: 10, streamProfile: 'furnas' },
    { id: 'quran-musad', name: 'الشيخ عبدالرحمن مسعد', group: 'quran-tv', accent: '#16a34a', sortOrder: 20, streamProfile: 'furnas' },
    { id: 'quran-lahoni', name: 'الشيخ مصطفى اللاهوني', group: 'quran-tv', accent: '#16a34a', sortOrder: 30, streamProfile: 'furnas' },
    { id: 'quran-barrak', name: 'الشيخ عبدالرحمن البراك', group: 'quran-tv', accent: '#16a34a', sortOrder: 40, streamProfile: 'furnas' },
    { id: 'quran-qatami', name: 'الشيخ ناصر القطامي', group: 'quran-tv', accent: '#16a34a', sortOrder: 50, streamProfile: 'furnas' },
    { id: 'quran-hamid', name: 'الشيخ أحمد طالب حميد', group: 'quran-tv', accent: '#16a34a', sortOrder: 60, streamProfile: 'furnas' },
    { id: 'quran-tarabulsi', name: 'الشيخ أحمد الطرابلسي', group: 'quran-tv', accent: '#16a34a', sortOrder: 70, streamProfile: 'furnas' },
    { id: 'quran-shuraim', name: 'الشيخ سعود الشريم', group: 'quran-tv', accent: '#16a34a', sortOrder: 80, streamProfile: 'furnas' }
];

// قنوات مجموعة معيّنة، مرتّبة حسب sortOrder
export function getChannelsByGroup(group: string): Channel[] {
    return channels
        .filter((c) => c.group === group)
        .sort((a, b) => a.sortOrder - b.sortOrder);
}

// إيجاد قناة بالمعرّف
export function getChannelById(id: string): Channel | undefined {
    return channels.find((c) => c.id === id);
}
