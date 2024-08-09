import "./InternationalStyle.css";
import InternationData from "./InternationData";

function International() {
  return (
    <div className="Inter">
      <h1>International Trip's</h1>
      <p>Explore your Dream Destination..</p>
      <div className="Intercard">
        <InternationData
          Img="https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Dubai"
          header="Dubai"
          text="Dubai is a city of superlatives, known for its futuristic skyline, luxury shopping, and vibrant culture. Nestled in the United Arab Emirates, this modern metropolis is home to the world's tallest building, the Burj Khalifa, and the expansive Dubai Mall. Beyond its architectural marvels, Dubai offers a blend of traditional and contemporary experiences, from exploring bustling souks and desert safaris to enjoying fine dining and world-class entertainment. A hub of innovation and tourism, Dubai is a dynamic destination that promises an unforgettable experience."
          Url="/"
          visit="Visit Now!"
        />
        <InternationData
          Img=" https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Australia"
          header="Australia"
          text="Australia, often referred to as the Land Down Under, is a country and continent renowned for its stunning natural beauty, vibrant cities, and unique wildlife. From the iconic Sydney Opera House and the Great Barrier Reef to the vast Outback and pristine beaches, Australia offers a diverse range of experiences for travelers. The country's rich indigenous culture, combined with its modern, multicultural society, creates a dynamic and welcoming environment. Whether exploring bustling urban centers, hiking through national parks, or relaxing by the coast, Australia promises adventure, relaxation, and unforgettable memories."
          Url="/"
          visit="Visit Now!"
        />
        <InternationData
          Img="https://images.unsplash.com/photo-1531778272849-d1dd22444c06?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          Alt="Bali"
          header="Bali"
          text="Bali, often referred to as the Island of the Gods,is a tropical paradise located in Indonesia. Renowned for its stunning beaches, vibrant culture, and lush landscapes, Bali offers a unique blend of natural beauty and rich traditions. Visitors can explore ancient temples, surf world-class waves, and immerse themselves in the island's lively arts scene. With its warm hospitality, diverse culinary experiences, and breathtaking sunsets, Bali is a dream destination for travelers seeking both adventure and relaxation."
          Url="/"
          visit="Visit Now!"
        />
      </div>
    </div>
  );
}
export default International;
