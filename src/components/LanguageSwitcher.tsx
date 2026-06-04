import { Check, ChevronDown } from 'lucide-react';
import { localeOptions } from '../config';
import { useI18n } from '../i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface LanguageSwitcherProps {
  label: string;
  dark?: boolean;
}

export function LanguageSwitcher({ label, dark = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const activeLocale = localeOptions.find((option) => option.value === locale) ?? localeOptions[0];
  const triggerClasses = dark
    ? 'border-white/12 bg-forest-dark text-white shadow-[0_10px_30px_rgba(103,17,39,0.24)]'
    : 'border-white/20 bg-white/10 text-white shadow-none';
  const menuClasses = dark
    ? 'border-secondary/45 bg-secondary text-softblack shadow-[0_18px_45px_rgba(255,140,67,0.28)]'
    : 'border-secondary/45 bg-secondary text-softblack shadow-[0_18px_45px_rgba(255,140,67,0.28)]';

  const renderFlag = (option: typeof activeLocale, sizeClass: string) => {
    if (option.flagSrc) {
      return (
        <img
          src={option.flagSrc}
          alt=""
          aria-hidden="true"
          className={`${sizeClass} rounded-[2px] object-cover`}
        />
      );
    }

    return (
      <span className="text-base leading-none" aria-hidden="true">
        {option.flag}
      </span>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={[
            'inline-flex items-center gap-2 rounded-full border px-3 py-2 font-sans text-[0.72rem] font-semibold tracking-[0.16em] backdrop-blur transition-colors duration-300 md:px-4 md:py-2.5 md:text-xs',
            triggerClasses,
          ].join(' ')}
          aria-label={label}
        >
          {renderFlag(activeLocale, 'h-4 w-5')}
          <span>{activeLocale.label}</span>
          <ChevronDown className="size-4 opacity-80" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={['min-w-[12rem] rounded-2xl p-2', menuClasses].join(' ')}
      >
        {localeOptions.map((option) => {
          const isActive = option.value === locale;

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setLocale(option.value)}
              className={[
                'rounded-xl px-3 py-3 font-sans text-sm',
                'focus:bg-white/18',
              ].join(' ')}
            >
              {renderFlag(option, 'h-4 w-5')}
              <span className="flex min-w-0 flex-1 items-center justify-between gap-3">
                <span className="truncate">{option.name}</span>
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] opacity-70">
                  {option.label}
                </span>
              </span>
              {isActive && <Check className="ml-auto size-4" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
