import React, { useState } from 'react';
import { Calendar, Users, HeartHandshake, Briefcase, PartyPopper, CheckCircle2, Sparkles } from 'lucide-react';

export default function EventBooking({ onEventInquiry }) {
  const [eventType, setEventType] = useState('Royal Beachfront Wedding');
  const [guestCount, setGuestCount] = useState('150 - 300 Guests (Grand Ballroom)');
  const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');

  const eventTypes = [
    'Royal Beachfront Wedding',
    'Corporate Executive Summit & Conference',
    'Private Anniversary Gala / Birthday Party',
    'State Banquet & Diplomatic Reception',
    'Product Launch & Fashion Show'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onEventInquiry) {
      onEventInquiry(`Event Inquiry Submitted for "${eventType}" (${guestCount}) by ${clientName}. Our dedicated Event Planner will contact you at ${clientPhone} within 2 hours.`);
    }
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setNotes('');
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-gold)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr'
        }} className="event-booking-grid">
          
          {/* Left Column: Visuals & Info */}
          <div style={{ position: 'relative', minHeight: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3.5rem' }}>
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
              alt="Royal Wedding Event"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(0deg, rgba(10,46,35,0.92) 0%, rgba(10,46,35,0.5) 60%, rgba(0,0,0,0.3) 100%)', zIndex: 2 }} />

            <div style={{ position: 'relative', zIndex: 5, color: '#FFFFFF' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--gold-primary)', color: '#121416', padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                <Sparkles size={14} /> Weddings & Galas
              </span>
              
              <h3 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.15 }}>
                Host Your Royal Celebration or Summit
              </h3>

              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '1.75rem' }}>
                Our experienced banquet directors and Michelin chefs collaborate to tailor bespoke menus, floral architecture, AV setups, and private yacht charters for celebrations of up to 1,000 guests.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HeartHandshake color="#DFBD69" size={18} /> Dedicated Event Butler
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Briefcase color="#DFBD69" size={18} /> High-Tech AV Boardrooms
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Event & Banquet Inquiry</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Select your celebration parameters to receive a customized proposal and virtual walkthrough.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Event Classification
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontWeight: 600 }}
                >
                  {eventTypes.map((t, i) => <option key={i}>{t}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Tentative Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontWeight: 600 }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Estimated Attendees
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontWeight: 600 }}
                  >
                    <option>10 - 30 Guests (Private Salon)</option>
                    <option>50 - 100 Guests (Garden Terrace)</option>
                    <option>150 - 300 Guests (Grand Ballroom)</option>
                    <option>500+ Guests (Resort Buyout / Lawn)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Organizer Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Mr. / Ms. Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="organizer@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                />
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <textarea
                  rows="2"
                  placeholder="Special requirements (e.g., fireworks display, helicopter landing, vegan banquet)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.15rem', fontSize: '1rem' }}>
                <CheckCircle2 size={18} /> Request Customized Proposal
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .event-booking-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
