import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
const images = [
  {
    src: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/10/Arunachal-Pradesh-Tourism-Update.jpg",
    alt: "Arunachal",
  },

  {
    src: "https://www.marketexpress.in/wp-content/uploads/2021/08/arunachal-pradesh-tourism-marketexpress-in.jpg",
    alt: "Arunachal",
  },
  {
    src: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/10/Tawang-Arunachal-Pradesh.jpg",
    alt: "Arunachal",
  },
  {
    src: "https://naturalholidays.co.in/images/packages/bhutan.jpg",
    alt: "Arunachal",
  },
  {
    src: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/10/Ziro-Valley-Arunachal.jpg",
    alt: "Arunachal",
  },
  {
    src: "https://www.shutterstock.com/image-photo/tawang-arunachal-pradesh-india-buddhist-600nw-734071876.jpg",
    alt: "Arunachal",
  },
  {
    src: "https://st2.depositphotos.com/27951668/49352/i/450/depositphotos_493523522-stock-photo-buddhist-monastery-himalayan-mountain-foothills.jpg",
    alt: "Arunachal",
  },
  {
    src: "https://thumbs.dreamstime.com/b/buddist-temple-machuka-arunachal-pradesh-india-139166563.jpg",
    alt: "Arunachal",
  },
];
const Arunachal = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <ImageGallery images={images} />
      <div className="App">
        <States
          title="Arunachal Pradesh"
          text="Arunachal Pradesh, often referred to as the (Land of the Rising Sun), is a hidden gem in northeastern India. With its breathtaking landscapes, from lush green valleys and pristine lakes to majestic snow-capped mountains, it offers a haven for nature lovers and adventure seekers alike. The state is renowned for its rich cultural diversity, featuring vibrant tribal traditions and ancient monasteries. Key highlights include the serene Tawang Monastery, the picturesque Ziro Valley, and the tranquil beauty of the Mishmi Hills. Arunachal Pradesh invites travelers to experience its unique blend of natural beauty and cultural heritage, promising an unforgettable journey."
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Tawang | Ziro Valley - Itanagar - Tezu - Bhalukpong : Get 26% off!"
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
export default Arunachal;
