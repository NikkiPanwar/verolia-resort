import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Clock, UtensilsCrossed, Calendar, Users, X, Check } from 'lucide-react';

export default function Dining({ onReserveSuccess }) {
  const [selectedRest, setSelectedRest] = useState(null);
  const [resDate, setResDate] = useState(new Date().toISOString().split('T')[0]);
  const [resTime, setResTime] = useState('7:30 PM (Dinner Service)');
  const [resGuests, setResGuests] = useState('2 Guests - Romantic Table');
  const [resName, setResName] = useState('Lord Alexander Vance');
  const [resNotes, setResNotes] = useState('');

  const handleReserveSubmit = (e) => {
    e.preventDefault();
    const restName = selectedRest.name;
    setSelectedRest(null);
    if (onReserveSuccess) {
      onReserveSuccess(`Michelin Table reserved at ${restName} for ${resName} on ${resDate} (${resTime}). Confirmation SMS dispatched.`);
    }
  };

  return (
    <section id="dining" className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Michelin Gastronomy</span>
          <h2 className="section-title">An Epicurean Symphony of Flavors</h2>
          <p className="section-desc">
            From 12-course progressive European tasting menus to Japanese A5 Wagyu robatayaki above the clouds, our seven signature dining venues elevate every meal into an unforgettable memory.
          </p>
        </div>

        {/* Dining Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {HOTEL_DATA.dining.map(item => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.35s',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="dining-card-item"
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                />
                <span style={{
                  position: 'absolute', top: '1rem', left: '1rem', background: 'var(--brand-green)',
                  color: '#FFFFFF', padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                  {item.type}
                </span>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--gold-primary)', fontWeight: 600, marginBottom: '1rem' }}>
                  <Clock size={15} /> <span>{item.timing}</span>
                </div>

                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', flexGrow: 1 }}>
                  {item.desc}
                </p>

                <button
                  onClick={() => setSelectedRest(item)}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  <UtensilsCrossed size={16} /> Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation Modal */}
        {selectedRest && (
          <div className="modal-overlay">
            <div className="modal-container" style={{ maxWidth: '620px', padding: '2.5rem' }}>
              <button
                onClick={() => setSelectedRest(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--bg-secondary)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)' }}
              >
                <X size={20} />
              </button>

              <h3 style={{ fontSize: '1.85rem', marginBottom: '0.4rem', textAlign: 'center' }}>Table Reservation</h3>
              <p style={{ textAlign: 'center', color: 'var(--gold-dark)', fontWeight: 700, marginBottom: '2rem' }}>{selectedRest.name}</p>

              <form onSubmit={handleReserveSubmit}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Guest Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={resName}
                    onChange={(e) => setResName(e.target.value)}
                    placeholder="Lord / Lady / Mr. / Ms. Name"
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Date
                    </label>
                    <input
                      type="date"
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Time Slot
                    </label>
                    <select
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                    >
                      <option>6:30 PM (Sunset Tasting)</option>
                      <option>7:30 PM (Dinner Service)</option>
                      <option>8:30 PM (Prime Evening)</option>
                      <option>9:45 PM (Late Gourmet)</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Party Size & Seating Preference
                  </label>
                  <select
                    value={resGuests}
                    onChange={(e) => setResGuests(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  >
                    <option>2 Guests - Private Romantic Window Table</option>
                    <option>4 Guests - Chef's Table Experience</option>
                    <option>6 Guests - Private Dining Salon</option>
                    <option>8+ Guests - VIP Banquet Table</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Special Requests / Dietary Requirements
                  </label>
                  <textarea
                    rows="3"
                    value={resNotes}
                    onChange={(e) => setResNotes(e.target.value)}
                    placeholder="e.g. Anniversary celebration, vegetarian pairing, gluten-free..."
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.1rem', fontSize: '1rem' }}>
                  <Check size={18} /> Confirm Michelin Reservation
                </button>
              </form>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .dining-card-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg) !important;
        }
        .dining-card-item:hover img {
          transform: scale(1.12);
        }
      `}</style>
    </section>
  );
}
