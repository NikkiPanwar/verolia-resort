import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Tag, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';

export default function SpecialOffers({ onCopyCode, onBookOffer }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTab, setActiveTab] = useState('All Packages');

  const offerTabs = ['All Packages', 'Weekend Offers', 'Family Packages', 'Honeymoon Packages', 'Corporate Packages', 'Festival Discounts', 'Early Bird Offers', 'Loyalty Rewards'];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
    if (onCopyCode) {
      onCopyCode(`Promo Code "${code}" copied to clipboard! Paste during checkout for instant VIP discount.`);
    }
  };

  return (
    <section id="offers" className="section-padding">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Exclusive Privileges</span>
          <h2 className="section-title">Special Offers, Rewards & Curated Packages</h2>
          <p className="section-desc">
            Enhance your sanctuary stay with complimentary helicopter transfers, couples sunset spa rituals, and stay-5-pay-4 family privileges.
          </p>
        </div>

        {/* Offer Category Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {offerTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: activeTab === tab ? '#121416' : 'var(--text-secondary)',
                background: activeTab === tab ? 'var(--gold-primary)' : 'var(--bg-card)',
                border: `1px solid ${activeTab === tab ? 'var(--gold-primary)' : 'var(--border-color)'}`,
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
          {HOTEL_DATA.offers.map(item => (
            <div
              key={item.id}
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
              className="offer-card-item"
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                />
                <span style={{
                  position: 'absolute', top: '1.25rem', left: '1.25rem',
                  background: 'var(--gold-gradient)', color: '#121416',
                  padding: '0.4rem 1.1rem', borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em',
                  boxShadow: 'var(--shadow-gold)'
                }}>
                  {item.discount}
                </span>
              </div>

              <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{item.title}</h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', flexGrow: 1 }}>
                  {item.desc}
                </p>

                {/* Promo Code Copy Box */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'var(--bg-secondary)', padding: '0.85rem 1.25rem',
                  borderRadius: 'var(--radius-sm)', border: '1px dashed var(--gold-primary)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                    <Tag size={16} color="#C59B27" />
                    <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.1em' }}>
                      {item.code}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(item.code)}
                    style={{
                      background: copiedCode === item.code ? '#10B981' : 'var(--gold-primary)',
                      color: copiedCode === item.code ? '#FFFFFF' : '#121416',
                      padding: '0.4rem 0.9rem', borderRadius: '4px', fontSize: '0.78rem',
                      fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', border: 'none', cursor: 'pointer'
                    }}
                  >
                    {copiedCode === item.code ? <><Check size={14} /> COPIED</> : <><Copy size={14} /> COPY CODE</>}
                  </button>
                </div>

                <button
                  onClick={() => onBookOffer ? onBookOffer(item) : null}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                >
                  Claim VIP Package <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .offer-card-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg) !important;
          border-color: var(--border-gold) !important;
        }
        .offer-card-item:hover img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
