import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type CursorMode = 'default' | 'hover' | 'go' | 'text' | 'cta';

/** Survol d’une carte / frame image projet → curseur « avant » (cercle + flèche) */
function isProjectMedia(el: Element | null): boolean {
  if (!el) return false;
  return Boolean(
    el.closest(
      '.work__item, .page-work__card, .work__frame, .page-work__frame, [data-cursor="view"], [data-cursor="go"]',
    ),
  );
}

function resolveMode(el: Element | null): CursorMode {
  if (!el) return 'default';

  const tagged = el.closest('[data-cursor]') as HTMLElement | null;
  const raw = tagged?.dataset.cursor;
  if (raw === 'none') return 'default';
  if (raw === 'go' || raw === 'view') return 'go';
  if (raw === 'hover' || raw === 'text' || raw === 'cta') return raw;

  if (isProjectMedia(el)) return 'go';
  if (el.closest('input, textarea, [contenteditable="true"]')) return 'text';
  if (el.closest('.manifesto__cta, .footer__form button, button[type="submit"]')) return 'cta';
  if (
    el.closest(
      'a, button, [role="button"], summary, label, .hero__dot, .hero__scroll, [data-cursor]',
    )
  ) {
    return 'hover';
  }

  return 'default';
}

function resolveLabel(mode: CursorMode, el: Element | null): string {
  if (mode === 'go') return '';
  const tagged = el?.closest('[data-cursor-label]') as HTMLElement | null;
  if (tagged?.dataset.cursorLabel) return tagged.dataset.cursorLabel;
  if (el?.closest('a[href^="mailto"]')) return 'Écrire';
  if (mode === 'cta') return 'Go';
  return '';
}

function isDarkSurface(el: Element | null): boolean {
  if (!el) return false;
  return Boolean(
    el.closest(
      '.hero, .marquee, .site-footer, .site-header:not(.is-light), [data-cursor-dark]',
    ),
  );
}

export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const modeRef = useRef<CursorMode>('default');
  const labelRef = useRef('');
  const visibleRef = useRef(false);
  const pressedRef = useRef(false);
  const invertedRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setEnabled(mq.matches && !reduce.matches);
    sync();
    mq.addEventListener('change', sync);
    reduce.addEventListener('change', sync);
    return () => {
      mq.removeEventListener('change', sync);
      reduce.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    let raf = 0;
    const lerp = 0.22;

    const applyClasses = () => {
      const wrap = rootRef.current;
      const ring = ringRef.current;
      const dot = dotRef.current;
      if (!ring || !dot) return;

      const mode = modeRef.current;
      const label = labelRef.current;
      const vis = visibleRef.current ? ' is-on' : '';
      const press = pressedRef.current ? ' is-pressed' : '';
      const hasLabel = label ? ' has-label' : '';

      if (wrap) {
        wrap.className = `c-cursor${invertedRef.current ? ' is-inverted' : ''}`;
      }
      ring.className = `c-cursor__ring is-${mode}${hasLabel}${press}${vis}`;
      dot.className = `c-cursor__dot is-${mode}${press}${vis}`;

      const labelEl = ring.querySelector('.c-cursor__label');
      if (labelEl && labelEl.textContent !== label) {
        labelEl.textContent = label;
      }
    };

    const setPressed = (value: boolean) => {
      if (pressedRef.current === value) return;
      pressedRef.current = value;
      applyClasses();
    };

    const render = () => {
      pos.current.x += (target.current.x - pos.current.x) * lerp;
      pos.current.y += (target.current.y - pos.current.y) * lerp;

      const ring = ringRef.current;
      const dot = dotRef.current;
      const pressScale = pressedRef.current ? 0.9 : 1;

      if (ring) {
        ring.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${pressScale})`;
      }
      if (dot) {
        const dotScale = pressedRef.current ? 0.7 : 1;
        dot.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }

      raf = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      let becameVisible = false;
      if (!visibleRef.current) {
        visibleRef.current = true;
        becameVisible = true;
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const nextMode = resolveMode(el);
      const nextLabel = resolveLabel(nextMode, el);
      const nextInverted = isDarkSurface(el);

      if (
        becameVisible ||
        nextMode !== modeRef.current ||
        nextLabel !== labelRef.current ||
        nextInverted !== invertedRef.current
      ) {
        modeRef.current = nextMode;
        labelRef.current = nextLabel;
        invertedRef.current = nextInverted;
        applyClasses();
      }
    };

    const onEnter = () => {
      visibleRef.current = true;
      applyClasses();
    };
    const onLeave = () => {
      visibleRef.current = false;
      modeRef.current = 'default';
      labelRef.current = '';
      setPressed(false);
      applyClasses();
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') setPressed(true);
    };
    const onUp = () => setPressed(false);
    const onCancel = () => setPressed(false);
    const onBlur = () => setPressed(false);

    applyClasses();
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseenter', onEnter);
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onCancel);
    window.addEventListener('blur', onBlur);
    document.addEventListener('visibilitychange', onBlur);
    raf = requestAnimationFrame(render);

    return () => {
      root.classList.remove('has-custom-cursor');
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onCancel);
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange', onBlur);
    };
  }, [enabled]);

  if (!enabled || !mounted) return null;

  return createPortal(
    <div ref={rootRef} className="c-cursor" aria-hidden="true">
      <div ref={ringRef} className="c-cursor__ring is-default">
        <span className="c-cursor__label" />
        <span className="c-cursor__go" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
            <path
              d="M5 12h12M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div ref={dotRef} className="c-cursor__dot is-default" />
    </div>,
    document.body,
  );
}
