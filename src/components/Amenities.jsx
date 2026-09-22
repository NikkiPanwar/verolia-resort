import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import {
  Waves, Sparkles, Dumbbell, Baby, Presentation, HeartHandshake,
  Utensils, Coffee, Wine, Wifi, Car, Plane, Shirt, Briefcase,
  Stethoscope, BellRing, PawPrint, ConciergeBell, Zap, Accessibility,
  CheckCircle2
} from 'lucide-react';

export default function Amenities() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Waves': return <Waves size={28} />;
      case 'Sparkles': return <Sparkles size={28} />;
      case 'Dumbbell': return <Dumbbell size={28} />;
      case 'Baby': return <Baby size={28} />;
      case 'Presentation': return <Presentation size={28} />;
      case 'HeartHandshake': return <HeartHandshake size={28} />;
      case 'Utensils': return <Utensils size={28} />;
      case 'Coffee': return <Coffee size={28} />;
      case 'Wine': return <Wine size={28} />;
      case 'Wifi': return <Wifi size={28} />;
      case 'Car': return <Car size={28} />;
      case 'Plane': return <Plane size={28} />;
      case 'Shirt': return <Shirt size={28} />;
      case 'Briefcase': return <Briefcase size={28} />;
      case 'Stethoscope': return <Stethoscope size={28} />;
      case 'BellRing': return <BellRing size={28} />;
      case 'PawPrint': return <PawPrint size={28} />;
      case 'ConciergeBell': return <ConciergeBell size={28} />;
      case 'Zap': return <Zap size={28} />;
      case 'Accessibility': return <Accessibility size={28} />;
      default: return <CheckCircle2 size={28} />;
    }
  };

  return (
    <section id="amenities" className="section-padding">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">World-Class Hospitality</span>
          <h2 className="section-title">Resort Amenities & VIP Facilities</h2>
          <p className="section-desc">
            Whether you seek invigorating wellness rituals, gourmet indulgence, or seamless executive productivity, our 20 signature amenities cater to your every desire.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
          {HOTEL_DATA.amenities.map(item => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                padding: '2.25rem 1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.35s',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="amenity-card-item"
            >
              <div style={{
                width: '68px', height: '68px', margin: '0 auto 1.5rem auto',
                background: 'var(--bg-secondary)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold-dark)', transition: 'all 0.35s'
              }} className="amenity-icon-box">
                {getIcon(item.icon)}
              </div>

              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .amenity-card-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--border-gold) !important;
        }
        .amenity-card-item:hover .amenity-icon-box {
          background: var(--brand-green) !important;
          color: var(--gold-light) !important;
          transform: rotate(10deg) scale(1.1);
        }
      `}</style>
    </section>
  );
}
