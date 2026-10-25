import { useEffect, useRef } from 'react';

type Line = { text: string; accent?: 'arrow' };

type Props = {
  lines: Line[];
  cta: string;
  ctaHref: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
};

/**
 * Reveal ligne par ligne au scroll — même logique que Generous (.b-scroll-text) :
 * future → visible (wipe) → past (opacité faible).
 */
export default function Manifesto({
  lines,
  cta,
  ctaHref,
  secondaryCta,
  secondaryCtaHref,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const lineEls = Array.from(root.querySelectorAll<HTMLElement>('[data-line]'));
    if (!lineEls.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      lineEls.forEach((el) => {
        el.classList.add('is-in', 'is-visible');
        el.classList.remove('is-future', 'is-past');
      });
      return;
    }

    let raf = 0;
    let active = false;

    const update = () => {
      const trigger = window.innerHeight * 0.62;
      const pastBand = window.innerHeight * 0.28;

      lineEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height * 0.5;

        el.classList.add('is-in');
        el.classList.remove('is-visible', 'is-past', 'is-future');

        if (mid < pastBand) {
          el.classList.add('is-past');
        } else if (mid < trigger) {
          el.classList.add('is-visible');
        } else {
          el.classList.add('is-future');
        }
      });
    };

    const loop = () => {
      update();
      if (active) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (active) return;
      active = true;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      active = false;
      cancelAnimationFrame(raf);
      update();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { rootMargin: '25% 0px' },
    );
    io.observe(root);
    window.addEventListener('resize', update);
    update();

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [lines]);

  const aria = lines.map((l) => l.text).join(' ');

  return (
    <section className="manifesto" id="vision" data-node-id="1:131" ref={rootRef}>
      <div className="manifesto__inner">
        <div className="manifesto__col">
          <div className="manifesto__scroll-text" aria-label={aria}>
            {lines.map((line, i) => (
              <div
                key={`${i}-${line.text}`}
                className="manifesto__line is-future"
                data-line
                aria-hidden="true"
              >
                {line.accent === 'arrow' && (
                  <span className="manifesto__line-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" width="1em" height="1em">
                      <path
                        d="M4 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
                <span className="manifesto__line-text">{line.text}</span>
              </div>
            ))}
          </div>
          <div className="manifesto__actions">
            <a
              className="manifesto__cta"
              href={ctaHref}
              data-cursor="cta"
              data-cursor-label="Go"
            >
              {cta}
              <span aria-hidden="true">↗</span>
            </a>
            {secondaryCta && secondaryCtaHref && (
              <a
                className="manifesto__cta manifesto__cta--secondary"
                href={secondaryCtaHref}
                data-cursor="cta"
                data-cursor-label="Go"
              >
                {secondaryCta}
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
