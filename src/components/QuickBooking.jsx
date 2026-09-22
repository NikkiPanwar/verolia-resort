import React, { useState } from 'react';
import { Calendar, Users, Home, Search } from 'lucide-react';

export default function QuickBooking({ onSearchAvailability }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [checkin, setCheckin] = useState(today.toISOString().split('T')[0]);
  const [checkout, setCheckout] = useState(tomorrow.toISOString().split('T')[0]);
  const [guests, setGuests] = useState('2 Adults');
  const [roomsCount, setRoomsCount] = useState('1 Room');

  const handleCheckinChange = (val) => {
    setCheckin(val);
    const start = new Date(val);
    const nextDay = new Date(start);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextStr = nextDay.toISOString().split('T')[0];
    if (new Date(checkout) <= start) {
      setCheckout(nextStr);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchAvailability({ checkin, checkout, guests, roomsCount });
  };

  return (
    <div style={{ position: 'relative', zIndex: 20, marginTop: '-70px', padding: '0 1.5rem' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'var(--bg-glass-heavy)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem 2.5rem',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr) auto',
          gap: '1.5rem',
          alignItems: 'center'
        }}
        className="booking-widget-grid"
      >
        {/* Check-in Date */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', paddingRight: '1.5rem', borderRight: '1px solid var(--border-color)' }} className="booking-field">
          <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={14} /> Check-In Date
          </label>
          <input
            type="date"
            value={checkin}
            min={today.toISOString().split('T')[0]}
            onChange={(e) => handleCheckinChange(e.target.value)}
            style={{ width: '100%', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', background: 'transparent', border: 'none', outline: 'none' }}
          />
        </div>

        {/* Check-out Date */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', paddingRight: '1.5rem', borderRight: '1px solid var(--border-color)' }} className="booking-field">
          <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={14} /> Check-Out Date
          </label>
          <input
            type="date"
            value={checkout}
            min={checkin}
            onChange={(e) => setCheckout(e.target.value)}
            style={{ width: '100%', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', background: 'transparent', border: 'none', outline: 'none' }}
          />
        </div>

        {/* Guests */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', paddingRight: '1.5rem', borderRight: '1px solid var(--border-color)' }} className="booking-field">
          <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Users size={14} /> Number of Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={{ width: '100%', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', background: 'transparent', border: 'none', outline: 'none' }}
          >
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>1 Adult (VIP Single)</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>2 Adults (Standard Couple)</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>2 Adults, 1 Child</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>2 Adults, 2 Children</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>4 Adults (Family Suite)</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>6 Adults (Presidential)</option>
          </select>
        </div>

        {/* Rooms */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} className="booking-field-last">
          <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Home size={14} /> Number of Rooms
          </label>
          <select
            value={roomsCount}
            onChange={(e) => setRoomsCount(e.target.value)}
            style={{ width: '100%', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', background: 'transparent', border: 'none', outline: 'none' }}
          >
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>1 Room</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>2 Rooms (Adjoining)</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>3+ Rooms (Group)</option>
            <option style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}>Entire Private Floor</option>
          </select>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          className="btn btn-gold"
          style={{ height: '100%', minHeight: '54px', padding: '0 2.25rem', whiteSpace: 'nowrap' }}
        >
          <Search size={18} /> Search Availability
        </button>
      </form>

      <style>{`
        @media (max-width: 992px) {
          .booking-widget-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.25rem !important; }
          .booking-field:nth-child(2) { border-right: none !important; }
          .booking-field-last { border-right: none !important; }
          button[type="submit"] { grid-column: span 2; }
        }
        @media (max-width: 576px) {
          .booking-widget-grid { grid-template-columns: 1fr !important; padding: 1.5rem !important; }
          .booking-field { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; }
          .booking-field-last { border-bottom: none !important; }
          button[type="submit"] { grid-column: span 1; }
        }
      `}</style>
    </div>
  );
}
