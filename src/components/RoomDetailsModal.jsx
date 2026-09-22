import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Calendar, Users, Lock, Compass, Eye, Glasses } from 'lucide-react';

export default function RoomDetailsModal({ room, onClose, onConfirmBooking }) {
  if (!room) return null;

  const [mainImg, setMainImg] = useState(room.image);
  const [vrMode, setVrMode] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [checkin, setCheckin] = useState(new Date().toISOString().split('T')[0]);
  
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 3);
  const [checkout, setCheckout] = useState(futureDate.toISOString().split('T')[0]);
  const [guests, setGuests] = useState(room.maxGuests.split(',')[0]);

  // Calculate nights
  let nights = 1;
  if (checkin && checkout) {
    const diff = new Date(checkout) - new Date(checkin);
    nights = Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24)));
  }

  const toggleAddon = (addon) => {
    if (selectedAddons.some(a => a.name === addon.name)) {
      setSelectedAddons(selectedAddons.filter(a => a.name !== addon.name));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const grandTotal = (room.price * nights) + addonsTotal;

  return (
    <div className="modal-overlay">
      <div className="modal-container" style={{ maxWidth: '1150px', maxHeight: '92vh' }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem', width: '44px', height: '44px',
            borderRadius: '50%', background: 'var(--bg-secondary)', color: 'var(--text-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 50, border: 'none'
          }}
          title="Close Details"
        >
          <X size={22} />
        </button>

        <div style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem' }} className="room-modal-grid">
          
          {/* Left Column: Media & Details */}
          <div>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '380px', marginBottom: '1rem', boxShadow: 'var(--shadow-md)' }}>
              <img src={mainImg} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'var(--brand-green)', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '0.8rem' }}>
                {room.category.toUpperCase()} SANCTUARY
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {room.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImg(img)}
                  alt="Thumbnail"
                  style={{
                    width: '84px', height: '62px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                    border: `2px solid ${mainImg === img ? 'var(--gold-primary)' : 'transparent'}`, transition: 'all 0.2s'
                  }}
                />
              ))}
            </div>

            {/* 360 Degree Virtual Tour Viewer */}
            <h4 style={{ fontSize: '1.35rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Compass size={22} color="#C59B27" /> 360° Interactive Panoramic Room Tour
            </h4>
            <div style={{
              position: 'relative', height: '340px', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              marginBottom: '2.5rem', background: '#000', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)'
            }}>
              <img
                src={room.tour360}
                alt="360 View"
                style={{
                  width: '200%', height: '100%', objectFit: 'cover',
                  animation: vrMode ? 'pan360 8s linear infinite alternate' : 'pan360 25s linear infinite alternate',
                  filter: vrMode ? 'contrast(1.1) saturate(1.2)' : 'none'
                }}
              />
              <div style={{
                position: 'absolute', top: '1.25rem', left: '1.25rem', background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(8px)', color: '#fff', padding: '0.4rem 1.1rem', borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid var(--gold-primary)'
              }}>
                <Eye size={14} /> {vrMode ? 'VR GOGGLE SIMULATION ACTIVE' : 'DRAG TO PAN ACROSS SUITE'}
              </div>

              <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setVrMode(!vrMode)}
                  style={{
                    padding: '0.5rem 1rem', background: vrMode ? 'var(--gold-primary)' : 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)', color: vrMode ? '#121416' : '#fff', borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'
                  }}
                >
                  <Glasses size={14} /> {vrMode ? 'Exit VR Mode' : 'VR Goggle Mode'}
                </button>
              </div>
            </div>

            {/* Description & Included Services */}
            <h4 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>The Experience</h4>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
              {room.description}
            </p>

            <h4 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>Included VIP Services & Amenities</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {room.amenities.map((a, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem' }}>
                  <CheckCircle size={16} color="#10B981" />
                  <span>{a}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Resort Policies & Cancellation</h4>
            <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Check-In Time:</strong> {room.policies.checkIn}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Check-Out Time:</strong> {room.policies.checkOut}</p>
              <p style={{ marginBottom: 0, color: 'var(--brand-green)', fontWeight: 600 }}>
                <ShieldCheck size={16} style={{ display: 'inline', marginRight: '4px' }} />
                {room.policies.cancellation}
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Booking Wizard */}
          <div>
            <div style={{
              background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-gold)', position: 'sticky', top: '1.5rem', boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ fontSize: '1.85rem', marginBottom: '0.3rem' }}>{room.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{room.size} &bull; {room.maxGuests}</p>
              
              {/* Price Display */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Base Suite Rate:</span>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.35rem', fontWeight: 800, color: 'var(--gold-dark)' }}>${room.price}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}> / night</span>
                </div>
              </div>

              {/* Dates & Guests */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--gold-dark)' }}>
                  Select Dates & Guests
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Check-In</span>
                    <input
                      type="date"
                      value={checkin}
                      onChange={(e) => setCheckin(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', color: 'var(--text-primary)', fontWeight: 600 }}
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Check-Out</span>
                    <input
                      type="date"
                      value={checkout}
                      min={checkin}
                      onChange={(e) => setCheckout(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', color: 'var(--text-primary)', fontWeight: 600 }}
                    />
                  </div>
                </div>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)', color: 'var(--text-primary)', fontWeight: 600 }}
                >
                  <option>2 Adults (Standard Couple)</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                  <option>1 Adult (VIP Single)</option>
                </select>
              </div>

              {/* Bespoke Addons */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--gold-dark)' }}>
                  Customize Your Stay (Bespoke Add-ons)
                </label>
                {room.extraServices.map((srv, idx) => {
                  const isChecked = selectedAddons.some(a => a.name === srv.name);
                  return (
                    <label
                      key={idx}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0.75rem 1rem', background: isChecked ? 'rgba(197,155,39,0.1)' : 'var(--bg-card)',
                        borderRadius: 'var(--radius-sm)', border: `1px solid ${isChecked ? 'var(--gold-primary)' : 'var(--border-color)'}`,
                        cursor: 'pointer', marginBottom: '0.5rem', transition: 'all 0.2s'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', fontWeight: 500 }}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(srv)}
                          style={{ width: '18px', height: '18px', accentColor: 'var(--gold-primary)' }}
                        />
                        {srv.name}
                      </span>
                      <span style={{ fontWeight: 700, color: 'var(--gold-dark)', fontSize: '0.9rem' }}>+${srv.price}</span>
                    </label>
                  );
                })}
              </div>

              {/* Total Calculation Box */}
              <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--gold-primary)', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.92rem' }}>
                  <span>Stay Duration:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{nights} Night{nights > 1 ? 's' : ''}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.92rem' }}>
                  <span>Add-ons Total:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>${addonsTotal}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-green)' }}>
                  <span>Estimated Total:</span>
                  <span>${grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Book CTA */}
              <button
                onClick={() => onConfirmBooking(room, { checkin, checkout, guests, nights, grandTotal })}
                className="btn btn-gold"
                style={{ width: '100%', padding: '1.25rem', fontSize: '1.05rem', boxShadow: '0 10px 30px rgba(197,155,39,0.4)' }}
              >
                <Lock size={18} /> Book Suite Instantly
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                No immediate credit card charge. 100% secure SSL booking.
              </p>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .room-modal-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}
