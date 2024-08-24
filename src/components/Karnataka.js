import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://karnatakatourism.org/wp-content/uploads/2020/05/Gol-Gumbaz-THUMBNAIL-400X300.jpg",
    alt: "seven wonders",
  },
  {
    src: "https://karnatakatourism.org/wp-content/uploads/2020/05/Monastery-at-Bylakuppe-Thumbnail-400x300-1.jpg",
    alt: "Bylakuppe",
  },
  {
    src: "https://karnatakatourism.org/wp-content/uploads/2020/05/Backwaters-of-River-Sharavathi-Thumbnail-400x300-1.jpg",
    alt: "Honnavar",
  },
  {
    src: "https://karnatakatourism.org/wp-content/uploads/2020/05/Sivanasamudra-falls-Thumbnail-400x300-1.jpg", 
    alt: "Sivanasamudra ",
  },
  {
    src: "https://karnatakatourism.org/wp-content/uploads/2020/05/St-Philomenas-Church-Thumbnail-400_300.jpg",
    alt: "Bengaluru",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIo0OEz-WoCLdueCfbkoEGIBzM0KvQ98k19A&s",
    alt: "Hampi",
  },
  {
    src: "https://www.incredible-southindia.com/images/karnataka/destination.jpg",
    alt: "Mysuru",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbJeixhrWL2AMOjvwhpkCBqqwHIvib79fjFA&s",
    alt: "Gokarna",
  },
];
const Karnataka = () => {
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
          title="Karnataka"
          text="Karnataka, located in the southern part of India, is a state rich in history, culture, and natural beauty. Known for its diverse landscapes, Karnataka offers a wide range of experiences for tourists. The state is home to ancient temples, majestic palaces, and UNESCO World Heritage Sites like Hampi and Pattadakal. Visitors can explore the bustling city of Bengaluru, known as India's Silicon Valley, or enjoy the serene beauty of Coorg's coffee plantations and lush greenery. The state also boasts beautiful beaches in Gokarna, wildlife sanctuaries like Bandipur and Nagarhole, and the stunning Jog Falls, one of the highest waterfalls in India. Karnataka's vibrant festivals, rich heritage, and warm hospitality make it a must-visit destination for travelers."
          icon="fa-regular fa-calendar-days"
          para="21 Days"
          icon1="fa-regular fa-clock"
          para1="504 hours"
        />
        <StickyForm
          title="Bengaluru | Hampi - Mysuru - Chikkamagaluru - Kodagya - Gokarna - Honnavar : Get 26% off!"
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
export default Karnataka;
