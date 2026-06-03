import { useEffect, useRef, useState } from 'react';
import type { StatItem } from '../config';

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  shouldAnimate: boolean;
  useGrouping?: boolean;
}

interface StatsCardProps {
  stats: StatItem[];
  shouldAnimate: boolean;
  label?: string;
  className?: string;
  valueClassName?: string;
}

function Counter({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  shouldAnimate,
  useGrouping = false,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const newCount = Math.floor(easeProgress * end);

      if (newCount !== countRef.current) {
        countRef.current = newCount;
        setCount(newCount);
      }

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, shouldAnimate]);

  return (
    <span>
      {prefix}
      {count.toLocaleString('es-ES', { useGrouping })}
      {suffix}
    </span>
  );
}

export function StatsCard({
  stats,
  shouldAnimate,
  label,
  className = '',
  valueClassName = 'text-4xl md:text-5xl',
}: StatsCardProps) {
  if (stats.length === 0) return null;

  return (
    <div className={className}>
      {label && (
        <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-8">
          {label}
        </p>
      )}
      <div className="space-y-8">
        {stats.map((stat, index) => (
          <div key={`${stat.label}-${index}`} className="border-b border-softblack/10 pb-6 last:border-0">
            <p className={`${valueClassName} font-sans font-bold text-softblack tracking-tight`}>
              <Counter
                end={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                shouldAnimate={shouldAnimate}
                useGrouping={stat.useGrouping}
              />
            </p>
            <p className="text-softblack/60 font-body text-sm mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
