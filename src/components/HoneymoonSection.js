import React from 'react';
import './HoneymoonSection.css';

const honeymoonDestinations = [
  { name: 'Maldives', image: 'https://media1.thrillophilia.com/filestore/dx2d4nn17uljrrf78hzezmxbc879_shutterstock_137193326.jpg?dpr=1.4875000715255737&w=1291', description: 'A tropical paradise with stunning overwater bungalows.Spend your day pampering as you get spa treatments at the resort spa. In the evening, you can head out to explore the local markets and areas while getting a look at the Maldivian lifestyle.' },
  { name: 'Singapore', image: 'https://media1.thrillophilia.com/filestore/5uok78tav1d23yjfpsbcgj0lapmn_1548657030_shutterstock_359691761.jpg?h=252&w=auto&dpr=1.4875000715255737', description: 'Enjoy a romantic escape in Singapore, exploring the city highlights, the Sentosa Island tour, and many more experiences to make your honeymoon memorable.' },
  
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
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default HoneymoonSection;
