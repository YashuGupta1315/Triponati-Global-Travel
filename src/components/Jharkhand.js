import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20220727_165327.jpg",
    alt: "",
  },
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20220727_170840.jpg",
    alt: "Deori Mandir",
  },
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20220727_171113.jpg",
    alt: "Hirni Falls",
  },
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20220727_172756.jpg", 
    alt: "Bada Talab Ranchi ",
  },
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20220805_150325.jpg",
    alt: "Pahari",
  },
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20220805_142215.jpg",
    alt: "Ghatshila",
  },
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20180507_125100.jpg",
    alt: "Chandil Dam",
  },
  {
    src: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/gallery/Gallery20171104_100818.jpeg",
    alt: "Luguburu Tenughat",
  },
];
const Jharkhand = () => {
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
          title="Jharkhand"
          text="Jharkhand, known as The Land of Forests, offers a unique blend of natural beauty, rich cultural heritage, and adventure tourism. This eastern Indian state is home to lush green forests, scenic waterfalls, and diverse wildlife, making it a haven for nature lovers. Key attractions include the serene Ranchi Hill, the magnificent Hundru Falls, the sacred Parasnath Hill, and the Betla National Park, where you can spot elephants and tigers in their natural habitat. Jharkhand also has a vibrant tribal culture, with traditional festivals, dances, and crafts that provide a glimpse into the region's rich cultural tapestry. Whether you're seeking tranquility, adventure, or cultural experiences, Jharkhand has something to offer every traveler."
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Ranchi | Deori Mandir - Chandil Dam - Ghatshila - Hirni Falls - Pahari - Bilaspur - Luguburu Tenughat: Get 26% off!"
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
export default Jharkhand;
