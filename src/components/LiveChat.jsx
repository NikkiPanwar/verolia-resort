import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Good evening! I am your 24/7 AI Luxury Concierge. How may I assist with your suite, dining reservations, or yacht charter today?' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    const newMsgs = [...messages, { sender: 'user', text: userMsg }];
    setMessages(newMsgs);
    setInput('');

    // Simulate AI Concierge response
    setTimeout(() => {
      let botResp = "I have taken note of your request. Let me connect you directly with our Chief Concierge or arrange your booking immediately.";
      const lower = userMsg.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
        botResp = "Our luxury suites start from $450/night for Deluxe Garden Rooms, up to $3,500/night for the Presidential Penthouse. All include 24/7 butler service.";
      } else if (lower.includes('check') || lower.includes('time')) {
        botResp = "Standard check-in is at 3:00 PM and check-out is at 12:00 PM. Flexible 24/7 check-in is included for Executive and Penthouse suites.";
      } else if (lower.includes('food') || lower.includes('restaurant') || lower.includes('dining')) {
        botResp = "We feature 4 Michelin-starred dining venues and 24/7 gourmet room service. You can reserve tables via the Dining section above!";
      } else if (lower.includes('spa') || lower.includes('massage') || lower.includes('pool')) {
        botResp = "Our Swiss thermal sanctuary features 2 infinity pools, Himalayan salt grottos, and organic treatments available daily from 6:00 AM to 10:00 PM.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResp }]);
    }, 900);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 3000 }}>
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '64px', height: '64px', borderRadius: '50%', background: 'var(--gold-gradient)',
            color: '#121416', border: 'none', boxShadow: '0 10px 30px rgba(197,155,39,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            transition: 'transform 0.3s'
          }}
          title="Open AI Concierge Chat"
        >
          <Sparkles size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          width: '380px', height: '520px', background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)',
          boxShadow: '0 25px 70px rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column',
          overflow: 'hidden', animation: 'fadeInUp 0.3s ease-out'
        }}>
          
          {/* Header */}
          <div style={{
            background: 'var(--brand-green)', padding: '1.25rem', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderBottom: '1px solid var(--gold-primary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gold-gradient)', color: '#121416', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} />
              </div>
              <div>
                <h5 style={{ margin: 0, fontSize: '0.95rem', color: '#fff', fontWeight: 700 }}>AI Luxury Concierge</h5>
                <span style={{ fontSize: '0.7rem', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} /> Live 24/7 Instant Support
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flexGrow: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-primary)' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex', gap: '0.6rem',
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                {m.sender === 'bot' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--brand-green)', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Bot size={14} />
                  </div>
                )}
                <div style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: m.sender === 'user' ? 'var(--gold-primary)' : 'var(--bg-card)',
                  color: m.sender === 'user' ? '#121416' : 'var(--text-primary)',
                  fontSize: '0.88rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: m.sender === 'bot' ? '1px solid var(--border-color)' : 'none',
                  borderBottomRightRadius: m.sender === 'user' ? 0 : 'var(--radius-md)',
                  borderBottomLeftRadius: m.sender === 'bot' ? 0 : 'var(--radius-md)'
                }}>
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gold-dark)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            style={{
              padding: '0.85rem', background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)',
              display: 'flex', gap: '0.5rem'
            }}
          >
            <input
              type="text"
              placeholder="Ask anything about your luxury stay..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flexGrow: 1, padding: '0.65rem 1rem', background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)', borderRadius: 'var(--radius-full)',
                color: 'var(--text-primary)', fontSize: '0.85rem'
              }}
            />
            <button
              type="submit"
              style={{
                width: '38px', height: '38px', borderRadius: '50%', background: 'var(--gold-gradient)',
                color: '#121416', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
              }}
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
