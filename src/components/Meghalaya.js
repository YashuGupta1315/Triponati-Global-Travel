import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://cdn.britannica.com/94/173794-004-B174A7DD/Shillong-Meghalaya-India.jpg",
    alt: "Shillong",
  },
  {
    src: "https://www.kajaawa.com/wp-content/uploads/2022/03/Nohkalikai-Falls-1-kaga.jpg",
    alt: "Cherrapunji",
  },
  {
    src: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/08/Mawlynnong-Village-Meghalaya.jpg?fit=1200%2C800&ssl=1",
    alt: "Mawlynnong",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbtIisIRW-9KmEFXhskotx4WIbSidJDRmfg&s",
    alt: "Wah Umngot",
  },
  {
    src: "https://static.wanderon.in/wp-content/uploads/2023/10/top-min-7.jpg",
    alt: "Mawsynram",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg/278px-Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg",
    alt: "Nongriat",
  },
  {
    src: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Narti%C4%81ng-Monoliths-Meghalaya.jpg?w=800&ssl=1",
    alt: "Nartiāng Monoliths",
  },
  {
    src: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Kiang-Nangbah-Meghalaya.jpg?w=1080&ssl=1",
    alt: "Kiang Nangbah",
  },
];
const Meghalaya = () => {
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
          title="Meghalaya"
          text="Meghalaya, often referred to as the Abode of Clouds, is a captivating destination in northeastern India renowned for its stunning natural beauty and unique cultural heritage. The state boasts lush green landscapes, rolling hills, and vibrant flora and fauna. Visitors can explore the breathtaking living root bridges of Cherrapunji, marvel at the cascading Nohkalikai Falls, and wander through the picturesque town of Shillong, known as the Scotland of the East. Meghalaya's rich tribal culture and traditional festivals, coupled with its scenic landscapes, offer an unforgettable experience for nature lovers and adventure enthusiasts alike."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Shillong | Cherrapunji - Mawlynnong - Nongriat - Wah Umngot - Kiang Nangbah: Get 26% off!"
          originalPrice="INR 60,000"
          discountedPrice="INR 44,400"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Meghalaya;
