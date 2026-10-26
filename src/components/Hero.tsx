import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../data/types';

const IMAGE_INTERVAL_MS = 5500;
const VIDEO_FALLBACK_MS = 16000;

type Props = {
  slides: HeroSlide[];
  seoH1: string;
  scrollLabel: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
};

export default function Hero({
  slides,
  seoH1,
  scrollLabel,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedIndex, setFailedIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const active = slides[index];
  const showsVideo = Boolean(active.video) && failedIndex !== index;

  // Slides image : défilement automatique, en pause tant que la souris survole le hero.
  useEffect(() => {
    if (showsVideo || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, IMAGE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [showsVideo, paused, slides.length]);

  // Slide vidéo : lecture jusqu'au bout puis slide suivante (le survol ne la fige pas).
  useEffect(() => {
    if (!showsVideo) return;
    const video = videoRef.current;
    if (!video) return;

    let done = false;
    let fallback = 0;
    const advance = () => {
      if (done) return;
      done = true;
      setIndex((i) => (i + 1) % slides.length);
    };
    const fail = () => {
      if (done) return;
      done = true;
      setFailedIndex(index);
    };
    // Filet de sécurité si `ended` n'arrive jamais (durée réelle + marge).
    const armFallback = () => {
      window.clearTimeout(fallback);
      const ms =
        Number.isFinite(video.duration) && video.duration > 0
          ? video.duration * 1000 + 2000
          : VIDEO_FALLBACK_MS;
      fallback = window.setTimeout(advance, ms);
    };

    video.addEventListener('ended', advance);
    video.addEventListener('error', fail);
    video.addEventListener('playing', armFallback);
    try {
      video.currentTime = 0;
    } catch {
      /* ignore seek before metadata */
    }
    video.play().catch((err: unknown) => {
      if ((err as { name?: string } | null)?.name !== 'AbortError') fail();
    });

    return () => {
      done = true;
      video.removeEventListener('ended', advance);
      video.removeEventListener('error', fail);
      video.removeEventListener('playing', armFallback);
      window.clearTimeout(fallback);
      try {
        video.pause();
      } catch {
        /* ignore */
      }
    };
  }, [showsVideo, index, slides.length]);

  return (
    <section
      className="hero"
      id="hero"
      data-node-id="1:6"
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') setPaused(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') setPaused(false);
      }}
    >
      <h1 className="visually-hidden">{seoH1}</h1>

      <div className="hero__slides">
        {slides.map((slide, i) => {
          const activeSlide = i === index;
          const slideShowVideo = activeSlide && Boolean(slide.video) && failedIndex !== i;
          return (
            <div
              key={slide.id}
              className={`hero__slide${activeSlide ? ' is-active' : ''}`}
              aria-hidden={!activeSlide}
            >
              <div className="hero__media">
                {slide.image && (
                  <img
                    key={activeSlide && !slideShowVideo ? `zoom-${slide.id}` : slide.id}
                    className={`hero__image${activeSlide && !slideShowVideo ? ' is-zooming' : ''}${slideShowVideo ? ' hero__image--poster' : ''}`}
                    src={slide.image}
                    alt={slide.caption}
                    width={1920}
                    height={1080}
                    decoding={i === 0 ? 'sync' : 'async'}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : 'low'}
                  />
                )}
                {slideShowVideo && slide.video && (
                  <video
                    ref={videoRef}
                    className="hero__video"
                    src={slide.video}
                    poster={slide.image}
                    muted
                    playsInline
                    autoPlay
                    preload="none"
                    disablePictureInPicture
                    aria-label={slide.title}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero__copy">
        <p className="hero__title">{active.title}</p>
        <p className="hero__caption">{active.caption}</p>
        <div className="hero__actions">
          <a
            className="hero__cta hero__cta--primary"
            href={primaryHref}
            data-cursor="cta"
            data-cursor-label="Go"
          >
            {primaryCta}
          </a>
          <a
            className="hero__cta hero__cta--ghost"
            href={secondaryHref}
            data-cursor="view"
          >
            {secondaryCta}
          </a>
        </div>
      </div>

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
