import React, { useState } from 'react';
import { X, Copy, Check, QrCode } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose, currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#fef8ee] w-full max-w-sm rounded-3xl p-6 shadow-2xl border-4 border-white flex flex-col items-center text-center">
        {/* Modal Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-sky-100 mb-4">
          <div className="flex items-center gap-2 text-[#0f2b5c] font-black text-base">
            <QrCode className="w-5 h-5 text-[#0284c7]" />
            <span>{t.qrModalTitle}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* QR Code Image Container */}
        <div className="p-4 bg-white rounded-2xl border-2 border-dashed border-sky-300 mb-3 relative group shadow-xs">
          <img
            src={`${import.meta.env.BASE_URL}qr-guide.jpeg`}
            alt="Guidebook QR Code"
            className="w-52 h-52 object-contain rounded-xl"
          />
        </div>

        <p className="text-xs text-slate-600 mb-4 leading-relaxed font-semibold">
          {t.qrModalDesc}
        </p>

        {/* Copy Link Button */}
        <div className="w-full flex flex-col gap-2">
          <button
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-sky-50 text-[#0f2b5c] border-2 border-sky-200 font-black text-xs flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-black">{t.copiedNotice}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-sky-600" />
                <span>{t.shareTitle}</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#0f2b5c] hover:bg-[#1a3a6c] text-white font-black text-xs transition-colors shadow-xs"
          >
            {t.howToPlayClose}
          </button>
        </div>
      </div>
    </div>
  );
};
