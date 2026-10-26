import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../data/types';
import '../styles/conversion.css';

const IMAGE_INTERVAL_MS = 5500;
const VIDEO_FALLBACK_MS = 16000;

type Props = {
  slides: HeroSlide[];
  /** Titre visible (h1) : le résultat pour le client, en mots simples */
  headline: string;
  subline: string;
  eyebrow: string;
  /** Réassurance sous les CTA : gratuit · 15 min · sans engagement */
  reassurance: string;
  slideLabel: string;
  scrollLabel: string;
  scrollHref?: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
};

export default function Hero({
  slides,
  headline,
  subline,
  eyebrow,
  reassurance,
  slideLabel,
  scrollLabel,
  scrollHref = '#services',
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const active = slides[index];

  useEffect(() => {
    setVideoFailed(false);
  }, [index]);

  useEffect(() => {
    if (paused) return;

    const slide = slides[index];
    const hasVideo = Boolean(slide.video) && !videoFailed;

    if (!hasVideo) {
      const id = window.setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, IMAGE_INTERVAL_MS);
      return () => window.clearInterval(id);
    }

    const video = videoRef.current;
    let advanced = false;
    const advance = () => {
      if (advanced) return;
      advanced = true;
      setIndex((i) => (i + 1) % slides.length);
    };

    const onEnded = () => advance();
    const onError = () => {
      setVideoFailed(true);
      advance();
    };

    let fallback = 0;
    let removed = false;

    const startPlayback = () => {
      if (removed || !video) return;
      try {
        if (video.readyState >= 1) {
          video.currentTime = 0;
        }
      } catch {
        /* ignore seek before metadata */
      }
      void video.play().catch(() => {
        setVideoFailed(true);
      });
    };

    if (video) {
      video.addEventListener('ended', onEnded);
      video.addEventListener('error', onError);
      if (video.readyState >= 2) {
        startPlayback();
      } else {
        video.addEventListener('canplay', startPlayback, { once: true });
        video.load();
      }
    }

    fallback = window.setTimeout(advance, VIDEO_FALLBACK_MS);

    return () => {
      removed = true;
      video?.removeEventListener('ended', onEnded);
      video?.removeEventListener('error', onError);
      video?.removeEventListener('canplay', startPlayback);
      try {
        video?.pause();
      } catch {
        /* ignore */
      }
      window.clearTimeout(fallback);
    };
  }, [index, paused, slides, videoFailed]);

  useEffect(() => {
    if (!paused) return;
    try {
      videoRef.current?.pause();
    } catch {
      /* ignore */
    }
  }, [paused]);

  return (
    <section
      className="hero"
      id="hero"
      data-node-id="1:6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero__slides">
        {slides.map((slide, i) => {
          const activeSlide = i === index;
          const slideShowVideo = activeSlide && Boolean(slide.video) && !videoFailed;
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

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__copy hero__copy--offer">
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1 className="hero__headline">{headline}</h1>
        <p className="hero__subline">{subline}</p>
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
        <p className="hero__reassurance">{reassurance}</p>
      </div>

      <p className="hero__slide-label">
        <span className="hero__slide-label-kicker">{slideLabel}</span>
        <span className="hero__slide-label-title">{active.title}</span>
      </p>

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

      <a className="hero__scroll" href={scrollHref} aria-label={scrollLabel}>
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
