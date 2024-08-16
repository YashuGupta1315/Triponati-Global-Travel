import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";

const images = [
  {
    src: "https://etimg.etb2bimg.com/photo/89314482.cms",
    alt: "Amaravati, Guntur",
  },
  {
    src: "https://www.asparkholidays.com/uploads/36133_Char%20Minar%20Andhra%20Pradesh.jpg",
    alt: "Char Minar",
  },
  {
    src: "https://static.theprint.in/wp-content/uploads/2020/06/Tirupati-e1597050074221.jpg",
    alt: "Tirupati, Chittoor",
  },
  {
    src: "https://c4.wallpaperflare.com/wallpaper/464/1021/136/india-vijayawada-city-bridge-wallpaper-preview.jpg",
    alt: "Vijayawada-Krishna",
  },
  {
    src: "https://cdn.worldghoomo.com/wp-content/uploads/2012/07/Lepakshi-temple-photos.jpg",
    alt: "Lepakshi, Anantapur",
  },
  {
    src: "https://media.istockphoto.com/id/904650758/photo/vizag-andhra-pradesh.jpg?s=612x612&w=0&k=20&c=2oW-RXOS5A9Tl72YaSfQzsBv2yRfEv1pwShcvOHbmWI=",
    alt: "Visakhapatnam",
  },
  {
    src: "https://i.ytimg.com/vi/zrQobD5IDs4/maxresdefault.jpg",
    alt: "Kurnool",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Grand_Canon_of_India_%28Gandikota%29.jpg/2560px-Grand_Canon_of_India_%28Gandikota%29.jpg",
    alt: "Gandikota ",
  },
];
const Andra = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <ImageGallery images={images} />
      <div className="App">
        <States
          title="Andhra Pradesh"
          text="Andhra Pradesh, located in southeastern India, is known for its rich cultural heritage, historical landmarks, and natural beauty. The state boasts a diverse landscape ranging from scenic beaches along the Bay of Bengal to lush hills and valleys in the Eastern Ghats. Andhra Pradesh is renowned for its classical dance form, Kuchipudi, and its vibrant festivals. The city of Visakhapatnam, with its beautiful coastline, and the temple town of Tirupati, home to the famous Sri Venkateswara Temple, are among the state's major attractions"
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Hyderabad | Visakhapatnam - Puducherry - Tirupati - Vijayawada - Amaravati: Get 26% off!"
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
export default Andra;
