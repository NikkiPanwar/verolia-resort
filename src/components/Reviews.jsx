import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Star, CheckCircle2, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? HOTEL_DATA.reviews
    : HOTEL_DATA.reviews.filter(r => r.rating === parseInt(filter));

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % filtered.length);
  };

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <section id="reviews" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <span className="section-subtitle">Verified Testimonials</span>
          <h2 className="section-title">Words of Praise from Discerning Travelers</h2>
          <p className="section-desc">
            Discover why heads of state, corporate executives, and honeymooners consistently rate Veloria Resort as the crown jewel of world luxury.
          </p>
        </div>

        {/* Overall Rating Bar */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }} className="review-stat-bar">

          <div style={{ textAlign: 'center', paddingRight: '2rem', borderRight: '1px solid var(--border-color)' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', fontWeight: 800, color: 'var(--brand-green)', lineHeight: 1 }}>
              4.98
            </span>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0.4rem 0' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#C59B27" color="#C59B27" />
              ))}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Overall Score (2,840+ Reviews)
            </span>
          </div>

          <div>
            <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>The 5-Star Diamond Guarantee</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 0 }}>
              Every testimonial displayed is independently verified and collected from authentic guests after their check-out. We maintain zero tolerance for artificial feedback.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600,
                background: filter === 'all' ? 'var(--gold-primary)' : 'var(--bg-secondary)',
                color: filter === 'all' ? '#121416' : 'var(--text-primary)', border: 'none', cursor: 'pointer'
              }}
            >
              All Verified
            </button>
            <button
              onClick={() => setFilter('5')}
              style={{
                padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', fontWeight: 600,
                background: filter === '5' ? 'var(--gold-primary)' : 'var(--bg-secondary)',
                color: filter === '5' ? '#121416' : 'var(--text-primary)', border: 'none', cursor: 'pointer'
              }}
            >
              5 Star Only
            </button>
          </div>

        </div>

        {/* Carousel */}
        {filtered.length > 0 && (
          <div style={{ position: 'relative', maxWidth: '960px', margin: '0 auto' }}>

            <div style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: '4rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-gold)',
              position: 'relative',
              textAlign: 'center'
            }}>
              <Quote size={54} color="#C59B27" style={{ opacity: 0.2, margin: '0 auto 1.5rem auto' }} />

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.7rem)',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                lineHeight: 1.6,
                marginBottom: '2.5rem'
              }}>
                {filtered[currentIdx].text}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}>
                <img
                  src={filtered[currentIdx].avatar}
                  alt={filtered[currentIdx].author}
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold-primary)' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ fontSize: '1.15rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {filtered[currentIdx].author}
                    {filtered[currentIdx].verified && (
                      <CheckCircle2 size={16} color="#10B981" title="Verified Stay" />
                    )}
                  </h5>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block' }}>
                    {filtered[currentIdx].location} &bull; {filtered[currentIdx].date}
                  </span>
                  <div style={{ display: 'flex', marginTop: '4px' }}>
                    {[...Array(filtered[currentIdx].rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#C59B27" color="#C59B27" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              style={{
                position: 'absolute', top: '50%', left: '-30px', transform: 'translateY(-50%)',
                width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-card)',
                color: 'var(--text-primary)', border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                boxShadow: 'var(--shadow-md)', zIndex: 10
              }}
              title="Previous Review"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextReview}
              style={{
                position: 'absolute', top: '50%', right: '-30px', transform: 'translateY(-50%)',
                width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-card)',
                color: 'var(--text-primary)', border: '1px solid var(--border-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                boxShadow: 'var(--shadow-md)', zIndex: 10
              }}
              title="Next Review"
            >
              <ChevronRight size={24} />
            </button>

          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .review-stat-bar { grid-template-columns: 1fr !important; text-align: center !important; gap: 1.5rem !important; }
          .review-stat-bar > div:first-child { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
