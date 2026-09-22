import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Maximize2, Users, Bed, Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Rooms({ onViewDetails, onBookRoom }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Accommodations' },
    { id: 'deluxe', label: 'Deluxe Rooms' },
    { id: 'premium', label: 'Premium Oceanfront' },
    { id: 'executive', label: 'Executive Club' },
    { id: 'suite', label: 'Suites & Sanctuary' },
    { id: 'presidential', label: 'Presidential Penthouse' }
  ];

  const filteredRooms = activeTab === 'all'
    ? HOTEL_DATA.rooms
    : HOTEL_DATA.rooms.filter(r => r.category === activeTab || (activeTab === 'suite' && (r.category === 'suite' || r.category === 'presidential')));

  return (
    <section id="rooms" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Private Sanctuaries</span>
          <h2 className="section-title">Rooms, Suites & Oceanfront Villas</h2>
          <p className="section-desc">
            Each residence is thoughtfully curated with bespoke furnishings, Italian marble bathrooms, panoramic vistas, and 24/7 dedicated personal butler service.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.75rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-secondary)',
                background: activeTab === tab.id ? 'var(--brand-green)' : 'var(--bg-card)',
                border: `1px solid ${activeTab === tab.id ? 'var(--brand-green)' : 'var(--border-color)'}`,
                boxShadow: activeTab === tab.id ? 'var(--shadow-sm)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2.5rem' }}>
          {filteredRooms.map(room => (
            <div
              key={room.id}
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
              className="room-card-item"
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <img
                  src={room.image}
                  alt={room.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                />
                <span style={{
                  position: 'absolute', top: '1.25rem', left: '1.25rem',
                  background: 'var(--bg-glass-heavy)', backdropFilter: 'blur(8px)',
                  color: 'var(--text-primary)', padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: 'var(--shadow-sm)'
                }}>
                  {room.category.toUpperCase()}
                </span>

                <div style={{
                  position: 'absolute', bottom: '1.25rem', right: '1.25rem',
                  background: 'var(--brand-green)', color: '#FFFFFF',
                  padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--gold-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--gold-light)' }}>
                    ${room.price}
                  </span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginLeft: '4px' }}>/ night</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.65rem', marginBottom: '0.75rem' }}>{room.name}</h3>

                {/* Specs */}
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.25rem',
                  paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-color)',
                  fontSize: '0.88rem', color: 'var(--text-secondary)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Maximize2 size={16} color="#C59B27" /> <span>{room.size}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Users size={16} color="#C59B27" /> <span>{room.maxGuests}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Bed size={16} color="#C59B27" /> <span>{room.bedType}</span>
                  </div>
                </div>

                <p style={{
                  fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem',
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                  {room.description}
                </p>

                {/* Mini Amenities */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {room.amenities.slice(0, 4).map((a, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem', background: 'var(--bg-secondary)', color: 'var(--text-secondary)',
                      padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '4px'
                    }}>
                      <Check size={12} color="#C59B27" /> {a}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <button
                    onClick={() => onViewDetails(room)}
                    className="btn btn-outline btn-sm"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onBookRoom(room)}
                    className="btn btn-gold btn-sm"
                  >
                    Book Now <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .room-card-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg) !important;
          border-color: var(--border-gold) !important;
        }
        .room-card-item:hover img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
