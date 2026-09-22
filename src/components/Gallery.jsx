import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Rooms', 'Lobby', 'Restaurant', 'Pool', 'Spa', 'Wedding', 'Food', 'Night View'];

  const filtered = activeCat === 'All'
    ? HOTEL_DATA.gallery
    : HOTEL_DATA.gallery.filter(g => g.category === activeCat);

  const openLightbox = (img, index) => {
    setLightboxImg(img);
    setLightboxIndex(index);
  };

  const nextImg = () => {
    const nextIdx = (lightboxIndex + 1) % filtered.length;
    setLightboxIndex(nextIdx);
    setLightboxImg(filtered[nextIdx]);
  };

  const prevImg = () => {
    const prevIdx = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightboxIndex(prevIdx);
    setLightboxImg(filtered[prevIdx]);
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Visual Sanctuary</span>
          <h2 className="section-title">The Architectural & Cinematic Gallery</h2>
          <p className="section-desc">
            A visual ode to grandeur, capturing the golden hour glow across our infinity pools, the grand marble columns of the royal lobby, and culinary artistry plated by our chefs.
          </p>
        </div>

        {/* Filter Categories */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: activeCat === cat ? '#FFFFFF' : 'var(--text-secondary)',
                background: activeCat === cat ? 'var(--brand-green)' : 'var(--bg-card)',
                border: `1px solid ${activeCat === cat ? 'var(--brand-green)' : 'var(--border-color)'}`,
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gridAutoRows: '280px',
          gap: '1.5rem'
        }} className="gallery-masonry-grid">
          {filtered.map((item, idx) => {
            // make some items span 2 rows for masonry feel
            const isTall = idx % 4 === 1 || idx % 4 === 2;
            return (
              <div
                key={item.id}
                style={{
                  gridRowEnd: isTall ? 'span 2' : 'span 1',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)'
                }}
                className="gallery-item-card"
                onClick={() => openLightbox(item, idx)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                />
                
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%)',
                  opacity: 0, transition: 'opacity 0.35s', display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end', padding: '1.75rem'
                }} className="gallery-hover-overlay">
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-light)', fontWeight: 700 }}>
                    {item.category}
                  </span>
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.35rem', margin: '0.2rem 0 0 0' }}>{item.title}</h4>
                  <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', color: '#fff', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div className="modal-overlay" style={{ background: 'rgba(0,0,0,0.92)' }}>
            
            <button
              onClick={() => setLightboxImg(null)}
              style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100 }}
            >
              <X size={26} />
            </button>

            <button
              onClick={prevImg}
              style={{ position: 'absolute', left: '2rem', background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none', borderRadius: '50%', width: '54px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100 }}
            >
              <ChevronLeft size={30} />
            </button>

            <div style={{ maxWidth: '1100px', maxHeight: '85vh', textAlign: 'center' }}>
              <img
                src={lightboxImg.image}
                alt={lightboxImg.title}
                style={{ maxHeight: '78vh', maxWidth: '100%', objectFit: 'contain', borderRadius: 'var(--radius-md)', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}
              />
              <div style={{ marginTop: '1.25rem', color: '#fff' }}>
                <span style={{ color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', fontWeight: 700, display: 'block' }}>
                  {lightboxImg.category}
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#fff', margin: '0.3rem 0 0 0' }}>{lightboxImg.title}</h3>
              </div>
            </div>

            <button
              onClick={nextImg}
              style={{ position: 'absolute', right: '2rem', background: 'rgba(255,255,255,0.15)', color: '#fff', border: 'none', borderRadius: '50%', width: '54px', height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100 }}
            >
              <ChevronRight size={30} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        .gallery-item-card:hover img {
          transform: scale(1.08);
        }
        .gallery-item-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-masonry-grid { grid-auto-rows: 240px !important; }
          .gallery-item-card { grid-row-end: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
