export type Language = 'ko' | 'en' | 'ja' | 'zh';

export type CategoryId = 'appearance' | 'quiz' | 'activity';

export interface MissionDetail {
  title: string;
  condition: string;
  notes?: string;
  targetCount?: string;
  timeLimit?: string;
}

export interface Mission {
  id: number;
  category: CategoryId;
  timeLimitSeconds: number;
  ko: MissionDetail;
  en: MissionDetail;
  ja: MissionDetail;
  zh: MissionDetail;
  tag: string;
  isOx?: boolean;
}

export interface CategoryInfo {
  id: CategoryId;
  name: Record<Language, string>;
  notice: Record<Language, string>;
  color: {
    primary: string;
    bgLight: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
}
