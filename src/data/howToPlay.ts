import { Language } from '../types';

export interface HowToPlayStep {
  step: string;
  title: string;
  desc: string[];
  timeLimit?: string;
  tip?: string;
}

export const HOW_TO_PLAY_DATA: Record<Language, HowToPlayStep[]> = {
  ko: [
    {
      step: 'STEP 1',
      title: 'MISSION CHECK & PLAN',
      desc: [
        '화면과 QR코드를 통해 1~16번 미션을 확인해주세요.',
        '팀원들과 상의하여 어떤 미션 번호를 어디에 배치할지 전략을 세워주세요.',
      ],
      timeLimit: '⏱️ 제한 시간 5분',
    },
    {
      step: 'STEP 2',
      title: 'PLACE THE NUMBERS',
      desc: ['전략에 따라 1~16번 미션 번호를 빙고판에 배치해주세요.'],
    },
    {
      step: 'STEP 3',
      title: 'MISSION PLAY',
      desc: [
        '랜덤으로 보여지는 숫자의 미션을 수행하고, 미션에 성공하면 담당 임원의 확인을 받아 해당 칸에 체크합니다.',
      ],
    },
    {
      step: 'STEP 4',
      title: 'BINGO',
      desc: [
        '2줄의 빙고가 완성되면 팀 번호와 함께 "빙고!"를 외쳐주세요.',
        '담당 임원의 확인 후 점수가 반영됩니다.',
      ],
    },
  ],
  en: [
    {
      step: 'STEP 1',
      title: 'MISSION CHECK & PLAN',
      desc: [
        'Check missions 1–16 on screen and via QR code.',
        'Discuss with your teammates to strategize where to place each mission number on your bingo board.',
      ],
      timeLimit: '⏱️ Time limit: 5 minutes',
    },
    {
      step: 'STEP 2',
      title: 'PLACE THE NUMBERS',
      desc: ['Place mission numbers 1–16 on your bingo board according to your team strategy.'],
    },
    {
      step: 'STEP 3',
      title: 'MISSION PLAY',
      desc: [
        'Perform the mission of the randomly called number. If successful, get verified by a staff member and check the box.',
      ],
    },
    {
      step: 'STEP 4',
      title: 'BINGO',
      desc: [
        'When you complete 2 lines of Bingo, shout "BINGO!" along with your team number.',
        'Scores are recorded after verification by a staff member.',
      ],
    },
  ],
  ja: [
    {
      step: 'STEP 1',
      title: 'MISSION CHECK & PLAN',
      desc: [
        'スクリーンとQRコードから1~16番のミッションを確認してください。',
        'チームメンバーと相談し、どのミッション番号をどこに配置するか戦略を立ててください。',
      ],
      timeLimit: '⏱️ 制限時間 5分',
    },
    {
      step: 'STEP 2',
      title: 'PLACE THE NUMBERS',
      desc: ['戦略に従って1~16番のミッション番号をビンゴ表に配置してください。'],
    },
    {
      step: 'STEP 3',
      title: 'MISSION PLAY',
      desc: [
        'ランダムに発表される番号のミッションを行い、成功したら担当役員の確認を受けてマスにチェックします。',
      ],
    },
    {
      step: 'STEP 4',
      title: 'BINGO',
      desc: [
        '2列のビンゴが揃ったら、チーム番号と一緒に「ビンゴ！」と叫んでください。',
        '担当役員の確認後に得点が反映されます。',
      ],
    },
  ],
  zh: [
    {
      step: 'STEP 1',
      title: 'MISSION CHECK & PLAN',
      desc: [
        '通过大屏幕和二维码查看1~16号任务。',
        '与队员商讨策略，决定将哪些任务编号填在 Bingo 盘的对应格子里。',
      ],
      timeLimit: '⏱️ 限时 5分钟',
    },
    {
      step: 'STEP 2',
      title: 'PLACE THE NUMBERS',
      desc: ['根据团队策略，将1~16号任务编号填入 Bingo 盘中。'],
    },
    {
      step: 'STEP 3',
      title: 'MISSION PLAY',
      desc: [
        '执行随机抽取的任务编号。任务成功后经负责人确认并在对应格子里打勾。',
      ],
    },
    {
      step: 'STEP 4',
      title: 'BINGO',
      desc: [
        '当达成 2条直线（Bingo）时，请高喊队号与“Bingo！”。',
        '经负责人确认后计入得分。',
      ],
    },
  ],
};
