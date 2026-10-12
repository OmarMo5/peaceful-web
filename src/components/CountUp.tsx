import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** A value such as "10M+", "25+" or "4" - the leading digits are animated, the rest is kept as a suffix. */
  value: string;
  duration?: number;
}

const CountUp = ({ value, duration = 1800 }: CountUpProps) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  // Start from the final value so the correct number is always shown, even if the animation never runs.
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = 0;
    const run = () => {
      setCurrent(0);
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setCurrent(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums" aria-label={value}>
      {current}
      {suffix}
    </span>
  );
};

export default CountUp;
