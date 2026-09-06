import React from 'react';
import { Plane, HelpCircle, QrCode } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenHowToPlay: () => void;
  onOpenQR: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenHowToPlay,
  onOpenQR,
}) => {
  const t = UI_TRANSLATIONS[currentLang];

  const languages: { code: Language; label: string }[] = [
    { code: 'ko', label: 'KR' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JP' },
    { code: 'zh', label: 'CN' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#5abff7]/95 backdrop-blur-md border-b border-sky-300/80 shadow-xs">
      <div className="max-w-xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
        {/* Brand & Gen with Plane Logo (비행기 아이콘으로 변경) */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#0f2b5c] text-white flex items-center justify-center shadow-xs">
            <Plane className="w-4 h-4 rotate-45 transform text-sky-200" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-black text-sm tracking-tight text-[#0a1e3f] drop-shadow-2xs">
                {t.brand}
              </span>
              <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full bg-[#0f2b5c] text-white shadow-2xs">
                {t.generation}
              </span>
            </div>
            <span className="text-[10px] font-bold text-sky-950/80 tracking-wide block mt-0.5">
              {t.eventTitle}
            </span>
          </div>
        </div>

        {/* Action Buttons & Language Switcher */}
        <div className="flex items-center gap-1.5">
          {/* How To Play Button */}
          <button
            onClick={onOpenHowToPlay}
            className="px-2.5 py-1.5 rounded-xl bg-white/95 hover:bg-white text-[#0f2b5c] font-black text-xs flex items-center gap-1 shadow-xs transition-transform active:scale-95 border border-sky-200"
            title={t.bottomHowToPlay}
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>{t.bottomHowToPlay}</span>
          </button>

          {/* QR Button */}
          <button
            onClick={onOpenQR}
            aria-label="QR Code"
            className="p-1.5 rounded-xl bg-white/85 hover:bg-white text-[#0f2b5c] transition-colors shadow-2xs border border-sky-100"
            title={t.qrModalBtn}
          >
            <QrCode className="w-4 h-4" />
          </button>

          {/* Language Switcher Pills */}
          <div className="flex items-center bg-[#0f2b5c]/25 p-0.5 rounded-xl border border-white/30">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`px-2 py-1 text-[11px] font-black rounded-lg transition-all ${
                  currentLang === lang.code
                    ? 'bg-[#0f2b5c] text-white shadow-xs'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
