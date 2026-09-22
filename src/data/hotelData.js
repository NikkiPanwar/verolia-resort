
export const HOTEL_DATA = {
  rooms: [
    {
      id: 'deluxe-room',
      name: 'Deluxe Garden Room',
      category: 'deluxe',
      price: 450,
      size: '48 m² / 516 ft²',
      maxGuests: '2 Adults, 1 Child',
      bedType: 'King Size or Twin Beds',
      wifi: true,
      breakfast: true,
      ac: true,
      balcony: true,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      description: 'Immerse yourself in serene comfort with private balconies overlooking lush botanical gardens. Crafted with warm teak wood furnishings, artisanal ceramics, and plush goose-down bedding for an unforgettable night’s rest.',
      gallery: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
      ],
      tour360: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2400&q=80',
      amenities: ['High-Speed Wi-Fi', 'Complimentary Gourmet Breakfast', 'Individual Climate AC', 'Private Garden Balcony', 'Nespresso Coffee Bar', 'Rainfall Shower & Soaking Tub', 'In-room Safe', '55-inch OLED TV', '24/7 Room Service', 'Luxury Diptyque Toiletries'],
      policies: {
        checkIn: '3:00 PM (Early check-in upon availability)',
        checkOut: '12:00 PM (Late check-out available)',
        cancellation: 'Free cancellation up to 48 hours prior to check-in date.'
      },
      includedServices: ['Welcome Champagne on arrival', 'Daily fruit basket & chocolates', 'Access to Infinity Pool & Spa Sauna', 'Valet Parking'],
      extraServices: [
        { name: 'Airport Private Luxury BMW Transfer', price: 85 },
        { name: 'In-room 60min Couples Massage', price: 220 },
        { name: 'Private Candlelight Garden Dinner', price: 180 },
        { name: 'Late Checkout (until 6:00 PM)', price: 120 }
      ]
    },
    {
      id: 'premium-room',
      name: 'Premium Oceanfront Room',
      category: 'premium',
      price: 680,
      size: '56 m² / 602 ft²',
      maxGuests: '2 Adults, 2 Children',
      bedType: 'Super King Bed',
      wifi: true,
      breakfast: true,
      ac: true,
      balcony: true,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      description: 'Experience panoramic ocean vistas from your expansive private veranda. Featuring floor-to-ceiling glass doors, Italian marble bathrooms, and customized lighting scenes designed to harmonize with the sunset.',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1200&q=80'
      ],
      tour360: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=2400&q=80',
      amenities: ['Panoramic Ocean View', 'High-Speed Wi-Fi', 'Champagne Breakfast Included', 'Smart Climate Control', 'Private Sun Deck', 'Freestanding Marble Bathtub', 'Bose Sound System', 'Evening Turndown Service', 'Pillow Menu (6 types)', 'Dedicated Butler Service'],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM',
        cancellation: 'Free cancellation up to 24 hours prior to check-in.'
      },
      includedServices: ['Dedicated Personal Butler', 'Sunset Cocktails & Canapés', 'Unlimited Spa Thermal Access', 'Private Cabana at Beach Club'],
      extraServices: [
        { name: 'Private Helicopter City Tour', price: 650 },
        { name: 'Private Sunset Yacht Cruise', price: 450 },
        { name: 'In-suite Private Chef Dinner', price: 320 }
      ]
    },
    {
      id: 'executive-room',
      name: 'Executive Club Room',
      category: 'executive',
      price: 850,
      size: '65 m² / 700 ft²',
      maxGuests: '2 Adults',
      bedType: 'California King Bed',
      wifi: true,
      breakfast: true,
      ac: true,
      balcony: true,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      description: 'Tailored for discerning travelers seeking sophistication and seamless productivity. Includes exclusive access to the Aura Executive Lounge with complimentary all-day refreshments, evening hors d’oeuvres, and private meeting rooms.',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
      ],
      tour360: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2400&q=80',
      amenities: ['Executive Club Lounge Access', 'Private Ergonomic Workspace', 'High-Speed Fiber Wi-Fi', 'Complimentary Laundry (3 pcs/day)', 'Bang & Olufsen Audio', 'Dual Vanity Bathrooms', 'Premium Wet Bar', 'Express Check-in & Out', '24/7 Concierge Support'],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '2:00 PM (Guaranteed Late Checkout)',
        cancellation: 'Flexible cancellation up to 6 hours before check-in.'
      },
      includedServices: ['Executive Lounge All-day Dining', 'Free Airport Limousine Transfer', 'Two Hours Daily Boardroom Use', 'VIP Fast Track Airport Security'],
      extraServices: [
        { name: 'Personal Bodyguard & Security Escort', price: 400 },
        { name: 'Private Wine Tasting Session with Sommelier', price: 190 }
      ]
    },
    {
      id: 'family-suite',
      name: 'Royal Family Sanctuary Suite',
      category: 'suite',
      price: 1250,
      size: '110 m² / 1,184 ft²',
      maxGuests: '4 Adults, 2 Children',
      bedType: '2 King Beds + 2 Twin Beds',
      wifi: true,
      breakfast: true,
      ac: true,
      balcony: true,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      description: 'A lavish residential-style suite featuring two private bedrooms, an elegant living salon, dining room for eight, and a wraparound terrace. Complete with tailored children’s amenities and a private gaming & cinema nook.',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
      ],
      tour360: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2400&q=80',
      amenities: ['Two Master Bedrooms', 'Private Kids Cinema Lounge', 'Dining Room & Kitchenette', 'Wraparound Panoramic Balcony', 'Kids Play Tipi & Toys', 'PlayStation 5 & VR Setup', 'Three Marble Bathrooms', 'Soundproofed Privacy Walls', 'Complimentary Nanny Service (4 hrs/day)'],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM',
        cancellation: 'Free cancellation up to 7 days prior to check-in.'
      },
      includedServices: ['Complimentary Kids Club All-Day Access', 'Family Beach BBQ Dinner', 'Dedicated Family Butler', 'Complimentary Nanny Service'],
      extraServices: [
        { name: 'Private Family Dolphin Watching Boat Tour', price: 450 },
        { name: 'Private Kids Cooking Masterclass with Executive Chef', price: 150 }
      ]
    },
    {
      id: 'honeymoon-suite',
      name: 'Celestial Honeymoon Villa',
      category: 'suite',
      price: 1600,
      size: '135 m² / 1,450 ft²',
      maxGuests: '2 Adults',
      bedType: 'Custom Round Emperor Bed',
      wifi: true,
      breakfast: true,
      ac: true,
      balcony: true,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      description: 'An secluded romance haven suspended over azure waters or tucked within private cliffside groves. Features a private heated infinity plunge pool, outdoor star-gazing shower, glass floor viewing panels, and romantic rose-petal baths.',
      gallery: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
      ],
      tour360: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2400&q=80',
      amenities: ['Private Heated Infinity Plunge Pool', 'Outdoor Rain & Starlight Shower', 'Glass Floor Ocean Viewing Panel', 'Dom Pérignon Champagne on Arrival', '24/7 Romance Butler', 'Couples Jacuzzi Tub', 'Private Direct Beach Access', 'Custom Mood & Aroma Lighting'],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '2:00 PM',
        cancellation: 'Free cancellation up to 14 days before check-in.'
      },
      includedServices: ['Daily Champagne Breakfast in Bed or Floating Pool Breakfast', 'Couples 90-min Sunset Spa Ritual', 'Private Beachfront Candlelight Dinner', 'Late Checkout until 4:00 PM'],
      extraServices: [
        { name: 'Private Sunset Helicopter Tour over the Bay', price: 750 },
        { name: 'Private Violinist & Serenade Dinner Add-on', price: 300 }
      ]
    },
    {
      id: 'presidential-suite',
      name: 'The Imperial Presidential Penthouse',
      category: 'presidential',
      price: 3500,
      size: '320 m² / 3,444 ft²',
      maxGuests: '6 Adults',
      bedType: '3 Custom Handcrafted King Beds',
      wifi: true,
      breakfast: true,
      ac: true,
      balcony: true,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      description: 'The pinnacle of global luxury. Crowning the highest floor of the resort with 360-degree views, this palace includes a private elevator, bulletproof glass, private security quarters, grand piano, private gym, sauna, and a dedicated team of chefs and butlers.',
      gallery: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
      ],
      tour360: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2400&q=80',
      amenities: ['Private Rooftop Helipad Access', 'Dedicated Private Elevator & Security Detail', 'In-suite Private Gym & Thermal Sauna', 'Steinway & Sons Grand Piano', '24/7 Team of Private Butlers & Michelin Chef', 'Armored Privacy Glass', 'Wine Cellar with Vintage Selections', 'Luxury Fleet Rolls-Royce Phantom Transfer'],
      policies: {
        checkIn: 'Anytime (24/7 Flexible check-in)',
        checkOut: 'Anytime (24/7 Flexible check-out)',
        cancellation: 'Flexible terms with personal concierge consultation.'
      },
      includedServices: ['Unlimited Rolls-Royce Phantom Chauffeur Service', 'All-inclusive Gourmet Dining by Private Chef', 'Daily Unlimited Spa Treatments', 'VIP Helipad Transfer & Security Detail'],
      extraServices: [
        { name: 'Private Fireworks Show Over the Lagoon', price: 3500 },
        { name: 'Private Celebrity DJ / Musical Guest Performance', price: 2500 }
      ]
    }
  ],

  amenities: [
    { id: 'pool', title: 'Infinity Swimming Pool', desc: 'Temperature-controlled Olympic pool overlooking the horizon.', icon: 'Waves' },
    { id: 'spa', title: 'Luxury Holistic Spa', desc: 'Ancient healing therapies combined with modern Swiss wellness.', icon: 'Sparkles' },
    { id: 'gym', title: 'Technogym Fitness Center', desc: 'State-of-the-art cardio, weights, and private training studios.', icon: 'Dumbbell' },
    { id: 'kids', title: 'Wonderland Kids Play Area', desc: 'Supervised creative workshops, games, and outdoor adventure park.', icon: 'Baby' },
    { id: 'conf', title: 'Grand Conference Hall', desc: 'High-tech AV equipped boardroom and lecture hall seating 500.', icon: 'Presentation' },
    { id: 'wed', title: 'Royal Wedding Venue', desc: 'Breathtaking beachfront and heritage ballroom wedding spaces.', icon: 'HeartHandshake' },
    { id: 'rest', title: '7 Signature Restaurants', desc: 'World-renowned chefs serving Michelin-starred culinary masterpieces.', icon: 'Utensils' },
    { id: 'cafe', title: 'Veranda Patisserie & Cafe', desc: 'Artisanal French pastries, organic teas, and single-origin coffees.', icon: 'Coffee' },
    { id: 'bar', title: 'The Velvet Bar & Lounge', desc: 'Rare vintages, bespoke cocktails, and live evening jazz performances.', icon: 'Wine' },
    { id: 'wifi', title: 'Free High-Speed Wi-Fi', desc: 'Seamless 1 Gbps wireless connectivity throughout the entire resort.', icon: 'Wifi' },
    { id: 'park', title: 'Valet & Covered Parking', desc: 'Complimentary secure underground parking with luxury detailing.', icon: 'Car' },
    { id: 'pickup', title: 'VIP Airport Limousine Pickup', desc: 'Chauffeur-driven Mercedes-Maybach and BMW 7-Series fleet.', icon: 'Plane' },
    { id: 'laundry', title: 'Express Organic Laundry', desc: 'Same-day eco-friendly dry cleaning, pressing, and garment care.', icon: 'Shirt' },
    { id: 'biz', title: 'Executive Business Center', desc: 'Private offices, secretarial support, and global courier dispatch.', icon: 'Briefcase' },
    { id: 'med', title: '24/7 Medical Assistance', desc: 'On-call resident physician, nurse practitioner, and pharmacy.', icon: 'Stethoscope' },
    { id: 'rec', title: '24x7 Multilingual Reception', desc: 'Personalized concierge desk dedicated to fulfilling every desire.', icon: 'BellRing' },
    { id: 'pet', title: 'Pet Friendly Luxury Sanctuary', desc: 'Gourmet pet menus, plush beds, and dedicated pet walking trails.', icon: 'PawPrint' },
    { id: 'room', title: '24/7 Gourmet Room Service', desc: 'Course-by-course fine dining delivered in the privacy of your suite.', icon: 'ConciergeBell' },
    { id: 'ev', title: 'Super EV Charging Stations', desc: 'Fast-charging Tesla and universal EV hubs in secure parking bays.', icon: 'Zap' },
    { id: 'acc', title: 'Full Wheelchair Accessibility', desc: 'Zero-step pathways, accessible elevators, and adapted luxury suites.', icon: 'Accessibility' }
  ],

  dining: [
    {
      id: 'fine-dining',
      name: 'The Imperial Room - Michelin Gastronomy',
      type: 'Fine Dining',
      timing: '6:30 PM - 11:30 PM (Daily)',
      desc: 'An epicurean journey through progressive European and heritage Indian gastronomy. Helmed by 3-Star Michelin Chef Laurent Mercier, featuring 12-course tasting menus paired with rare Grand Cru wines.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'rooftop',
      name: 'Skyline Cloud Bar & Grill',
      type: 'Rooftop Restaurant',
      timing: '5:00 PM - 2:00 AM (Daily)',
      desc: 'Perched 20 stories above the azure coastline. Savor Japanese A5 Wagyu robatayaki, fresh seafood platters, and theatrical botanical cocktails while watching the sun sink into the sea.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'breakfast-buffet',
      name: 'The Pavilion - Global Breakfast & Brunch',
      type: 'Breakfast Buffet',
      timing: '6:30 AM - 11:30 AM (Daily)',
      desc: 'A lavish morning feast featuring live cooking stations, champagne brunch bars, artisanal boulangerie, organic tropical fruits, and traditional delicacies from around the world.',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'poolside',
      name: 'Azure Oasis Pool Club',
      type: 'Poolside Dining',
      timing: '11:00 AM - 7:00 PM',
      desc: 'Relax in private overwater cabanas with wood-fired Neapolitan pizzas, chilled oysters, refreshing açai bowls, and signature coconut rum refreshments served directly to your lounger.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cafe',
      name: 'Veranda Botanical Patisserie',
      type: 'Cafe & Tea Lounge',
      timing: '8:00 AM - 9:00 PM',
      desc: 'An exquisite Viennese-inspired glasshouse patisserie offering delicate French macarons, truffle mille-feuilles, high tea rituals, and rare single-estate coffees brewed by master baristas.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bar-lounge',
      name: 'The Velvet Club & Whiskey Library',
      type: 'Bar Lounge & Live Music',
      timing: '7:00 PM - 3:00 AM',
      desc: 'Step into an intimate Speakeasy atmosphere with leather chesterfields, over 400 single-malt whiskeys, Cuban cigar humidor lockers, and live soul & jazz bands playing nightly.',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80'
    }
  ],

  spa: [
    { id: 's1', title: 'Ayurvedic & Swiss Massage Therapy', desc: 'Deep tissue, hot stone, and personalized aromatherapy rituals tailored to relieve tension and restore cellular balance.', icon: 'HeartHandshake' },
    { id: 's2', title: 'Himalayan Rock Salt Steam Room', desc: 'Detoxifying thermal steam chambers infused with organic eucalyptus and pure mountain minerals.', icon: 'CloudRain' },
    { id: 's3', title: 'Nordic Infrared & Dry Sauna', desc: 'Traditional cedarwood saunas designed to boost circulation, promote muscular recovery, and purify the skin.', icon: 'Flame' },
    { id: 's4', title: 'Sunrise Yoga & Aerial Studio', desc: 'Guided morning Vinyasa flow, Hatha yoga, and sound bath meditation overlooking tranquil reflecting pools.', icon: 'Sun' },
    { id: 's5', title: 'Zen Meditation Sanctuary', desc: 'Soundproofed mindfulness pods with guided breathwork instructors and Tibetan singing bowl ceremonies.', icon: 'Sparkles' },
    { id: 's6', title: 'Technogym Fitness & Pilates', desc: 'Private personal training sessions, reformer Pilates machines, and biometrically tailored fitness assessments.', icon: 'Activity' },
    { id: 's7', title: '3-Day Royal Wellness Packages', desc: 'Comprehensive rejuvenation retreats including organic detox diets, hydrotherapy, facial sculpting, and vitality diagnostics.', icon: 'Award' }
  ],

  attractions: [
    { id: 'a1', name: 'The Ancient Sacred Citadel Temple', category: 'Temples', distance: '3.2 km', travelTime: '8 mins by private car', bestTime: 'Sunrise (6:00 AM) or Sunset (5:30 PM)', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80', desc: 'A 12th-century stone architectural marvel renowned for intricate carvings and mystical evening prayer ceremonies.' },
    { id: 'a2', name: 'Sapphire Cove & Hidden Lagoon Beach', category: 'Beaches', distance: '1.5 km', travelTime: '4 mins by resort shuttle', bestTime: 'Morning to Mid-afternoon', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', desc: 'Pristine white sands, crystal turquoise waters, and coral reefs perfect for snorkeling and private beach picnics.' },
    { id: 'a3', name: 'Royal Heritage Art & Silk Museum', category: 'Museums', distance: '5.8 km', travelTime: '15 mins by taxi', bestTime: '10:00 AM - 4:00 PM', image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=800&q=80', desc: 'Explore centuries of regal history, rare gemstones, imperial weapons, and hand-woven gold silk brocades.' },
    { id: 'a4', name: 'Emerald Mist Mountain Trek & Waterfall', category: 'Mountains', distance: '12.4 km', travelTime: '25 mins by luxury 4x4', bestTime: 'Early Morning (7:00 AM)', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', desc: 'A breathtaking nature reserve featuring misty forest canopies, cascading waterfalls, and rare exotic wildlife.' },
    { id: 'a5', name: 'Marina Luxury Designer Shopping Plaza', category: 'Shopping Centers', distance: '4.0 km', travelTime: '10 mins by chauffeur', bestTime: '11:00 AM - 9:00 PM', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80', desc: 'Home to flagship fashion boutiques including Cartier, Chanel, Louis Vuitton, and bespoke tailoring salons.' },
    { id: 'a6', name: 'Sunset Harbor Yacht Club & Nightlife', category: 'Nightlife', distance: '4.5 km', travelTime: '12 mins by private cab', bestTime: '8:00 PM onwards', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', desc: 'Vibrant waterfront promenade lined with Michelin-listed bistros, VIP nightclubs, and luxury charter docks.' }
  ],

  transport: [
    { id: 't1', name: 'Airport VIP Limousine Pickup', icon: 'Plane', price: '$85 (One-way)', duration: '25 mins', desc: 'Chauffeur-driven Mercedes-Maybach S-Class with chilled champagne, cold towels, and Wi-Fi.' },
    { id: 't2', name: 'Airport VIP Limousine Drop-off', icon: 'Plane', price: '$85 (One-way)', duration: '25 mins', desc: 'Seamless private check-in assistance and express luggage handling at the airport terminal.' },
    { id: 't3', name: 'Railway Station Express Transfer', icon: 'Train', price: '$45 (One-way)', duration: '15 mins', desc: 'Private luxury sedan transfer with porter service directly from your train platform.' },
    { id: 't4', name: 'Luxury Fleet Car Rental (Rolls-Royce / Bentley)', icon: 'Car', price: '$450 / day', duration: 'Full Day (12 hrs)', desc: 'Self-drive or dedicated chauffeur service for business meetings or romantic coast drives.' },
    { id: 't5', name: 'Local Heritage Sightseeing Tour', icon: 'Compass', price: '$150 / tour', duration: '6 Hours', desc: 'Custom curated itinerary with an English-speaking historian and private luxury minivan.' },
    { id: 't6', name: 'Outstation Mountain & Vineyard Day Trip', icon: 'Mountain', price: '$280 / trip', duration: 'Full Day (10 hrs)', desc: 'Private SUV journey to scenic mountain wineries with private tasting lunch included.' }
  ],

  foodMenu: [
    { id: 'f1', name: 'Truffle & Wild Mushroom Risotto', category: 'Vegetarian / Vegan Menu', price: 34, desc: 'Acquerello rice, 24-month Parmigiano-Reggiano, fresh black winter truffle shavings.', image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=400&q=80' },
    { id: 'f2', name: 'Pan-Seared Chilean Sea Bass', category: "View Today's Special", price: 48, desc: 'Saffron champagne reduction, asparagus spears, and baby purple potatoes.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80' },
    { id: 'f3', name: 'Wagyu Beef Ribeye Steak (250g)', category: "View Today's Special", price: 65, desc: 'Australian A5 Wagyu, bone marrow butter, roasted garlic, and truffle fries.', image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80' },
    { id: 'f4', name: 'Organic Buddha Bowl', category: 'Vegetarian / Vegan Menu', price: 26, desc: 'Quinoa, avocado, roasted sweet potato, edamame, pomegranate, tahini herb dressing.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
    { id: 'f5', name: 'Royal Lobster & Saffron Linguine', category: "View Today's Special", price: 52, desc: 'Fresh Brittany lobster tail, cherry tomatoes, white wine bisque, and fresh basil.', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80' },
    { id: 'f6', name: 'Kids Mini Gourmet Sliders & Fries', category: 'Kids Menu', price: 18, desc: 'Two brioche sliders with prime beef patty, melted cheddar, and crispy sweet potato fries.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
    { id: 'f7', name: 'Valrhona Dark Chocolate Soufflé', category: 'Desserts', price: 22, desc: 'Baked to order warm chocolate lava cake with Madagascar vanilla bean gelato.', image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=400&q=80' },
    { id: 'f8', name: 'Gold Leaf Pistachio Baklava & Tea', category: 'Desserts', price: 24, desc: 'Crispy phyllo pastry layered with Sicilian pistachios, organic honey, and 24K edible gold.', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=400&q=80' },
    { id: 'f9', name: 'Signature Smoked Old Fashioned', category: 'Beverages', price: 25, desc: '18-year Scotch, bitters, organic maple, infused with hickory oak wood smoke.', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80' },
    { id: 'f10', name: 'Late Night Club Sandwich & Truffle Chips', category: 'Late Night Dining', price: 28, desc: 'Roasted turkey breast, crispy beef bacon, avocado, organic egg on toasted sourdough.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80' }
  ],

  gallery: [
    { id: 'g1', category: 'Rooms', title: 'Presidential Penthouse Suite', image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g2', category: 'Pool', title: 'Sunset Infinity Pool', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g3', category: 'Restaurant', title: 'The Imperial Fine Dining', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g4', category: 'Lobby', title: 'Grand Marble Lobby & Chandelier', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g5', category: 'Spa', title: 'Ayurvedic Thermal Sanctuary', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g6', category: 'Wedding', title: 'Beachfront Royal Wedding Setup', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g7', category: 'Food', title: 'Michelin Star Gourmet Creation', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g8', category: 'Night View', title: 'Resort Night Illumination', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80' },
    { id: 'g9', category: 'Rooms', title: 'Oceanfront Veranda Bedroom', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80' }
  ],

  reviews: [
    {
      id: 'r1',
      author: 'Lord Alexander Vance',
      location: 'London, United Kingdom',
      rating: 5,
      date: 'Two weeks ago',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: '“A genuine rival to Aman and Four Seasons. From the moment our limousine arrived at the gates, the service was nothing short of telepathic. Our butler arranged a private sunset yacht cruise that brought tears to my wife’s eyes. We have already booked our return for New Year’s Eve.”'
    },
    {
      id: 'r2',
      author: 'Lady Genevieve & Dr. Marcus Chen',
      location: 'Geneva, Switzerland',
      rating: 5,
      date: 'Last month',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      text: '“We stayed in the Celestial Honeymoon Villa for 10 days. The private heated plunge pool overlooking the ocean is pure heaven. Chef Laurent’s 12-course tasting menu at The Imperial was easily one of the top three dining experiences of our lives. Flawless 5-star perfection.”'
    },
    {
      id: 'r3',
      author: 'Her Excellency Princess Al-Thani',
      location: 'Doha, Qatar',
      rating: 5,
      date: 'Three weeks ago',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      text: '“The Presidential Penthouse is breathtaking. The security team was discreet and professional, the private spa facilities inside the suite allowed total privacy, and the butler team anticipated our every need before we even spoke. An oasis of unmatched tranquility and luxury.”'
    }
  ],

  offers: [
    {
      id: 'o1',
      title: 'The Weekend Romance Getaway',
      desc: '3 Nights in the Honeymoon Suite with daily champagne breakfast, couples sunset spa ritual, and private airport limousine transfer included.',
      discount: '25% OFF SPECIAL',
      code: 'ROMANCE25',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'o2',
      title: 'Family Sanctuary Summer Package',
      desc: 'Stay 5 nights in the Royal Family Suite and pay for 4. Includes complimentary Kids Club all-day dining, nanny service, and private dolphin watching cruise.',
      discount: 'STAY 5 PAY 4',
      code: 'FAMILYFREE',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'o3',
      title: 'Executive Corporate Retreat & Golf',
      desc: 'Special rate for executive teams of 10+. Includes daily private boardroom access, unlimited high-speed Wi-Fi, and weekend access to our 18-hole championship golf course.',
      discount: 'VIP CORPORATE RATE',
      code: 'EXECVIP',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
    }
  ]
};
