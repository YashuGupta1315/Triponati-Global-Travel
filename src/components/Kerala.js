import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
const images = [
  {
    src: "https://static.toiimg.com/photo/75663364.cms",
    alt: "Wayanad",
  },
  {
    src: "https://th-i.thgim.com/public/migration_catalog/article11385923.ece/alternates/FREE_1200/19TV_VARKALA",
    alt: "Kamarakom",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrmd3ri0QRbAtgWzOcw5G4rUXIz4Vdiw-GKXLlC5CrM0o3YcSykvvg9LypSheSCThyi0&usqp=CAU",
    alt: "Varkala",
  },
  {
    src: "https://media2.thrillophilia.com/images/photos/000/098/860/original/1471419178_Munnar-1967_0.JPG?w=753&h=450&dpr=1.5", 
    alt: "Kozhikode",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBESfV8dFTzeJWgFX5a9TtFpjTWroDucYbWyK0Chb6p2VrcMw9eVVNduq4h7vNpr7cUg&usqp=CAU",
    alt: "Kochi",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduLMQAXYGU84sIMGkK2xbIm53uQyYb7_WM88OgG5evP1GhwD9yJoqr6cyiFlAuO7kC-o&usqp=CAU",
    alt: "Munnar",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/52/Kovalam_Beach_%28_Light_Hoiuse_view%29.jpg",
    alt: "Alappuzha",
  },
  {
    src: "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Palakkad.jpg",
    alt: "Thiruvananthapuram",
  },
];
const Kerala = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <ImageGallery images={images} />
      <div className="App">
        <States
          title="Kerala"
          text="Kerala, often referred to as God's Own Country, is a haven for travelers seeking natural beauty and cultural richness. Nestled between the Western Ghats and the Arabian Sea, Kerala is renowned for its lush green landscapes, serene backwaters, and pristine beaches. The state's vibrant culture is showcased through its traditional art forms like Kathakali and Mohiniyattam, as well as its delicious cuisine featuring coconut and spices. From the tranquil hill stations of Munnar to the wildlife sanctuaries of Periyar, Kerala offers a diverse range of experiences. The state's Ayurvedic therapies and houseboat cruises in the backwaters add to its allure, making Kerala a must-visit destination for anyone looking to explore the heart of India’s natural and cultural heritage."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="182 hours"
        />
        <StickyForm
          title="Wayanad | Thiruvananthapuram - Alappuzha - Kochi - Kodagya - Munnar - Kamarakom : Get 26% off!"
          originalPrice="INR 1,00,000"
          discountedPrice="INR 74,000"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Kerala;
