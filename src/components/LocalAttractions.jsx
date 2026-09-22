import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Navigation, Clock, Compass, ExternalLink } from 'lucide-react';

export default function LocalAttractions() {
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', 'Temples', 'Beaches', 'Museums', 'Mountains', 'Shopping Centers', 'Nightlife'];

  const filtered = activeCat === 'All'
    ? HOTEL_DATA.attractions
    : HOTEL_DATA.attractions.filter(a => a.category === activeCat);

  return (
    <section id="attractions" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Discover the Region</span>
          <h2 className="section-title">Enchanting Local Attractions & Heritage</h2>
          <p className="section-desc">
            Explore ancient 12th-century stone citadels, secret emerald waterfalls, luxury yacht marinas, and designer shopping boulevards—all reachable by private chauffeur or VIP helicopter.
          </p>
        </div>

        {/* Filter Categories */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
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
                background: activeCat === cat ? 'var(--gold-dark)' : 'var(--bg-card)',
                border: `1px solid ${activeCat === cat ? 'var(--gold-primary)' : 'var(--border-color)'}`,
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {filtered.map(item => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s'
              }}
              className="attraction-card-item"
            >
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                />
                <span style={{
                  position: 'absolute', top: '1.25rem', left: '1.25rem',
                  background: 'var(--bg-glass-heavy)', backdropFilter: 'blur(8px)',
                  color: 'var(--text-primary)', padding: '0.35rem 0.9rem',
                  borderRadius: 'var(--radius-full)', fontSize: '0.72rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                  {item.category}
                </span>

                <div style={{
                  position: 'absolute', bottom: '1.25rem', right: '1.25rem',
                  background: 'var(--brand-green)', color: '#FFFFFF',
                  padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.78rem',
                  fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px',
                  border: '1px solid var(--gold-primary)'
                }}>
                  <MapPin size={13} color="#DFBD69" /> {item.distance}
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.name}</h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {item.desc}
                </p>

                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem',
                  paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)',
                  fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Navigation size={14} color="#C59B27" /> <span>{item.travelTime}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={14} color="#C59B27" /> <span>Best: {item.bestTime.split(' ')[0]}</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                >
                  <ExternalLink size={15} /> Google Maps Preview
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .attraction-card-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg) !important;
          border-color: var(--border-gold) !important;
        }
        .attraction-card-item:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
