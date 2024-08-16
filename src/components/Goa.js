import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
const images = [
  {
    src: "https://www.tourmyindia.com/states/goa/image/fort-aguada-goa.webp",
    alt: " Fort Aguada",
  },
  {
    src: "https://www.tourmyindia.com/states/goa/image/chapora-fort-goa.webp",
    alt: " Chapora Fort ",
  },
  {
    src: "https://www.tourmyindia.com/states/goa/image/dudhsagar-falls-banner.webp",
    alt: " Dudhsagar Falls ",
  },
  {
    src: "https://media1.thrillophilia.com/filestore/rs1dp038eqs4hjc5mnjr4l0qkad9_72421-Ashvem-Beach.jpg",
    alt: " Ashwem Beach ",
  },
];
const Goa = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <ImageGallery images={images} />
      <div className="App">
        <States
          title="Goa"
          text="Goa, located on the southwestern coast of India, is renowned for its stunning beaches, vibrant nightlife, and rich cultural heritage. With its Portuguese colonial architecture, lush landscapes, and historic churches, Goa offers a unique blend of Indian and European influences. The state's beaches, such as Baga, Anjuna, and Palolem, are popular for their golden sands and lively atmosphere. Goa is also famous for its seafood, bustling markets, and vibrant festivals, making it a top destination for both relaxation and adventure."
          icon="fa-regular fa-calendar-days"
          para="5 Days"
          icon1="fa-regular fa-clock"
          para1="120 hours"
        />
        <StickyForm
          title="Raipur| Achanakmar Tiger Reserve - Ratanpur - Chitrakote - MadkuDweep - Barnawapara: Get 26% off!"
          originalPrice="INR 40,000"
          discountedPrice="INR 29,600"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Goa;
