import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onBookNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'rooms', 'dining', 'amenities', 'spa', 'gallery', 'attractions', 'transport', 'offers', 'reviews', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Rooms & Suites', href: '#rooms', id: 'rooms' },
    { name: 'Dining', href: '#dining', id: 'dining' },
    { name: 'Amenities', href: '#amenities', id: 'amenities' },
    { name: 'Spa & Wellness', href: '#spa', id: 'spa' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Attractions', href: '#attractions', id: 'attractions' },
    { name: 'Transport', href: '#transport', id: 'transport' },
    { name: 'Offers', href: '#offers', id: 'offers' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: scrolled ? '76px' : '90px',
      zIndex: 1000,
      transition: 'all 0.35s ease',
      background: scrolled ? 'var(--bg-glass-heavy)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-color)' : 'rgba(255,255,255,0.12)'}`,
      boxShadow: scrolled ? 'var(--shadow-glass)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%', background: 'var(--gold-gradient)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#121416',
            fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: '1.4rem', boxShadow: 'var(--shadow-gold)'
          }}>
            V
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.15em',
              color: scrolled ? 'var(--text-primary)' : '#FFFFFF', lineHeight: 1, transition: 'color 0.3s'
            }}>
              Veloria
            </span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginTop: '2px' }}>
              RESORT
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }} className="hidden-mobile">
          {navItems.slice(0, 8).map(item => (
            <a
              key={item.id}
              href={item.href}
              style={{
                fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em',
                color: scrolled ? (activeSection === item.id ? 'var(--gold-dark)' : 'var(--text-primary)') : (activeSection === item.id ? 'var(--gold-light)' : 'rgba(255,255,255,0.9)'),
                textDecoration: 'none', position: 'relative', padding: '0.4rem 0', transition: 'color 0.2s'
              }}
            >
              {item.name}
              {activeSection === item.id && (
                <span style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: 'var(--gold-gradient)' }} />
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            style={{
              width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: scrolled ? 'var(--bg-tertiary)' : 'rgba(255,255,255,0.12)',
              color: scrolled ? 'var(--text-primary)' : '#FFFFFF', border: `1px solid ${scrolled ? 'var(--border-color)' : 'rgba(255,255,255,0.2)'}`,
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={onBookNow}
            className="btn btn-gold btn-sm"
            style={{ boxShadow: 'var(--shadow-gold)', whiteSpace: 'nowrap' }}
          >
            <Sparkles size={16} /> Book Now
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none', width: '40px', height: '40px', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', color: scrolled ? 'var(--text-primary)' : '#FFFFFF', cursor: 'pointer', border: 'none'
            }}
            className="show-mobile-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: scrolled ? '76px' : '90px', left: 0, width: '100%', height: 'calc(100vh - 80px)',
          background: 'var(--bg-card)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem',
          overflowY: 'auto', boxShadow: 'var(--shadow-lg)', borderTop: '1px solid var(--border-color)', zIndex: 999
        }}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.1rem', fontWeight: 600, color: activeSection === item.id ? 'var(--gold-dark)' : 'var(--text-primary)',
                textDecoration: 'none', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-color)'
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .hidden-mobile { display: none !important; }
          .show-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
