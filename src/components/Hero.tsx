import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../data/types';

const IMAGE_INTERVAL_MS = 5500;
const VIDEO_FALLBACK_MS = 16000;

type Props = {
  slides: HeroSlide[];
  seoH1: string;
  scrollLabel: string;
};

export default function Hero({ slides, seoH1, scrollLabel }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const active = slides[index];

  useEffect(() => {
    if (paused) return;

    const slide = slides[index];

    if (slide.video) {
      const video = videoRef.current;
      let advanced = false;
      const advance = () => {
        if (advanced) return;
        advanced = true;
        setIndex((i) => (i + 1) % slides.length);
      };

      if (video) {
        video.currentTime = 0;
        void video.play().catch(() => {});
        video.addEventListener('ended', advance);
      }

      const fallback = window.setTimeout(advance, VIDEO_FALLBACK_MS);

      return () => {
        video?.removeEventListener('ended', advance);
        video?.pause();
        window.clearTimeout(fallback);
      };
    }

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, IMAGE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [index, paused, slides]);

  useEffect(() => {
    if (!paused) return;
    videoRef.current?.pause();
  }, [paused]);

  return (
    <section
      className="hero"
      id="hero"
      data-node-id="1:6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h1 className="visually-hidden">{seoH1}</h1>

      <div className="hero__slides">
        {slides.map((slide, i) => {
          const activeSlide = i === index;
          return (
            <div
              key={slide.id}
              className={`hero__slide${activeSlide ? ' is-active' : ''}`}
              aria-hidden={!activeSlide}
            >
              <div className="hero__media">
                {slide.image && (
                  <img
                    key={activeSlide && !slide.video ? `zoom-${slide.id}` : slide.id}
                    className={`hero__image${activeSlide && !slide.video ? ' is-zooming' : ''}${slide.video ? ' hero__image--poster' : ''}`}
                    src={slide.image}
                    alt={slide.caption}
                  />
                )}
                {slide.video && (
                  <video
                    ref={activeSlide ? videoRef : undefined}
                    className="hero__video"
                    src={slide.video}
                    poster={slide.image}
                    muted
                    playsInline
                    preload="auto"
                    aria-label={slide.title}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <a className="hero__copy" href={active.href} data-cursor="view">
        <p className="hero__title">{active.title}</p>
        <p className="hero__caption">{active.caption}</p>
      </a>

      <div className="hero__dots" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`hero__dot${i === index ? ' is-active' : ''}`}
            aria-label={slide.title}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <a className="hero__scroll" href="#vision" aria-label={scrollLabel}>
        <span className="hero__scroll-ring" />
        <img
          className="hero__scroll-arrow"
          src="/images/icons/scroll-arrow.svg"
          alt=""
          width={29}
          height={42}
        />
      </a>
    </section>
  );
}
