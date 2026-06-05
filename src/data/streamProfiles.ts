// إعدادات أداء المشغّل (hls.js) لكل ملف بث (stream profile).
// مستخرجة من إعدادات موقع بلادي سبورت الأصلي:
//   player_low_latency → lowLatencyMode
//   player_live_sync_duration_count → liveSyncDurationCount
//   player_live_max_latency_duration_count → liveMaxLatencyDurationCount

export interface StreamProfile {
    lowLatencyMode: boolean;
    liveSyncDurationCount: number;
    liveMaxLatencyDurationCount: number;
    // تفعيل المشغّل المُدار (Managed Media Source) عند توفّره — مفيد لآبل
    preferManagedMediaSource: boolean;
}

// القيم المأخوذة من البيانات الأصلية لكل profile
export const streamProfiles: Record<string, StreamProfile> = {
    // قنوات الرياضة السريعة (ألوان / Max s)
    'maxs-fast': {
        lowLatencyMode: true,
        liveSyncDurationCount: 2,
        liveMaxLatencyDurationCount: 8,
        preferManagedMediaSource: true
    },
    // قنوات عالية الجودة (سعودية / الكفو)
    'ultra-hq': {
        lowLatencyMode: true,
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 10,
        preferManagedMediaSource: true
    },
    // قنوات القرآن
    furnas: {
        lowLatencyMode: true,
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 10,
        preferManagedMediaSource: true
    },
    // ملف الكفو 3
    purple: {
        lowLatencyMode: true,
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 10,
        preferManagedMediaSource: true
    }
};

// الإعداد الافتراضي عند عدم وجود ملف مطابق
export const defaultStreamProfile: StreamProfile = {
    lowLatencyMode: true,
    liveSyncDurationCount: 3,
    liveMaxLatencyDurationCount: 10,
    preferManagedMediaSource: true
};

export function getStreamProfile(name?: string): StreamProfile {
    return (name && streamProfiles[name]) || defaultStreamProfile;
}
