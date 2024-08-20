import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
const images = [
  {
    src: "https://haryanatourism.gov.in/WriteReadData/mediafiles/image/Kurukshetra_hub.jpg",
    alt: "Kurukshetra",
  },
  {
    src: "https://haryanatourism.gov.in/WriteReadData/mediafiles/image/Fatehabad_hub.jpg",
    alt: "Fatehabad",
  },
  {
    src: "https://haryanatourism.gov.in/WriteReadData/mediafiles/image/panipat_hub.jpg",
    alt: "Panipat",
  },
  {
    src: "https://haryanatourism.gov.in/WriteReadData/mediafiles/image/ambala_hub.jpg", 
    alt: "Ambala",
  },
  {
    src: "https://haryanatourism.gov.in/WriteReadData/mediafiles/image/hisar_hub.jpg",
    alt: "Hisar",
  },
  {
    src: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/06/03/Pictures/aerial-view-photo-gurugram-using-ht-drone_e7a3a5d6-66de-11e8-b4a9-2154dcd09999.jpg",
    alt: "Gurugram",
  },
  {
    src: "https://img.squareyards.com/secondaryPortal/638519103109180232-2105240545104510.jpg",
    alt: "Faridabad",
  },
  {
    src: "https://haryanatourism.gov.in/WriteReadData/mediafiles/image/rewari_hub.jpg",
    alt: "Rewari",
  },
];
const Haryana = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <ImageGallery images={images} />
      <div className="App">
        <States
          title="Haryana"
          text="Haryana, a vibrant state in northern India, offers a blend of historical richness, cultural heritage, and natural beauty. Known as the Land of Gods, Haryana is dotted with sacred sites like Kurukshetra, the legendary battlefield of the Mahabharata. The state also boasts architectural marvels such as the Sultanpur Bird Sanctuary, which attracts bird watchers from around the world, and the lively Surajkund Mela, a crafts fair that showcases India's diverse cultural tapestry. Haryana's proximity to Delhi makes it an accessible destination for those seeking a quick escape into history and nature."
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Kurukshetra | Fatehabad - Panipat - Ambala - Hisar - Gurugram - Faridabad: Get 26% off!"
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
export default Haryana;
