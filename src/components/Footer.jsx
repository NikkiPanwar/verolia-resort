import React, { useState } from 'react';
import { Send, ChevronDown, ChevronUp, Globe, Share2, MessageCircle, Video, Award, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'What is the dress code for Michelin fine dining at The Imperial?',
      a: 'We kindly request smart casual to formal evening attire. Gentlemen are requested to wear collared shirts and trousers or evening jackets. Beachwear and athletic wear are not permitted in fine dining salons.'
    },
    {
      q: 'How do I arrange private helicopter or yacht arrivals?',
      a: 'Our Chief Concierge coordinates directly with your flight or vessel captain. Simply provide your tail number or call sign 24 hours prior to arrival for helipad clearance or private marina docking.'
    },
    {
      q: 'Are pets permitted in the Presidential Penthouse and Villas?',
      a: 'Yes, Veloria Resort is a proud pet-friendly luxury sanctuary. We provide customized organic pet menus, orthopedic beds, and dedicated pet valets upon request.'
    },
    {
      q: 'What is the standard check-in and check-out timing?',
      a: 'Standard check-in is at 3:00 PM and check-out is at 12:00 PM. However, Presidential Penthouse and Executive Suite guests enjoy guaranteed 24/7 flexible check-in and check-out times.'
    }
  ];

  const handleSub = (e) => {
    e.preventDefault();
    if (!email) return;
    if (onSubscribe) {
      onSubscribe(`Thank you for subscribing, ${email}! You have been granted VIP early access to our seasonal private offers.`);
    }
    setEmail('');
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-gold)',
      paddingTop: '6rem',
      paddingBottom: '3rem',
      position: 'relative'
    }}>
      <div className="container">

        {/* Top Section: Newsletter & Brand */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          padding: '3.5rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }} className="footer-newsletter-box">
          <div>
            <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700 }}>
              VIP Journal & Invitations
            </span>
            <h3 style={{ fontSize: '2.25rem', margin: '0.5rem 0 1rem 0' }}>Join the Veloria Resort Elite Society</h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
              Subscribe to receive confidential private villa release dates, wine tasting invitations, and member-only weekend rates.
            </p>
          </div>

          <form onSubmit={handleSub} style={{ display: 'flex', gap: '0.75rem' }} className="footer-sub-form">
            <input
              type="email"
              required
              placeholder="Enter your VIP email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flexGrow: 1, padding: '1rem 1.4rem', background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)', fontSize: '0.95rem'
              }}
            />
            <button type="submit" className="btn btn-gold" style={{ padding: '1rem 1.75rem', whiteSpace: 'nowrap' }}>
              <Send size={16} /> Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section: Navigation Links & FAQs */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: '3rem', marginBottom: '5rem' }} className="footer-main-grid">

          {/* Col 1: Brand info & Awards */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold-gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#121416',
                fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: '1.3rem'
              }}>
                V
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.15em' }}>
                Veloria Resort
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              The global benchmark of five-star hospitality, combining untouched natural beauty with telepathic butler service and Michelin culinary artistry.
            </p>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Award size={16} /> Forbes 5-Star 2026
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={16} /> Eco-Luxury Certified
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)', marginBottom: '1.25rem' }}>
              Quick Links
            </h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#home">Home Sanctuary</a></li>
              <li><a href="#about">Our Heritage</a></li>
              <li><a href="#rooms">Suites & Villas</a></li>
              <li><a href="#dining">Michelin Dining</a></li>
              <li><a href="#spa">Thermal Wellness</a></li>
              <li><a href="#gallery">Visual Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Policies */}
          <div>
            <h5 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)', marginBottom: '1.25rem' }}>
              Resort Policies
            </h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: Complete SSL encryption and GDPR compliance.'); }}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms & Conditions: 5-star diamond resort standard terms.'); }}>Terms of Service</a></li>
              <li><a href="#refunds" onClick={(e) => { e.preventDefault(); alert('Refund Policy: Free cancellation up to 48 hours before check-in.'); }}>Refund Policy</a></li>
              <li><a href="#safety" onClick={(e) => { e.preventDefault(); alert('Safety & Hygiene: 24/7 resident medical staff and air purification.'); }}>Safety & Hygiene</a></li>
              <li><a href="#press" onClick={(e) => { e.preventDefault(); alert('Press & Media Kit available upon request.'); }}>Press & Media Kit</a></li>
            </ul>
          </div>

          {/* Col 4: Frequently Asked Questions */}
          <div>
            <h5 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)', marginBottom: '1.25rem' }}>
              Frequently Asked Questions
            </h5>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <button
                    onClick={() => toggleFaq(i)}
                    style={{
                      width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)',
                      background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.2rem 0'
                    }}
                  >
                    <span>{f.q}</span>
                    {openFaq === i ? <ChevronUp size={16} color="#C59B27" /> : <ChevronDown size={16} color="#C59B27" />}
                  </button>
                  {openFaq === i && (
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0, lineHeight: 1.5 }}>
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: App Download, Payment Icons, Copyright */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }} className="footer-bottom-bar">

          <div>
            &copy; {new Date().getFullYear()}Veloria Resort. All Rights Reserved. Designed for global luxury.
          </div>

          {/* Payment Methods */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Secure VIP Payments:</span>
            <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>AMEX Centurion &bull; Visa Infinite &bull; Mastercard World Elite &bull; Crypto VIP</span>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
              <Globe size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
              <Share2 size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
              <MessageCircle size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
              <Video size={16} />
            </a>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .footer-newsletter-box { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .footer-sub-form { flex-direction: column !important; }
          .footer-main-grid { grid-template-columns: 1fr !important; }
          .footer-bottom-bar { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
