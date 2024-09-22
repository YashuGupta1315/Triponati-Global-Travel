import React from 'react';
import './HoneymoonSection.css';

const honeymoonDestinations = [
  { name: 'Kashmir', image: 'https://media1.thrillophilia.com/filestore/usazq8kuqylkmsbblnx9vah8vwac_vw24iqdm775v9ve4zsihqy11i8ng_shutterstock_2385998939.jpg?dpr=1.4875000715255737&w=1291', description: 'A Luxury stay in houseboats of Kashmir is a magical expereince with the sight of the moon reflected on the glassy lake, the cool breeze and the quiet gurgling sound of water helping you soothe your soul.' },
  { name: 'Greece ', image: 'https://media1.thrillophilia.com/filestore/raoe41fdngw9j421oc6rn1bjbt4l_1503040748_greece_honeymoon_images_couples_q.jpg?dpr=1.4875000715255737&w=1291', description: 'Embark on an exhilarating honeymoon trip to enjoy the mesmerising beauty of Greece exhibiting the perfect blend of beaches, architectural brilliance, natural sights and happy faces' },
];

const HoneymoonSection = () => {
  return (
    <section className="honeymoon-section">
      <div className="container">
        <h2 className="section-title">Honeymoon Destinations</h2>
        <p className="section-subtitle">
          Explore the best honeymoon destinations curated for romantic getaways.
        </p>

        {/* Honeymoon Destinations */}
        <div className="destination-grid">
          {honeymoonDestinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />
              <div className="destination-info">
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Packages Section */}
        <div className="packages-section">
          <h2 className="section-title">Curated Honeymoon Packages</h2>
          <div className="package-grid">
            <div className="package-card">
              <h3 className="package-title">Luxury Escape</h3>
              <p className="package-description">
              A Luxury stay in houseboats of Kashmir is a magical expereince with the sight of the moon reflected on the glassy lake, the cool breeze and the quiet gurgling sound of water helping you soothe your soul.
              </p>
            </div>
            <div className="package-card">
              <h3 className="package-title">Adventure Honeymoon</h3>
              <p className="package-description">
               Explore the mighty UNESCO-listed Acropolis of Athens on foot to see the glorious Parthenon, Temple of Zeus and other highlights at Greece
              </p>
            </div>
            <div className="package-card">
              <h3 className="package-title">Honeymoon Special !!!</h3>
              <a href="/HoneyForm" className="package-booking">
               Book Your Honeymoon 
              </a>
            </div>

          </div>
        </div>
        
      
      </div>
    </section>
  );
};

export default HoneymoonSection;
