// أنواع البيانات الخاصة بالمباريات
export type MatchStatus = 'live' | 'upcoming' | 'finished';

export interface Team {
    name: string;
    logo: string; // رابط شعار الفريق أو رمز تعبيري
}

export interface Match {
    id: string;
    league: string; // اسم البطولة
    home: Team;
    away: Team;
    status: MatchStatus;
    kickoff: string; // وقت بدء المباراة (ISO)
    score?: { home: number; away: number }; // النتيجة (للمباريات المباشرة/المنتهية)
    streamUrl?: string; // رابط البث (HLS m3u8)
    commentator?: string; // المعلّق
    channel?: string; // القناة الناقلة
}

// بيانات تجريبية — استبدلها لاحقاً بمصدر بيانات حقيقي (API أو قاعدة بيانات)
export const matches: Match[] = [
    {
        id: 'rma-bar',
        league: 'الدوري الإسباني',
        home: { name: 'ريال مدريد', logo: '⚪' },
        away: { name: 'برشلونة', logo: '🔴' },
        status: 'live',
        kickoff: '2026-06-05T20:00:00Z',
        score: { home: 2, away: 1 },
        streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        commentator: 'حفيظ دراجي',
        channel: 'بلادي سبورت 1'
    },
    {
        id: 'liv-mci',
        league: 'الدوري الإنجليزي',
        home: { name: 'ليفربول', logo: '🔴' },
        away: { name: 'مانشستر سيتي', logo: '🔵' },
        status: 'live',
        kickoff: '2026-06-05T19:30:00Z',
        score: { home: 0, away: 0 },
        streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        commentator: 'رؤوف خليف',
        channel: 'بلادي سبورت 2'
    },
    {
        id: 'juv-mil',
        league: 'الدوري الإيطالي',
        home: { name: 'يوفنتوس', logo: '⚫' },
        away: { name: 'ميلان', logo: '🔴' },
        status: 'upcoming',
        kickoff: '2026-06-06T18:00:00Z',
        channel: 'بلادي سبورت 3'
    },
    {
        id: 'bay-dor',
        league: 'الدوري الألماني',
        home: { name: 'بايرن ميونخ', logo: '🔴' },
        away: { name: 'بوروسيا دورتموند', logo: '🟡' },
        status: 'upcoming',
        kickoff: '2026-06-06T16:30:00Z',
        channel: 'بلادي سبورت 1'
    },
    {
        id: 'psg-mar',
        league: 'الدوري الفرنسي',
        home: { name: 'باريس سان جيرمان', logo: '🔵' },
        away: { name: 'مارسيليا', logo: '⚪' },
        status: 'finished',
        kickoff: '2026-06-04T20:00:00Z',
        score: { home: 3, away: 0 },
        channel: 'بلادي سبورت 2'
    },
    {
        id: 'ahl-zam',
        league: 'الدوري المصري',
        home: { name: 'الأهلي', logo: '🔴' },
        away: { name: 'الزمالك', logo: '⚪' },
        status: 'finished',
        kickoff: '2026-06-04T18:00:00Z',
        score: { home: 1, away: 1 },
        channel: 'بلادي سبورت 3'
    }
];

// دوال مساعدة للوصول إلى البيانات
export function getMatchById(id: string): Match | undefined {
    return matches.find((m) => m.id === id);
}

export function getMatchesByStatus(status: MatchStatus): Match[] {
    return matches.filter((m) => m.status === status);
}

// ترتيب الحالات للعرض: المباشرة أولاً، ثم القادمة، ثم المنتهية
export const statusOrder: { status: MatchStatus; label: string }[] = [
    { status: 'live', label: 'مباشر الآن' },
    { status: 'upcoming', label: 'مباريات قادمة' },
    { status: 'finished', label: 'انتهت' }
];
