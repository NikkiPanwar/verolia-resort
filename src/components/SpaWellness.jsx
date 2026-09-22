import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { HeartHandshake, CloudRain, Flame, Sun, Sparkles, Activity, Award } from 'lucide-react';

export default function SpaWellness() {
  const getIcon = (name) => {
    switch (name) {
      case 'HeartHandshake': return <HeartHandshake size={32} />;
      case 'CloudRain': return <CloudRain size={32} />;
      case 'Flame': return <Flame size={32} />;
      case 'Sun': return <Sun size={32} />;
      case 'Sparkles': return <Sparkles size={32} />;
      case 'Activity': return <Activity size={32} />;
      case 'Award': return <Award size={32} />;
      default: return <Sparkles size={32} />;
    }
  };

  return (
    <section id="spa" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Holistic Serenity</span>
          <h2 className="section-title">Aura Thermal Spa & Holistic Wellness</h2>
          <p className="section-desc">
            Spanning over 5,000 square meters of tranquil gardens and reflecting pools, our Swiss-engineered holistic sanctuary harmonizes ancient Eastern healing traditions with state-of-the-art vitality diagnostics.
          </p>
        </div>

        {/* Feature Hero banner */}
        <div style={{
          position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '420px',
          marginBottom: '4rem', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'flex-end', padding: '3rem'
        }}>
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
            alt="Spa Sanctuary"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
          />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(0deg, rgba(10,46,35,0.9) 0%, rgba(10,46,35,0.4) 60%, transparent 100%)', zIndex: 2
          }} />

          <div style={{ position: 'relative', zIndex: 5, maxWidth: '700px' }}>
            <span style={{
              display: 'inline-block', background: 'var(--gold-primary)', color: '#121416',
              padding: '0.35rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem',
              fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem'
            }}>
              24/7 Wellness Access Included
            </span>
            <h3 style={{ color: '#FFFFFF', fontSize: '2.5rem', marginBottom: '0.75rem' }}>
              The 7 Pillars of Vitality Ritual
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: 0 }}>
              Guests enjoy complimentary daily access to hydrotherapy pools, Himalayan salt inhalation grottos, organic sauna suites, and sunset sound bath meditations.
            </p>
          </div>
        </div>

        {/* Spa Treatments Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem' }}>
          {HOTEL_DATA.spa.map(item => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                transition: 'all 0.35s'
              }}
              className="spa-card-item"
            >
              <div style={{
                color: 'var(--gold-primary)', background: 'rgba(197,155,39,0.12)',
                padding: '1rem', borderRadius: 'var(--radius-md)', flexShrink: 0
              }}>
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .spa-card-item:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--border-gold) !important;
        }
      `}</style>
    </section>
  );
}
