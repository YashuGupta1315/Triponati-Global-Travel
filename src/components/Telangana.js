import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://cms.tgtdc.in/fetch?payload=b5bd9098-f45d-492a-9074-430be5d53a23.jpg",
    alt: "Tirupati",
  },
  {
    src: "https://cms.tgtdc.in/fetch?payload=bb6c033a-b0f4-4584-8c2c-609ffc116839.jpg",
    alt: "Hyderabad",
  },
  {
    src: "https://image.telanganatoday.com/wp-content/uploads/2022/10/Lake_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=372&p=false&r=2.625",
    alt: "Shiridi",
  },
  {
    src: "https://www.holidify.com/images/bgImages/TELANGANA.jpg",
    alt: "Bhadrachalam Popikondalu",
  },
  {
    src: "https://cdn.siasat.com/wp-content/uploads/2021/07/Ramappa-Temple.jpg",
    alt: "Srisailam",
  },
  {
    src: "https://cms.tgtdc.in/fetch?payload=1b6653c4-da7d-47e0-b005-473dbd8e206f.jpg",
    alt: "Araku",
  },
  {
    src: "https://www.abhibus.com/blog/wp-content/uploads/2023/07/Top-5-Tourist-Places-to-Visit-in-Telangana.jpg",
    alt: "Ramoji",
  },
  {
    src: "https://telanganatourism.gov.in/assets/css/sslider/data1/images/city/hussain-sagar.jpg",
    alt: "telengana",
  },
];
const Telangana = () => {
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
          title="Telangana"
          text="Telangana, a vibrant state in southern India, offers a rich blend of history, culture, and natural beauty. The capital city, Hyderabad, is renowned for its iconic landmarks such as the Charminar, Golconda Fort, and the historic Qutub Shahi Tombs. The state is also home to the stunning Ramappa Temple, a UNESCO World Heritage Site, known for its intricate architecture and historical significance. For nature lovers, the serene Pakhal Lake and the lush forests of Kawal Wildlife Sanctuary provide a tranquil escape. Telangana’s diverse cultural heritage is celebrated through its traditional festivals like Bonalu and Bathukamma, offering visitors a unique cultural experience. The state also boasts a vibrant cuisine, with Hyderabadi biryani being a must-try dish for food enthusiasts."
          icon="fa-regular fa-calendar-days"
          para="5 Days"
          icon1="fa-regular fa-clock"
          para1="120 hours"
        />
        <StickyForm
          title="Tirupati | Hyderabad - Shiridi - Ramoji - Srisailam - Bhadrachalam Popikondalu : Get 26% off!"
          originalPrice="INR 30,000"
          discountedPrice="INR 22,200"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Telangana;
