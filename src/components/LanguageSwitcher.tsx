import { localeOptions } from '../config';
import { useI18n } from '../i18n';

interface LanguageSwitcherProps {
  label: string;
}

export function LanguageSwitcher({ label }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-2 backdrop-blur"
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
              'rounded-full px-3 py-1.5 text-xs font-sans font-semibold tracking-[0.18em] transition-colors duration-300',
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
