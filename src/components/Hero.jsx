import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

export default function Hero({ onBookStay, onExploreRooms }) {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80',
      title: 'Experience Luxury Beyond Expectations',
      subtitle: 'Where timeless elegance meets pristine oceanfront serenity. Welcome to a sanctuary crafted for the most discerning travelers.'
    },
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80',
      title: 'Private Infinity Villas & Suites',
      subtitle: 'Suspended over azure lagoons with personal 24/7 butler service and private thermal plunge pools.'
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
      title: 'Michelin-Starred Gastronomy',
      subtitle: 'Indulge in 12-course tasting menus by world-renowned chefs overlooking breathtaking sunset horizons.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  return (
    <header id="home" style={{ position: 'relative', height: '100vh', minHeight: '750px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: idx === currentSlide ? 1 : 0,
            transform: idx === currentSlide ? 'scale(1)' : 'scale(1.06)',
            transition: 'opacity 1.2s ease-in-out, transform 7s ease-out',
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />
      ))}

      {/* Dark Overlay Gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(180deg, rgba(10,46,35,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(10,11,12,0.9) 100%)',
        zIndex: 2
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '920px', marginTop: '-3rem' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.4rem',
          background: 'rgba(212,175,55,0.22)', border: '1px solid rgba(212,175,55,0.5)',
          backdropFilter: 'blur(10px)', color: '#F3E7C4', fontSize: '0.82rem', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.25em', borderRadius: 'var(--radius-full)', marginBottom: '1.75rem',
          animation: 'fadeInDown 1s ease-out'
        }}>
          <Sparkles size={14} color="#DFBD69" /> 5-Star Diamond Resort Sanctuary
        </span>

        <h1 style={{
          color: '#FFFFFF', fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', fontWeight: 700,
          textShadow: '0 10px 35px rgba(0,0,0,0.5)', marginBottom: '1.5rem', lineHeight: 1.1,
          animation: 'fadeInUp 1s ease-out 0.2s both'
        }}>
          {slides[currentSlide].title}
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.92)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 300,
          maxWidth: '740px', margin: '0 auto 2.75rem auto', textShadow: '0 4px 15px rgba(0,0,0,0.4)',
          animation: 'fadeInUp 1s ease-out 0.4s both'
        }}>
          {slides[currentSlide].subtitle}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', animation: 'fadeInUp 1s ease-out 0.6s both' }}>
          <button onClick={onBookStay} className="btn btn-gold" style={{ padding: '1.1rem 2.5rem', fontSize: '1rem' }}>
            Book Your Stay <ArrowRight size={18} />
          </button>
          <button onClick={onExploreRooms} className="btn btn-outline-white" style={{ padding: '1.1rem 2.5rem', fontSize: '1rem' }}>
            Explore Rooms
          </button>
        </div>
      </div>

      {/* Slider Controls */}
      <div style={{ position: 'absolute', bottom: '135px', right: '5%', zIndex: 15, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: '32px', height: '32px',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            backdropFilter: 'blur(5px)', transition: 'all 0.2s'
          }}
          title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: idx === currentSlide ? '28px' : '10px', height: '10px', borderRadius: 'var(--radius-full)',
              background: idx === currentSlide ? 'var(--gold-light)' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
    </header>
  );
}
