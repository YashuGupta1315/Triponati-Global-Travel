import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.fabhotels.com/blog/wp-content/uploads/2019/09/coimbatore-tamil-nadu.jpg",
    alt: "Coimbatore",
  },
  {
    src: "https://www.tourmyindia.com/states/tamilnadu/image/tamilnadu-banner.webp",
    alt: "Chennai",
  },
  {
    src: "https://static.toiimg.com/photo/85943541.cms",
    alt: "Ooty",
  },
  {
    src: "https://www.holidify.com/images/bgImages/TAMIL-NADU.jpg",
    alt: "Madhurai",
  },
  {
    src: "https://www.tamilnadutourism.com/images/tour-packages/card/kodaikanal-trip.jpg",
    alt: "Kanniyakumari",
  },
  {
    src: "https://www.mhmtravels.com/uploads/0000/1/2021/10/16/tamilnadu2.jpg",
    alt: "KodaiKanol",
  },
  {
    src: "https://www.incredible-southindia.com/images/tamil-nadu/tourists-places-tamilnadu.jpg",
    alt: "Mahabalipuram",
  },
  {
    src: "https://content.jdmagicbox.com/comp/madurai/63/0452p452std1900063/catalogue/tamilnadu-tourism-development-corporation-ltd-madurai-west-madurai-tourist-information-centres-ei5b11.jpg",
    alt: "Rameswaram",
  },
];
const TamilNadu = () => {
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
          title="Tamil Nadu"
          text="Tamil Nadu, located in the southern part of India, is a vibrant state rich in culture, history, and natural beauty. It is renowned for its magnificent temples, each a masterpiece of Dravidian architecture, with intricate carvings and towering gopurams. The state is home to UNESCO World Heritage Sites like the Great Living Chola Temples and the Group of Monuments at Mahabalipuram. Tamil Nadu also boasts beautiful hill stations like Ooty and Kodaikanal, offering cool retreats with lush greenery and serene lakes. The coastal city of Chennai is a gateway to exploring the state's beaches, including Marina Beach, one of the longest urban beaches in the world. Tamil Nadu's diverse landscapes, rich traditions, classical music, and dance forms like Bharatanatyam make it a compelling destination for travelers seeking a blend of heritage, nature, and spirituality."
          icon="fa-regular fa-calendar-days"
          para="8 Days"
          icon1="fa-regular fa-clock"
          para1="192 hours"
        />
        <StickyForm
          title="Chennai | Rameswaram - Coimbatore - Ooty - Madhurai - Kanniyakumari - KodaiKanol : Get 26% off!"
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
export default TamilNadu;
