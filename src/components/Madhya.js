import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.mptourism.com/images/destination/bhopal/profile_banner.webp",
    alt: "Bhopal",
  },
  {
    src: "https://www.mptourism.com/images/destination/bhedaghat/profile_banner.webp",
    alt: "Bhedaghat",
  },
  {
    src: "https://www.mptourism.com/images/destination/jabalpur/profile_banner.webp",
    alt: "Jabalpur",
  },
  {
    src: "https://www.mptourism.com/images/destination/rewa/profile_banner.png",
    alt: "Rewa",
  },
  {
    src: "https://www.mptourism.com/images/destination/panchmarhi/profile_banner.webp",
    alt: "Panchmarhi",
  },
  {
    src: "https://www.mptourism.com/images/point-of-interest/Waters%20Activities.jpg",
    alt: "Sailani Island",
  },
  {
    src: "https://www.mptourism.com/images/point-of-interest/Jungle%20Safaris%20at%20Satpura.jpg",
    alt: "Satpura",
  },
  {
    src: "https://www.mptourism.com/images/destination/tamia/profile_banner.png",
    alt: "Pristine Tamia ",
  },
];
const Madhya = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar/>
      <ImageGallery images={images} />
      <div className="App">
        <States
          title="Madhya Pradesh"
          text="Madhya Pradesh, often referred to as the Heart of India, is a state rich in history, culture, and natural beauty. It boasts several UNESCO World Heritage Sites, including the ancient temples of Khajuraho, known for their intricate sculptures, and the Buddhist monuments at Sanchi. The state is also home to impressive wildlife reserves like Kanha and Bandhavgarh National Parks, where visitors can spot tigers in their natural habitat. Madhya Pradesh offers a diverse range of attractions, from the architectural marvels of Gwalior Fort and Orchha to the serene landscapes of Pachmarhi, making it a must-visit destination for tourists seeking both adventure and cultural experiences."
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Bhopal | Satpura - Jabalpur - Bhedaghat - Pristine Tamia - Panchmarhi: Get 26% off!"
          originalPrice="INR 80,000"
          discountedPrice="INR 59,200"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Madhya;
