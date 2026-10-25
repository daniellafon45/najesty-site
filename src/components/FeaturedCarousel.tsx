import { useEffect, useRef, useState } from 'react';

const IMAGE_MS = 4500;
const VIDEO_FALLBACK_MS = 14000;

type Props = {
  image: string;
  video: string;
  alt: string;
};

export default function FeaturedCarousel({ image, video, alt }: Props) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const slides = ['image', 'video'] as const;
  const active = slides[index];

  useEffect(() => {
    if (active === 'image') {
      const id = window.setTimeout(() => setIndex(1), IMAGE_MS);
      return () => window.clearTimeout(id);
    }

    const el = videoRef.current;
    let advanced = false;
    const advance = () => {
      if (advanced) return;
      advanced = true;
      setIndex(0);
    };

    if (el) {
      el.currentTime = 0;
      void el.play().catch(() => {});
      el.addEventListener('ended', advance);
    }

    const fallback = window.setTimeout(advance, VIDEO_FALLBACK_MS);
    return () => {
      el?.removeEventListener('ended', advance);
      el?.pause();
      window.clearTimeout(fallback);
    };
  }, [active]);

  return (
    <div className="work__featured-carousel" aria-roledescription="carousel">
      <div
        className={`work__featured-slide${active === 'image' ? ' is-active' : ''}`}
        aria-hidden={active !== 'image'}
      >
        <img src={image} alt={alt} loading="eager" />
      </div>
      <div
        className={`work__featured-slide${active === 'video' ? ' is-active' : ''}`}
        aria-hidden={active !== 'video'}
      >
        <video
          ref={videoRef}
          className="work__featured-video"
          src={video}
          poster={image}
          muted
          playsInline
          preload="auto"
          aria-label={alt}
        />
      </div>
      <div className="work__featured-dots" role="tablist" aria-label="Médias">
        {slides.map((slide, i) => (
          <button
            key={slide}
            type="button"
            className={`work__featured-dot${index === i ? ' is-active' : ''}`}
            aria-label={slide === 'image' ? 'Image' : 'Vidéo'}
            aria-selected={index === i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
