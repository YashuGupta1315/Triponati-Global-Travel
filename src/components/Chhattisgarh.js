import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://tourism.cgstate.gov.in/img1/raipur/001.jpg",
    alt: "Raipur",
  },
  {
    src: "https://tourism.cgstate.gov.in/img1/Achanakmar/003.jpg",
    alt: "Achanakmar Tiger Reserve",
  },
  {
    src: "https://tourism.cgstate.gov.in/img1/Ratanpur/003.jpg",
    alt: "Ratanpur",
  },
  {
    src: "https://tourism.cgstate.gov.in/img1/MadkuDweep/003.jpg",
    alt: "MadkuDweep",
  },
  {
    src: "https://tourism.cgstate.gov.in/img1/chitrakote/003.jpg",
    alt: "Chitrakote",
  },
  {
    src: "https://tourism.cgstate.gov.in/img1/Bhoramdeo/003.jpg",
    alt: "Bhoramdeo",
  },
  {
    src: "https://tourism.cgstate.gov.in/img1/wildlife/003.jpg",
    alt: "Barnawapara",
  },
  {
    src: "https://tourism.cgstate.gov.in/img1/kanger/001.jpg",
    alt: "Kanger Valley National Park",
  },
];
const Chhattisgarh = () => {
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
          title="Chhattisgarh"
          text="Chhattisgarh, located in central India, is a state known for its rich cultural heritage, diverse tribal traditions, and vast natural beauty. The state is home to dense forests, stunning waterfalls, and ancient caves. The Chitrakoot Falls, often referred to as the Niagara of India, and the unique stalactites and stalagmites of the Kutumsar Caves are among the top attractions. Additionally, the state offers opportunities for wildlife enthusiasts with its numerous national parks and wildlife sanctuaries, including the Kanger Valley National Park and the Barnawapara Wildlife Sanctuary. Chhattisgarh's vibrant festivals and traditional handicrafts further enhance its appeal as an offbeat and culturally rich travel destination."
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Raipur| Achanakmar Tiger Reserve - Ratanpur - Chitrakote - MadkuDweep - Barnawapara: Get 26% off!"
          originalPrice="INR 75,000"
          discountedPrice="INR 55,500"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Chhattisgarh;
