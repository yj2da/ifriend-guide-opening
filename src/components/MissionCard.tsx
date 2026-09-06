import React from 'react';
import { Clock, Users, Sparkles, Star } from 'lucide-react';
import { Mission, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { LifebuoyBadge } from './BeachIcons';

interface MissionCardProps {
  mission: Mission;
  currentLang: Language;
}

export const MissionCard: React.FC<MissionCardProps> = ({ mission, currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isLucky = mission.id === 16;
  const currentDetail = mission[currentLang];

  return (
    <div
      id={`mission-${mission.id}`}
      className={`relative rounded-[2rem] p-4 sm:p-5 transition-all scroll-mt-28 border-2 shadow-xs ${
        isLucky
          ? 'bg-gradient-to-b from-amber-50 to-orange-50/80 border-amber-300'
          : 'bg-white/95 border-sky-100 hover:border-sky-300'
      }`}
    >
      {/* Top Bar: Lifebuoy Number Badge + Tag + Time limit */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2.5">
          {/* Lifebuoy with number */}
          <LifebuoyBadge number={mission.id} size={42} />

          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                {mission.tag}
              </span>
              {mission.isOx && (
                <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  {t.oxBadge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Info Badges */}
        <div className="flex items-center gap-1.5">
          {currentDetail.targetCount && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-xl bg-slate-100 text-slate-700">
              <Users className="w-3 h-3 text-slate-500" />
              <span>{currentDetail.targetCount}</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-xl bg-[#f06e50] text-white shadow-2xs">
            <Clock className="w-3 h-3 text-white" />
            <span>{currentDetail.timeLimit || t.timeLimitVal}</span>
          </span>
        </div>
      </div>

      {/* Single Selected Language Display (선택된 언어만 표시) */}
      <div className="space-y-2.5">
        {/* Title & Condition Card (Slide primary blue style) */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-100/85 border-2 border-sky-200/90 shadow-2xs">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#0f2b5c] text-white uppercase tracking-wider">
              {currentLang.toUpperCase()}
            </span>
            <h3 className="text-base sm:text-lg font-black text-sky-950 tracking-tight leading-tight">
              {currentDetail.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-bold text-sky-900 leading-relaxed pl-1">
            {currentDetail.condition}
          </p>
        </div>

        {/* Special O/X Guidance (For Category 2) */}
        {mission.isOx && (
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold text-amber-900">
                {t.oxHint}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-black text-xs">
              <span className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                O
              </span>
              <span className="w-6 h-6 rounded-lg bg-rose-500 text-white flex items-center justify-center shadow-xs">
                X
              </span>
            </div>
          </div>
        )}

        {/* Key Condition / Notes Box */}
        {currentDetail.notes && !isLucky && (
          <div className="px-3 py-2 rounded-xl bg-amber-50/80 border border-amber-200/70 flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
            <p className="text-[11px] font-bold text-amber-950 leading-tight">
              <span className="text-amber-800">{t.keyCondition}:</span> {currentDetail.notes}
            </p>
          </div>
        )}

        {/* Lucky Chance Banner */}
        {isLucky && (
          <div className="p-2.5 rounded-xl bg-orange-100/90 border border-orange-300 text-orange-950 text-xs font-black flex items-center justify-center gap-1.5 text-center">
            <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
            <span>{t.luckyBanner}</span>
          </div>
        )}
      </div>
    </div>
  );
};
