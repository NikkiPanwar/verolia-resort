import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { Plane, Train, Car, Compass, Mountain, Clock, CheckCircle2, X } from 'lucide-react';

export default function Transport({ onBookChauffeur }) {
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('International Airport Terminal 1');
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split('T')[0]);
  const [pickupTime, setPickupTime] = useState('14:00 (2:00 PM)');
  const [vehicleChoice, setVehicleChoice] = useState('Mercedes-Maybach S680');
  const [passengerName, setPassengerName] = useState('Lord Alexander Vance');

  const getIcon = (name) => {
    switch (name) {
      case 'Plane': return <Plane size={26} />;
      case 'Train': return <Train size={26} />;
      case 'Car': return <Car size={26} />;
      case 'Compass': return <Compass size={26} />;
      case 'Mountain': return <Mountain size={26} />;
      default: return <Car size={26} />;
    }
  };

  const handleChauffeurSubmit = (e) => {
    e.preventDefault();
    const serviceName = selectedOpt ? selectedOpt.name : 'VIP Transfer';
    setSelectedOpt(null);
    if (onBookChauffeur) {
      onBookChauffeur(`Chauffeur dispatched for ${passengerName}: ${serviceName} via ${vehicleChoice} on ${pickupDate} at ${pickupTime}. Driver tracking link sent.`);
    }
  };

  return (
    <section id="transport" className="section-padding">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Chauffeur & Fleet</span>
          <h2 className="section-title">VIP Travel, Aviation & Luxury Transport</h2>
          <p className="section-desc">
            Arrive in effortless sophistication. Our private transportation fleet includes Rolls-Royce Phantoms, Mercedes-Maybach sedans, luxury helicopters, and private yachts staffed by professional multilingual chauffeurs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {HOTEL_DATA.transport.map(item => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-card)',
                padding: '2.25rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s'
              }}
              className="transport-card-item"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(197,155,39,0.12)', color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {getIcon(item.icon)}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-green)', display: 'block' }}>
                    {item.price}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                    <Clock size={12} /> {item.duration}
                  </span>
                </div>
              </div>

              <h4 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{item.name}</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', flexGrow: 1 }}>
                {item.desc}
              </p>

              <button
                onClick={() => setSelectedOpt(item)}
                className="btn btn-outline btn-sm"
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Book VIP Transfer
              </button>
            </div>
          ))}
        </div>

        {/* Chauffeur Booking Modal */}
        {selectedOpt && (
          <div className="modal-overlay">
            <div className="modal-container" style={{ maxWidth: '600px', padding: '2.5rem' }}>
              <button
                onClick={() => setSelectedOpt(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--bg-secondary)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)' }}
              >
                <X size={20} />
              </button>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem', textAlign: 'center' }}>Chauffeur Dispatch</h3>
              <p style={{ textAlign: 'center', color: 'var(--gold-dark)', fontWeight: 700, marginBottom: '2rem' }}>{selectedOpt.name}</p>

              <form onSubmit={handleChauffeurSubmit}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    VIP Passenger Name
                  </label>
                  <input
                    type="text"
                    required
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Pickup / Destination Address
                  </label>
                  <input
                    type="text"
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Time
                    </label>
                    <input
                      type="text"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Preferred Luxury Vehicle
                  </label>
                  <select
                    value={vehicleChoice}
                    onChange={(e) => setVehicleChoice(e.target.value)}
                    style={{ width: '100%', padding: '0.85rem 1.1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
                  >
                    <option>Mercedes-Maybach S680 Sedan (VIP 1-3 Guests)</option>
                    <option>Rolls-Royce Phantom VIII (Royal 1-3 Guests)</option>
                    <option>Cadillac Escalade ESV Armored (VIP 4-6 Guests)</option>
                    <option>AgustaWestland VIP Twin-Engine Helicopter</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1.1rem', fontSize: '1rem' }}>
                  <CheckCircle2 size={18} /> Confirm Chauffeur Dispatch
                </button>
              </form>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .transport-card-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md) !important;
          border-color: var(--border-gold) !important;
        }
      `}</style>
    </section>
  );
}
