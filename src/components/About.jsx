import React from 'react';
import { Award, ShieldCheck, Star, Clock, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: 'Conde Nast Traveler #1', desc: 'Voted Best Oceanfront Resort' },
    { title: '3-Star Michelin Dining', desc: 'Helmed by Chef Laurent Mercier' },
    { title: 'Holistic Swiss Wellness', desc: 'Over 5,000 sq.m thermal sanctuary' },
    { title: 'Private Helipad & Marina', desc: 'Direct VIP access via air and sea' }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <span className="section-subtitle">Heritage & Excellence</span>
          <h2 className="section-title">A Symphony of Regal Luxury & Serenity</h2>
          <p className="section-desc">
            Nestled along the pristine coast of a secluded bay, Veloria Resort is an architectural masterpiece designed to blend seamlessly with nature while offering unmatched five-star hospitality.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'center' }} className="about-grid-layout">

          {/* Images Grid */}
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginTop: '-2.5rem' }}>
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
                alt="Grand Lobby Architecture"
                style={{ width: '100%', height: '380px', objectFit: 'cover', transition: 'transform 0.6s' }}
              />
            </div>

            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '-2.5rem' }}>
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Holistic Thermal Spa"
                style={{ width: '100%', height: '380px', objectFit: 'cover', transition: 'transform 0.6s' }}
              />
            </div>

            {/* Floating Experience Badge */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              background: 'var(--brand-green)', border: '2px solid var(--gold-primary)', color: '#FFFFFF',
              padding: '1.75rem', borderRadius: '50%', textAlign: 'center', width: '150px', height: '150px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)', zIndex: 5
            }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--gold-light)', lineHeight: 1 }}>
                15+
              </span>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '4px' }}>
                Years of Excellence
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', lineHeight: 1.25 }}>
              Where Indian Royal Heritage Meets Swiss Perfection
            </h3>

            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Inspired by the grand palaces of Rajasthan and the minimalist tranquility of Japanese Ryokans, our sanctuary features over 50 exclusive private villas and suites, each attended by a personal butler trained by the British Butler Institute.
            </p>

            {/* Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', margin: '2rem 0' }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ color: 'var(--gold-primary)', marginTop: '2px' }}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.98rem', fontWeight: 700, margin: 0 }}>{item.title}</h5>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted by Thousands Badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 1.75rem',
              background: 'var(--bg-secondary)', borderLeft: '4px solid var(--gold-primary)',
              borderRadius: 'var(--radius-sm)', marginTop: '2.5rem'
            }}>
              <div style={{ display: 'flex' }}>
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="VIP Guest"
                    style={{
                      width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover',
                      border: '2px solid var(--bg-card)', marginLeft: i === 0 ? 0 : '-12px'
                    }}
                  />
                ))}
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                  Trusted by 20,000+ Happy Guests
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Star size={12} fill="#C59B27" color="#C59B27" style={{ display: 'inline', marginRight: '4px' }} />
                  4.95 / 5.0 Average Verified Score
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid-layout { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
        }
      `}</style>
    </section>
  );
}
