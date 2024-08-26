import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.holidify.com/images/bgImages/WEST-BENGAL.jpg",
    alt: "Kolkata",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/01/39/96/bishnupur-tourist-lodge.jpg?w=700&h=-1&s=1",
    alt: "Digha",
  },
  {
    src: "https://static.toiimg.com/photo/62506786.cms",
    alt: "Darjeeling",
  },
  {
    src: "https://img.nayatrip.com/images/state/big/WEST-BENGAL.jpg",
    alt: "Dooars",
  },
  {
    src: "https://www.fabhotels.com/blog/wp-content/uploads/2019/10/West-Bengal-Tourism_600.jpg",
    alt: "Purulia",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Darjeelinghimalayanrailway.jpg",
    alt: "Bishnupur",
  },
  {
    src: "https://www.tripsavvy.com/thmb/wmlZzZAm34dzHdfB7Xmdm4aLA4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-538405559-30f17e164114422aab0b57359304f56d.jpg",
    alt: "Kalimpong",
  },
  {
    src: "https://media1.thrillophilia.com/filestore/d8q9x21w7anirxwnme1nnq3xavwy_Navadvipa.jpg",
    alt: "Sundarbans",
  },
];
const WestBengal = () => {
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
          title="West Bengal"
          text=""
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Kolkata | Darjeeling - Dooars - Digha - Dehradun - Purulia - Bishnupur - Kalimpong : Get 26% off!"
          originalPrice="INR 50,000"
          discountedPrice="INR 37,200"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default WestBengal;
