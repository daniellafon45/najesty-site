import { useEffect, useState } from 'react';
import type { Locale } from '../data/types';

type NavItem = { label: string; href: string };

type Props = {
  forceLight?: boolean;
  forceDark?: boolean;
  activePath?: string;
  locale?: Locale;
  nav: NavItem[];
  brandName: string;
  legalName: string;
  homeHref: string;
  langSwitchHref: string;
  ui: {
    navLabel: string;
    openMenu: string;
    closeMenu: string;
    langSwitchLabel: string;
  };
};

export default function Header({
  forceLight = false,
  forceDark = false,
  activePath = '/',
  nav,
  brandName,
  legalName,
  homeHref,
  langSwitchHref,
  ui,
}: Props) {
  const [light, setLight] = useState(forceLight && !forceDark);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (forceDark) {
      setLight(false);
      return;
    }
    if (forceLight) {
      setLight(true);
      return;
    }
    const onScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) {
        setLight(window.scrollY > 40);
        return;
      }
      const bottom = hero.getBoundingClientRect().bottom;
      setLight(bottom < 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [forceLight, forceDark]);

  const isActive = (href: string) => {
    const clean = href.replace(/\/$/, '') || '/';
    const active = activePath.replace(/\/$/, '') || '/';
    return active === clean || (clean !== '/' && clean !== '/en' && active.startsWith(clean));
  };

  return (
    <header className={`site-header${light ? ' is-light' : ''}`} data-node-id="1:941">
      <div className="site-header__inner">
        <a className="site-header__logo" href={homeHref} aria-label={brandName}>
          <img
            src="/brand/logo-najette.png?v=12"
            alt={legalName}
            width={72}
            height={68}
          />
        </a>
        <nav className="site-nav" aria-label={ui.navLabel}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'is-active' : undefined}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="site-nav__lang"
            href={langSwitchHref}
            hrefLang={langSwitchHref.startsWith('/en') ? 'en-CA' : 'fr-CA'}
            onClick={() => setOpen(false)}
          >
            {ui.langSwitchLabel}
          </a>
          <button
            type="button"
            className="site-nav__burger"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </nav>
      </div>
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--ink-deep)',
            zIndex: 99,
            display: 'grid',
            placeItems: 'center',
            pointerEvents: 'auto',
          }}
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              textAlign: 'center',
            }}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  color: 'var(--cream)',
                  fontSize: '1.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={langSwitchHref}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--cream)',
                fontSize: '1rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}
            >
              {ui.langSwitchLabel}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
