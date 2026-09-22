import React, { useEffect } from 'react';
import { Sparkles, X, CheckCircle2 } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '110px',
      right: '2rem',
      zIndex: 5000,
      background: 'var(--bg-glass-heavy)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid var(--gold-primary)',
      borderRadius: 'var(--radius-md)',
      padding: '1rem 1.5rem',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      maxWidth: '440px',
      animation: 'fadeInDown 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }}>
      <div style={{
        width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gold-gradient)',
        color: '#121416', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
      }}>
        <Sparkles size={20} />
      </div>

      <div style={{ flexGrow: 1 }}>
        <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--gold-dark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
          VIP Notification
        </strong>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.4, display: 'block' }}>
          {message}
        </span>
      </div>

      <button
        onClick={onClose}
        style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
      >
        <X size={18} />
      </button>
    </div>
  );
}
