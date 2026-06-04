import { ChevronDown, Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { localeOptions } from '../config';
import { useI18n } from '../i18n';

interface LanguageSwitcherProps {
  label: string;
}

export function LanguageSwitcher({ label }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLocale = localeOptions.find((option) => option.value === locale) ?? localeOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={label}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-white shadow-[0_14px_38px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors duration-300 hover:bg-white/16"
      >
        <Menu aria-hidden="true" className="h-4 w-4" />
        <span aria-hidden="true" className="text-base leading-none">{currentLocale.flag}</span>
        <span className="hidden text-xs font-sans font-semibold uppercase tracking-[0.16em] sm:inline">
          {currentLocale.label}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={label}
          className="absolute right-0 mt-3 w-48 overflow-hidden rounded-3xl border border-white/18 bg-forest-dark/96 p-2 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          {localeOptions.map((option) => {
            const isActive = option.value === locale;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setLocale(option.value);
                  setIsOpen(false);
                }}
                className={[
                  'flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left font-body text-sm transition-colors duration-300',
                  isActive
                    ? 'bg-secondary text-softblack'
                    : 'text-white/84 hover:bg-white/12 hover:text-white',
                ].join(' ')}
              >
                <span aria-hidden="true" className="text-lg leading-none">{option.flag}</span>
                <span className="flex-1">{option.name}</span>
                <span className="font-sans text-[0.64rem] font-bold uppercase tracking-[0.16em]">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
