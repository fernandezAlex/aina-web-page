import { localeOptions } from '../config';
import { useI18n } from '../i18n';

interface LanguageSwitcherProps {
  label: string;
}

export function LanguageSwitcher({ label }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-1.5 py-1.5 backdrop-blur md:gap-2 md:px-2 md:py-2"
      aria-label={label}
      role="group"
    >
      <span className="sr-only">{label}</span>
      {localeOptions.map((option) => {
        const isActive = option.value === locale;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={isActive}
            className={[
              'rounded-full px-2.5 py-1.5 text-[0.68rem] font-sans font-semibold tracking-[0.14em] transition-colors duration-300 md:px-3 md:text-xs md:tracking-[0.18em]',
              isActive
                ? 'bg-secondary text-softblack'
                : 'text-white/78 hover:bg-white/12 hover:text-white',
            ].join(' ')}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
