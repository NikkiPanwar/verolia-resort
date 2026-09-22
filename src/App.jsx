import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickBooking from './components/QuickBooking';
import About from './components/About';
import Rooms from './components/Rooms';
import RoomDetailsModal from './components/RoomDetailsModal';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import SpaWellness from './components/SpaWellness';
import LocalAttractions from './components/LocalAttractions';
import Transport from './components/Transport';
import FoodOrdering from './components/FoodOrdering';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Stats from './components/Stats';
import SpecialOffers from './components/SpecialOffers';
import EventBooking from './components/EventBooking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import Toast from './components/Toast';
import { HOTEL_DATA } from './data/hotelData';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleBookNowCTA = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setToastMsg("Explore our private sanctuaries below. Click 'Book Now' on your preferred suite for instant confirmation.");
    }
  };

  const handleSearchAvailability = ({ checkin, checkout, guests, roomsCount }) => {
    setToastMsg(`Availability confirmed! 4 suites match your criteria for ${guests} (${checkin} to ${checkout}). Scroll down to select your suite.`);
    const el = document.getElementById('rooms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConfirmBooking = (room, details) => {
    setSelectedRoom(null);
    setToastMsg(`Congratulations! Suite "${room.name}" has been reserved for ${details.nights} night(s). Total: $${details.grandTotal.toLocaleString()}. Your personal butler awaits!`);
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />

      {/* Sticky Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} onBookNow={handleBookNowCTA} />

      {/* Hero Section */}
      <Hero
        onBookStay={handleBookNowCTA}
        onExploreRooms={() => {
          const el = document.getElementById('rooms');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Quick Booking Widget */}
      <QuickBooking onSearchAvailability={handleSearchAvailability} />

      {/* About Section */}
      <About />

      {/* Room Categories Section */}
      <Rooms
        onViewDetails={(room) => setSelectedRoom(room)}
        onBookRoom={(room) => setSelectedRoom(room)}
      />

      {/* Individual Room Details Modal */}
      <RoomDetailsModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onConfirmBooking={handleConfirmBooking}
      />

      {/* Amenities Section */}
      <Amenities />

      {/* Dining Experience Section */}
      <Dining onReserveSuccess={(msg) => setToastMsg(msg)} />

      {/* Spa & Wellness Section */}
      <SpaWellness />

      {/* Local Attractions Section */}
      <LocalAttractions />

      {/* Travel & Transportation Section */}
      <Transport onBookChauffeur={(msg) => setToastMsg(msg)} />

      {/* Food Ordering Section */}
      <FoodOrdering onOrderSuccess={(msg) => setToastMsg(msg)} />

      {/* Hotel Gallery Section */}
      <Gallery />

      {/* Guest Reviews Section */}
      <Reviews />

      {/* Hotel Statistics Section */}
      <Stats />

      {/* Special Offers Section */}
      <SpecialOffers
        onCopyCode={(msg) => setToastMsg(msg)}
        onBookOffer={(offer) => {
          setToastMsg(`Offer "${offer.title}" applied! Proceeding to VIP room selection with discount code ${offer.code}.`);
          const el = document.getElementById('rooms');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Event Booking Section */}
      <EventBooking onEventInquiry={(msg) => setToastMsg(msg)} />

      {/* Contact Section */}
      <Contact onSendMessage={(msg) => setToastMsg(msg)} />

      {/* Footer Section */}
      <Footer onSubscribe={(msg) => setToastMsg(msg)} />

      {/* 24/7 AI Floating Concierge */}
      <LiveChat />
    </div>
  );
}
