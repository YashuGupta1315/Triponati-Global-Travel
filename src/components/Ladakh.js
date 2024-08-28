import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9loGbuz55OOOumzcPC8hbPDZyght1vXcmBQ&s",
    alt: "Khardung La",
  },

  {
    src: "https://media2.thrillophilia.com/images/photos/000/126/044/original/1519633344_Ladakh-Home.jpg?width=975&height=600",
    alt: "Nubra Valley",
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhU6bsqLwRU86U8t0euuQlgpoW_9zVuYozQ&s",
    alt: "Pangong Lake",
  },

  {
    src: "https://i0.wp.com/unciatrails.com/wp-content/uploads/2022/01/satyadev-hirani-fpk_tonCpVI-unsplash-1.jpg?resize=700%2C466&ssl=1",
    alt: "Thiksey Monastery",
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dHoa6mdHp_CmwZaC1fCqmM-sftwaqYVpNQ&s",
    alt: "Leh Palace",
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVLLbMLz0DRQld_uOTPueFZ3f_tkS_dHHtg&s",
    alt: "Shanti Stupa ",
  },

  {
    src: "https://www.financialexpress.com/wp-content/uploads/2019/08/Ladakh-bird-watching-Image-Incredible-India-660.jpg",
    alt: "Zanskar",
  },
  
  {
    src: "https://www.ladakh-tourism.net/wp-content/uploads/2021/04/leh-ladakh-bike-trip33.jpeg",
    alt: "Kargil",
  },
];
const Ladakh = () => {
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
          title="Ladakh"
          text="Ladakh, often referred to as the Land of High Passes, is a mesmerizing region in the northernmost part of India, renowned for its breathtaking landscapes, rugged terrain, and unique cultural heritage. Nestled between the majestic Himalayas and the Karakoram Range, Ladakh offers an unparalleled experience for nature lovers and adventure enthusiasts alike. The region is dotted with ancient monasteries, such as Thiksey and Hemis, which provide a glimpse into the rich Buddhist culture of the area.
          Ladakh's iconic Pangong Lake, with its changing hues of blue, and the stunning Nubra Valley, known for its sand dunes and double-humped camels, are must-visit attractions. The region is also a haven for trekkers, with trails like the Markha Valley and Chadar Trek offering challenging and rewarding experiences. Whether it's the thrill of traversing the high mountain passes, the tranquility of its remote villages, or the spiritual ambiance of its monasteries, Ladakh promises an unforgettable journey into one of the most spectacular and serene landscapes in the world."
          icon="fa-regular fa-calendar-days"
          para="8 Days"
          icon1="fa-regular fa-clock"
          para1="192 hours"
        />
        <StickyForm
          title="Khardung La | Nubra Valley - Pangong Lake - Thiksey Monastery - Leh Palace - Shanti Stupa - Zanskar - Kargil : Get 26% off!"
          originalPrice="INR 70,000"
          discountedPrice="INR 51,800"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Ladakh;
