import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Share2, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ onSendMessage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSendMessage) {
      onSendMessage(`Message received from ${name} regarding "${subject}". Our Chief Concierge will respond to ${email} within 1 hour.`);
    }
    setName('');
    setEmail('');
    setSubject('');
    setMsg('');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">

        <div className="section-header">
          <span className="section-subtitle">24/7 Concierge Support</span>
          <h2 className="section-title">Get in Touch & Resort Location</h2>
          <p className="section-desc">
            Our multilingual reception team, personal butlers, and aviation planners are available around the clock to fulfill any request or arrange private arrivals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '4rem', alignItems: 'flex-start' }} className="contact-layout-grid">

          {/* Info Details */}
          <div>
            <div style={{
              background: 'var(--bg-card)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.75rem' }}>Veloria Resort</h3>

              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(197,155,39,0.15)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: '1rem', margin: 0 }}>Resort Address</h5>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                    100 Royal Palm Riviera, Secluded Emerald Lagoon Bay, CA 90210
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(197,155,39,0.15)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: '1rem', margin: 0 }}>Direct VIP & Helipad Desk</h5>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                    +1 (800) 555-AURA &bull; +1 (310) 999-7000
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(197,155,39,0.15)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: '1rem', margin: 0 }}>Email Concierge</h5>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                    concierge@auravaleresort.com
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h5 style={{ fontSize: '1rem', margin: 0 }}>24/7 WhatsApp Chauffeur Line</h5>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                    +1 (310) 888-AURA (Instant Text Response)
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div style={{
              borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '240px',
              border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', position: 'relative'
            }}>
              <iframe
                title="Resort Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220362709!2d-118.40035632426095!3d34.05118791778931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb12dbf77cdd%3A0xbddfa7519a86b360!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '3rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-gold)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Direct Message to Chief Concierge</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2.25rem' }}>
              Whether inquiring about a bespoke yacht itinerary, helicopter coordinates, or culinary preferences, send us a secure message.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Mr. / Ms."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vip@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Subject / Request Category
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Private Yacht Charter & Presidential Penthouse Availability"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Message Details
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Detail any special requests, dates, or privacy requirements..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.15rem', fontSize: '1rem' }}>
                <Send size={18} /> Transmit Message to Concierge
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-layout-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
