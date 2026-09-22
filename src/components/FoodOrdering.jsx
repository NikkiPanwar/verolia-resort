import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { UtensilsCrossed, Plus, Trash2, ShoppingBag, Clock, Check, BellRing } from 'lucide-react';

export default function FoodOrdering({ onOrderSuccess }) {
  const [activeTab, setActiveTab] = useState('All');
  const [cart, setCart] = useState([]);
  const [roomNum, setRoomNum] = useState('Presidential Penthouse Suite 2001');
  const [scheduleTime, setScheduleTime] = useState('Immediate Delivery (approx. 25 mins)');
  const [specialInst, setSpecialInst] = useState('');

  const categories = ['All', "View Today's Special", 'Vegetarian / Vegan Menu', 'Kids Menu', 'Desserts', 'Beverages', 'Late Night Dining'];

  const filteredMenu = activeTab === 'All'
    ? HOTEL_DATA.foodMenu
    : HOTEL_DATA.foodMenu.filter(m => m.category === activeTab);

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(c => c.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(c => {
      if (c.id === id) {
        const newQ = c.qty + delta;
        return newQ > 0 ? { ...c, qty: newQ } : null;
      }
      return c;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const itemsList = cart.map(c => `${c.qty}x ${c.name}`).join(', ');
    setCart([]);
    if (onOrderSuccess) {
      onOrderSuccess(`Gourmet Room Service dispatched to Suite ${roomNum}! Order (${itemsList}) scheduled for ${scheduleTime}. Total: $${cartTotal}.`);
    }
  };

  return (
    <section id="food-ordering" className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">24/7 In-Room Gastronomy</span>
          <h2 className="section-title">Gourmet Room Service & Late Night Dining</h2>
          <p className="section-desc">
            Savor course-by-course culinary masterpieces crafted by Michelin-starred chefs delivered directly to the privacy of your suite or oceanfront balcony at any hour.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '3rem', alignItems: 'flex-start' }} className="food-order-layout">
          
          {/* Menu Catalog */}
          <div>
            {/* Category Tabs */}
            <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2rem' }}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(cat)}
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    color: activeTab === cat ? '#FFFFFF' : 'var(--text-secondary)',
                    background: activeTab === cat ? 'var(--brand-green)' : 'var(--bg-card)',
                    border: `1px solid ${activeTab === cat ? 'var(--brand-green)' : 'var(--border-color)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.25s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.75rem' }}>
              {filteredMenu.map(item => (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s'
                  }}
                  className="food-card-item"
                >
                  <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    />
                    <span style={{
                      position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'var(--brand-green)',
                      color: '#FFFFFF', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)',
                      fontWeight: 700, fontSize: '0.85rem'
                    }}>
                      ${item.price}
                    </span>
                  </div>

                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h5 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{item.name}</h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem', flexGrow: 1 }}>
                      {item.desc}
                    </p>

                    <button
                      onClick={() => addToCart(item)}
                      className="btn btn-gold btn-sm"
                      style={{ width: '100%', marginTop: 'auto', padding: '0.65rem' }}
                    >
                      <Plus size={16} /> Add to Dining Tray
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive In-Room Dining Tray / Cart */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.25rem',
            border: '1px solid var(--border-gold)',
            boxShadow: 'var(--shadow-md)',
            position: 'sticky',
            top: '6.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.45rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShoppingBag size={20} color="#C59B27" /> Your Dining Tray
              </h3>
              <span className="badge">{cart.reduce((s, i) => s + i.qty, 0)} Items</span>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                <UtensilsCrossed size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.3 }} />
                <p style={{ marginBottom: '0.5rem' }}>Your in-room dining tray is empty.</p>
                <span style={{ fontSize: '0.8rem' }}>Select delicacies from the menu to build your royal order.</span>
              </div>
            ) : (
              <div>
                <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1.5rem', paddingRight: '0.5rem' }}>
                  {cart.map(item => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0.85rem 0', borderBottom: '1px solid var(--border-color)'
                      }}
                    >
                      <div style={{ flexGrow: 1, paddingRight: '0.75rem' }}>
                        <strong style={{ display: 'block', fontSize: '0.95rem' }}>{item.name}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--gold-dark)', fontWeight: 600 }}>${item.price} each</span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--bg-secondary)', border: 'none', cursor: 'pointer', fontWeight: 700 }}
                        >
                          -
                        </button>
                        <span style={{ fontWeight: 700, minWidth: '18px', textAlign: 'center' }}>{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--bg-secondary)', border: 'none', cursor: 'pointer', fontWeight: 700 }}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', marginLeft: '0.4rem' }}
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '2px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Total Charges:</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--brand-green)' }}>
                    ${cartTotal}
                  </span>
                </div>

                {/* Delivery Form */}
                <form onSubmit={handleOrderSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      Suite / Villa Number
                    </label>
                    <input
                      type="text"
                      required
                      value={roomNum}
                      onChange={(e) => setRoomNum(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontWeight: 600 }}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                      Delivery Timing
                    </label>
                    <select
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontWeight: 600 }}
                    >
                      <option>Immediate Delivery (approx. 25 mins)</option>
                      <option>Schedule Breakfast (7:00 AM tomorrow)</option>
                      <option>Schedule Lunch (12:30 PM)</option>
                      <option>Schedule Sunset Dinner (7:00 PM)</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <input
                      type="text"
                      placeholder="Special instructions (e.g. extra napkins, sauce on side)"
                      value={specialInst}
                      onChange={(e) => setSpecialInst(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontSize: '0.85rem' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.15rem', fontSize: '1rem' }}>
                    <BellRing size={18} /> Dispatch Order to Kitchen
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .food-order-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        .food-card-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--border-gold) !important;
        }
      `}</style>
    </section>
  );
}
