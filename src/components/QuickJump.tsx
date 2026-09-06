import React from 'react';
import { Mission, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { LifebuoyBadge } from './BeachIcons';

interface QuickJumpProps {
  missions: Mission[];
  currentLang: Language;
  activeId: number | null;
  onSelectMission: (id: number) => void;
}

export const QuickJump: React.FC<QuickJumpProps> = ({
  missions,
  currentLang,
  activeId,
  onSelectMission,
}) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <div className="max-w-xl mx-auto px-4 mt-2 mb-3">
      <div className="flex items-center justify-between mb-1.5 px-1">
        <span className="text-[11px] font-black text-orange-600 uppercase tracking-wider flex items-center gap-1">
          <span>🛟 {t.quickJumpTitle} (1~16)</span>
        </span>
        <span className="text-[11px] font-bold text-slate-400">
          {t.quickJumpHint}
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1">
        {missions.map((mission) => {
          const isActive = activeId === mission.id;

          return (
            <button
              key={mission.id}
              onClick={() => onSelectMission(mission.id)}
              className={`flex-shrink-0 transition-all rounded-full ${
                isActive
                  ? 'scale-110 ring-3 ring-orange-500 ring-offset-2'
                  : 'hover:scale-105 opacity-90 hover:opacity-100'
              }`}
            >
              <LifebuoyBadge number={mission.id} size={36} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
