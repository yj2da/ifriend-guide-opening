import { Language } from '../types';

export interface TranslationStrings {
  brand: string;
  generation: string;
  eventTitle: string;
  spectrumTag: string;
  heroTitle: string;
  heroSubtitle: string;
  howToPlayBtn: string;
  ruleTimeLabel: string;
  ruleTimeValue: string;
  ruleStateLabel: string;
  ruleStateValue: string;
  ruleGoalLabel: string;
  ruleGoalValue: string;
  quickJumpTitle: string;
  quickJumpHint: string;
  searchPlaceholder: string;
  filterAll: string;
  filterCat1: string;
  filterCat2: string;
  filterCat3: string;
  timeLimit: string;
  timeLimitVal: string;
  targetCount: string;
  missionNumber: string;
  qrModalBtn: string;
  qrModalTitle: string;
  qrModalDesc: string;
  shareTitle: string;
  copiedNotice: string;
  howToPlayTitle: string;
  howToPlaySub: string;
  howToPlayClose: string;
  emptySearchTitle: string;
  emptySearchDesc: string;
  viewAllBtn: string;
  bottomHowToPlay: string;
  bottomQR: string;
  bottomTop: string;
  oxBadge: string;
  oxHint: string;
  luckyBanner: string;
  keyCondition: string;
}

export const UI_TRANSLATIONS: Record<Language, TranslationStrings> = {
  ko: {
    brand: 'I-FRIEND',
    generation: '27기',
    eventTitle: '오프닝 세레모니',
    spectrumTag: 'SPECTRUM : BLEND INTO ONE',
    heroTitle: 'MISSION BINGO',
    heroSubtitle: 'I-FRIEND 27th OPENING CEREMONY',
    howToPlayBtn: '게임 방법 (HOW TO PLAY) 확인하기',
    ruleTimeLabel: '진행 시간',
    ruleTimeValue: '5초 이내',
    ruleStateLabel: '진행 상태',
    ruleStateValue: '착석 후 기립',
    ruleGoalLabel: '목표 조건',
    ruleGoalValue: '🏆 2줄 빙고',
    quickJumpTitle: '미션 바로가기',
    quickJumpHint: '터치하여 해당 미션으로 이동',
    searchPlaceholder: '미션 번호(1~16) 또는 키워드(반지, phone, 안경, 옷...) 검색',
    filterAll: '전체 (1~16)',
    filterCat1: '1. 인상착의',
    filterCat2: '2. O/X 퀴즈',
    filterCat3: '3. 액티비티',
    timeLimit: '제한시간',
    timeLimitVal: '5초',
    targetCount: '대상 인원',
    missionNumber: '미션',
    qrModalBtn: '가이드북 QR',
    qrModalTitle: '가이드북 QR 코드',
    qrModalDesc: '팀원들에게 보여주고 스마트폰으로 스캔하게 하세요!',
    shareTitle: '링크 복사',
    copiedNotice: '링크가 복사되었습니다!',
    howToPlayTitle: 'MISSION BINGO',
    howToPlaySub: 'HOW TO PLAY · 게임 방법',
    howToPlayClose: '확인 (닫기)',
    emptySearchTitle: '검색된 미션이 없습니다.',
    emptySearchDesc: '미션 번호(1~16) 또는 다른 키워드로 검색해보세요.',
    viewAllBtn: '전체 미션 목록 보기',
    bottomHowToPlay: '게임 방법',
    bottomQR: 'QR 코드',
    bottomTop: '맨 위로',
    oxBadge: '대표 1명 O/X',
    oxHint: '팔을 머리 위로 올려 O/X 모양 표시!',
    luckyBanner: '보너스 럭키 찬스! 모든 조 무조건 성공 & 빈 칸 1곳 자유 체크',
    keyCondition: '핵심 조건',
  },
  en: {
    brand: 'I-FRIEND',
    generation: '27th',
    eventTitle: 'Opening Ceremony',
    spectrumTag: 'SPECTRUM : BLEND INTO ONE',
    heroTitle: 'MISSION BINGO',
    heroSubtitle: 'I-FRIEND 27th OPENING CEREMONY',
    howToPlayBtn: 'View Rules (HOW TO PLAY)',
    ruleTimeLabel: 'Time Limit',
    ruleTimeValue: 'Within 5s',
    ruleStateLabel: 'Posture',
    ruleStateValue: 'Seated then Stand',
    ruleGoalLabel: 'Goal',
    ruleGoalValue: '🏆 2 Lines Bingo',
    quickJumpTitle: 'Quick Jump',
    quickJumpHint: 'Tap to jump directly to mission',
    searchPlaceholder: 'Search mission (#1-16) or keyword (ring, shoes, glasses...)',
    filterAll: 'All (1~16)',
    filterCat1: '1. Appearance',
    filterCat2: '2. O/X Quiz',
    filterCat3: '3. Activities',
    timeLimit: 'Time Limit',
    timeLimitVal: '5s',
    targetCount: 'Target Count',
    missionNumber: 'Mission',
    qrModalBtn: 'Guide QR',
    qrModalTitle: 'Guidebook QR Code',
    qrModalDesc: 'Share this QR code with your teammates to scan on their phones!',
    shareTitle: 'Copy Link',
    copiedNotice: 'Link copied to clipboard!',
    howToPlayTitle: 'MISSION BINGO',
    howToPlaySub: 'HOW TO PLAY · Rules',
    howToPlayClose: 'OK (Close)',
    emptySearchTitle: 'No missions found.',
    emptySearchDesc: 'Try searching by mission number (#1-16) or another keyword.',
    viewAllBtn: 'View all missions',
    bottomHowToPlay: 'Rules',
    bottomQR: 'QR Code',
    bottomTop: 'Top',
    oxBadge: '1 Rep O/X',
    oxHint: 'Signal O or X using your arms above your head!',
    luckyBanner: 'Bonus Free Pass! All teams succeed automatically & check 1 square',
    keyCondition: 'Key Rule',
  },
  ja: {
    brand: 'I-FRIEND',
    generation: '第27期',
    eventTitle: 'オープニングセレモニー',
    spectrumTag: 'SPECTRUM : BLEND INTO ONE',
    heroTitle: 'MISSION BINGO',
    heroSubtitle: 'I-FRIEND 27th OPENING CEREMONY',
    howToPlayBtn: '進行方法 (HOW TO PLAY) を確認する',
    ruleTimeLabel: '制限時間',
    ruleTimeValue: '5秒以内',
    ruleStateLabel: '進行状態',
    ruleStateValue: '着席から起立',
    ruleGoalLabel: '目標',
    ruleGoalValue: '🏆 2列ビンゴ',
    quickJumpTitle: 'ミッション一覧',
    quickJumpHint: 'タップで該当ミッションへ移動',
    searchPlaceholder: '番号(1~16)またはキーワード(指輪、靴、眼鏡、服...)で検索',
    filterAll: 'すべて (1~16)',
    filterCat1: '1. 身なり・特徴',
    filterCat2: '2. O/Xクイズ',
    filterCat3: '3. アクティビティ',
    timeLimit: '制限時間',
    timeLimitVal: '5秒',
    targetCount: '対象人数',
    missionNumber: 'ミッション',
    qrModalBtn: 'QRコード',
    qrModalTitle: 'ガイドブック QRコード',
    qrModalDesc: 'チームメンバーに見せてスマホで読み取ってもらいましょう！',
    shareTitle: 'URLをコピー',
    copiedNotice: 'URLをコピーしました！',
    howToPlayTitle: 'MISSION BINGO',
    howToPlaySub: 'HOW TO PLAY · 進行方法',
    howToPlayClose: '確認 (閉じる)',
    emptySearchTitle: '該当するミッションがありません。',
    emptySearchDesc: 'ミッション番号(1~16)または別のキーワードで検索してください。',
    viewAllBtn: 'すべてのミッションを表示',
    bottomHowToPlay: '進行方法',
    bottomQR: 'QRコード',
    bottomTop: 'トップへ',
    oxBadge: '代表1名 O/X',
    oxHint: '頭の上で腕を使ってOまたはXを作って合図！',
    luckyBanner: 'ボーナスフリーパス！全チーム無条件クリア＆1マスチェック獲得',
    keyCondition: '重要ルール',
  },
  zh: {
    brand: 'I-FRIEND',
    generation: '第27期',
    eventTitle: '开幕式破冰活动',
    spectrumTag: 'SPECTRUM : BLEND INTO ONE',
    heroTitle: 'MISSION BINGO',
    heroSubtitle: 'I-FRIEND 27th OPENING CEREMONY',
    howToPlayBtn: '查看游戏规则 (HOW TO PLAY)',
    ruleTimeLabel: '限时',
    ruleTimeValue: '5秒以内',
    ruleStateLabel: '动作要求',
    ruleStateValue: '就座后起立',
    ruleGoalLabel: '达成目标',
    ruleGoalValue: '🏆 2条连线 Bingo',
    quickJumpTitle: '任务直达',
    quickJumpHint: '点击直接跳转至对应任务',
    searchPlaceholder: '搜索任务编号(1~16)或关键词(戒指、白鞋、眼镜、衣服...)',
    filterAll: '全部 (1~16)',
    filterCat1: '1. 外貌与着装',
    filterCat2: '2. O/X判断题',
    filterCat3: '3. 互动与团队',
    timeLimit: '限时',
    timeLimitVal: '5秒',
    targetCount: '达标人数',
    missionNumber: '任务',
    qrModalBtn: '指南二维码',
    qrModalTitle: '任务指南二维码',
    qrModalDesc: '向队员展示此二维码，使用手机扫码即可查看！',
    shareTitle: '复制链接',
    copiedNotice: '已复制链接到剪贴板！',
    howToPlayTitle: 'MISSION BINGO',
    howToPlaySub: 'HOW TO PLAY · 游戏规则',
    howToPlayClose: '确认 (关闭)',
    emptySearchTitle: '未找到相关任务。',
    emptySearchDesc: '请尝试按任务编号(1~16)或其他关键词重新搜索。',
    viewAllBtn: '查看全部任务列表',
    bottomHowToPlay: '游戏规则',
    bottomQR: '二维码',
    bottomTop: '回顶部',
    oxBadge: '代表1人 O/X',
    oxHint: '双臂高举过头摆出 O 或 X 手势！',
    luckyBanner: '幸运免试福利！全体小组无条件通关并自选1格标记',
    keyCondition: '关键条件',
  },
};
