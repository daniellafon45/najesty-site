import { useEffect, useState } from 'react';

const INTERVAL_MS = 4800;

type Slide = {
  src: string;
  alt: string;
};

type Props = {
  slides: Slide[];
  label: string;
  caption?: string;
  prevLabel: string;
  nextLabel: string;
};

export default function FounderCarousel({
  slides,
  label,
  caption,
  prevLabel,
  nextLabel,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (count < 2 || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [count, paused]);

  if (!count) return null;

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + count) % count);
  };

  return (
    <div
      className="founder-carousel"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="founder-carousel__frame">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`founder-carousel__slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <img
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              className="founder-carousel__nav founder-carousel__nav--prev"
              aria-label={prevLabel}
              onClick={() => go(-1)}
            >
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="founder-carousel__nav founder-carousel__nav--next"
              aria-label={nextLabel}
              onClick={() => go(1)}
            >
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {caption && <p className="founder-carousel__caption">{caption}</p>}

      {count > 1 && (
        <div className="founder-carousel__dots" role="tablist" aria-label={label}>
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              className={`founder-carousel__dot${i === index ? ' is-active' : ''}`}
              aria-label={`${i + 1} / ${count}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
