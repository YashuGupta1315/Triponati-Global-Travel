import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://d3d5bpai12ti8.cloudfront.net/wp-content/uploads/20211124195937/ImageReader-1-scaled.jpg",
    alt: "Srinagar",
  },

  {
    src: "https://tourismkashmir.co.in/assets/images/img5.jpg",
    alt: "Gulmarg",
  },

  {
    src: "https://boldnewsonline.com/wp-content/uploads/2022/12/WINTER-TOURISM-699x430.jpg",
    alt: "Pahalgam",
  },

  {
    src: "https://sundayguardianlive.com/wp-content/uploads/2021/03/ExQegIRU8AQgRwd.jpg",
    alt: "Dal Lake",
  },

  {
    src: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/21104741/Tourist-Places-in-Kashmir-feature-compressed.jpg",
    alt: "Sonamarg",
  },

  {
    src: "https://media5.newsnationtv.com/images/2016/12/26/702991775-srinagarleh.jpg",
    alt: "Jammu ",
  },

  {
    src: "https://www.holidify.com/images/cmsuploads/compressed/ShalimarBagh_20200525152608_20200525152638.jpg",
    alt: "Patnitop",
  },
  
  {
    src: "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_57/1705848/401401.jpeg",
    alt: "Katra",
  },
];
const JammuandKashmir = () => {
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
          title="Jammu and Kashmir"
          text="Jammu and Kashmir, often referred to as Paradise on Earth, is a stunning destination known for its breathtaking landscapes, snow-capped mountains, lush valleys, and serene lakes. The region offers a blend of adventure, spirituality, and natural beauty, making it a sought-after destination for tourists. 
          Srinagar, the summer capital, is famous for its picturesque Dal Lake, houseboats, and vibrant Mughal gardens. Gulmarg and Pahalgam are popular for skiing, trekking, and other adventure sports. Jammu, the winter capital, is home to the revered Vaishno Devi shrine, attracting millions of pilgrims each year. With its rich culture, diverse cuisine, and warm hospitality, Jammu and Kashmir offer a unique experience that lingers long in the hearts of its visitors."
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Srinagar | Gulmarg - Pangong Lake - Pahalgam - Dal Lake - Sonamarg - Jammu  - Patnitop - Katra : Get 26% off!"
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
export default JammuandKashmir;
