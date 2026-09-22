import React, { useState, useEffect } from 'react';
import { Home, Users, Award, Utensils, Waves, Sparkles } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: '50+ Luxury Rooms', count: 50, suffix: '+', icon: <Home size={34} /> },
    { label: '20,000+ Happy Guests', count: 20000, suffix: '+', icon: <Users size={34} /> },
    { label: '15+ Years Experience', count: 15, suffix: '+', icon: <Award size={34} /> },
    { label: '4 Michelin Restaurants', count: 4, suffix: '', icon: <Utensils size={34} /> },
    { label: '2 Infinity Pools', count: 2, suffix: '', icon: <Waves size={34} /> },
    { label: '1 Luxury Spa', count: 1, suffix: '', icon: <Sparkles size={34} /> }
  ];

  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, var(--brand-green-dark) 0%, var(--brand-green) 50%, #062217 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute', top: '-50%', right: '-10%', width: '600px', height: '600px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(197,155,39,0.18) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--gold-light)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.25em', fontWeight: 700 }}>
            By The Numbers
          </span>
          <h2 style={{ color: '#FFFFFF', fontSize: '2.75rem', marginTop: '0.5rem' }}>
            A Legacy of Unmatched Excellence
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem' }}>
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                transition: 'transform 0.35s'
              }}
              className="stat-card-box"
            >
              <div style={{ color: 'var(--gold-light)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: '0.5rem' }}>
                {item.count.toLocaleString()}{item.suffix}
              </div>
              <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .stat-card-box:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.09) !important;
          border-color: var(--gold-light) !important;
        }
      `}</style>
    </section>
  );
}
