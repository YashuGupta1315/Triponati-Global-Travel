import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/cover-for-Places-To-Visit-In-Manipur.jpg",
    alt: "Imphal",
  },
  {
    src: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/18/41382e8a00fb64504e33762e52d83b21_1000x1000.jpg",
    alt: "Moreh",
  },
  {
    src: "https://im.hunt.in/cg/man/About/Tourism/CCpur_Waterfall.jpg",
    alt: "Churachandpur",
  },
  {
    src: "https://qph.cf2.quoracdn.net/main-qimg-dd60e3537b3fa462644add35a8f55ec1-lq",
    alt: "Loktak Lake",
  },
  {
    src: "https://manipurtourism.gov.in/wp-content/uploads/2020/08/MM.jpg",
    alt: "Ukhrul",
  },
  {
    src: "https://i.pinimg.com/736x/54/62/df/5462df1dc4e3fec91adb625d51268635.jpg",
    alt: "Keibul Lamjao National Park",
  },
  {
    src: "https://qph.cf2.quoracdn.net/main-qimg-7a1126538bb66b659a5a28446bc1ede5-lq",
    alt: "Moirang",
  },
  {
    src: "https://www.shutterstock.com/shutterstock/videos/3481128075/thumb/1.jpg?ip=x480",
    alt: "Tamenglong",
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
          title="Imphal | Moreh - Churachandpur - Loktak Lake - Ukhrul - Keibul Lamjao National Park - Moirang : Get 26% off!"
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
