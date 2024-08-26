import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.incredibleindia.org/content/dam/incredibleindia/images/places/daman/daman-devka-beach-40.jpg/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Devka Beach",
  },

  {
    src: "https://www.incredibleindia.org/content/dam/incredibleindia/images/places/daman/daman-mirasol-lake-garden-50.jpg/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Nani Daman Jetty",
  },

  {
    src: "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/daman-diu-dadra-nagar-haveli/fort-of-saint-jerome-1.JPG/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Saint Jerome",
  },

  {
    src: "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/daman-diu-dadra-nagar-haveli/chapel-of-our-lady-of-remedios-2.JPG/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Dominican Monastery",
  },

  {
    src: "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/daman-diu-dadra-nagar-haveli/aquaserene-tourist-complex-dudhani-10.jpg/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Moti Daman Jetty",
  },

  {
    src: "https://www.incredibleindia.org/content/dam/incredibleindia/images/places/daman/daman-light-house-50.jpg/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Lighthouse Beach",
  },

  {
    src: "https://www.incredibleindia.org/content/dam/incredible-india-v2/images/places/daman-diu-dadra-nagar-haveli/satmaliya-deer-park-1.JPG/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Jampore Beach",
  },
  
  {
    src: "https://www.incredibleindia.org/content/dam/incredibleindia/images/silvassa/dadra-and-nagar-haveli-silvassa-water-sports-centre-dudhani--1.jpg/_jcr_content/renditions/cq5dam.web.1024.576.jpeg",
    alt: "Vanganga Lake",
  },
];
const DadraandNagar = () => {
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
          title="Dadra and Nagar Haveli and Daman and Diu"
          text="Dadra and Nagar Haveli and Daman and Diu, a Union Territory in western India, offer a unique blend of natural beauty and colonial charm. With its tranquil beaches, lush forests, and historic forts, this destination is a hidden gem for travelers. Dadra and Nagar Haveli** boasts picturesque landscapes with the Vanganga Lake Garden and the serene Silvassa, known for its lush greenery and pleasant climate. The area is also renowned for its vibrant tribal culture and traditional crafts. Daman and Diu**, on the other hand, features stunning beaches like Nagoa Beach and Jampore Beach, ideal for relaxation and water sports. The charming coastal town of Diu is famous for its Portuguese heritage, evident in the historic Diu Fort and St. Paul's Church. Both regions offer a relaxed atmosphere with a mix of cultural, historical, and natural attractions, making them perfect for a peaceful getaway."
          icon="fa-regular fa-calendar-days"
          para="5 Days"
          icon1="fa-regular fa-clock"
          para1="120 hours"
        />
        <StickyForm
          title="Devka Beach | Dominican Monastery - Moti Daman Jetty - Vanganga Lake - Lighthouse Beach - Nani Daman Jetty  : Get 26% off!"
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
export default DadraandNagar;
