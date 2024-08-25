import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "",
    alt: "Bhopal",
  },
  {
    src: "",
    alt: "Bhedaghat",
  },
  {
    src: "",
    alt: "Jabalpur",
  },
  {
    src: "",
    alt: "Rewa",
  },
  {
    src: "",
    alt: "Panchmarhi",
  },
  {
    src: "",
    alt: "Sailani Island",
  },
  {
    src: "",
    alt: "Satpura",
  },
  {
    src: "",
    alt: "Pristine Tamia ",
  },
];
const Manipur = () => {
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
          title="Manipur"
          text="Manipur, known as the Jewel of India, is a picturesque destination in Northeast India, famed for its lush landscapes and vibrant culture. Highlights include the serene Loktak Lake with its unique floating islands, the historic Kangla Fort, and the sacred Shri Govindajee Temple. Visitors can explore the stunning Dzükou Valley, experience local festivals like Yaoshang, and enjoy traditional handloom crafts and Manipuri cuisine. Manipur offers a perfect blend of natural beauty and cultural richness, making it an unforgettable travel experience."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
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
export default Manipur;
