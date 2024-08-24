import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://images.cnbctv18.com/wp-content/uploads/2022/08/Shimla-shutterstock-1019x573.jpg",
    alt: "Shimla",
  },
  {
    src: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/13/2a0b110e17feb7713f434720c118c79a_1000x1000.jpg",
    alt: "Manali",
  },
  {
    src: "https://www.tourmyindia.com/socialimg/solan-tourism-himachal.jpg",
    alt: "Solan",
  },
  {
    src: "https://content.r9cdn.net/rimg/dimg/05/9f/691e8f16-city-80331-172efbfe228.jpg?width=1366&height=768&xhint=3494&yhint=2447&crop=true", 
    alt: "Mandi",
  },
  {
    src: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/14/4a610dd23dc6a3949fde2d0cede89a83_1000x1000.jpg",
    alt: "Chamba",
  },
  {
    src: "https://static.toiimg.com/img/99653678/Master.jpg",
    alt: "Bilaspur",
  },
  {
    src: "https://i.ytimg.com/vi/Lr2Xur5I-NU/maxresdefault.jpg",
    alt: "Kinnaur",
  },
  {
    src: "https://himachal.nic.in/assets/img/pilgrimages/BHIMAKALI.jpg",
    alt: "Pilgrimage",
  },
];
const Himachal = () => {
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
          title="Himachal"
          text="Himachal Pradesh, often referred to as the Land of the Gods,is a picturesque state in northern India known for its stunning landscapes, snow-capped mountains, and serene valleys. It's a paradise for nature lovers, adventure enthusiasts, and spiritual seekers alike. The state offers a diverse range of experiences, from trekking in the Himalayas to exploring quaint hill stations like Shimla and Manali. Himachal is also home to rich cultural traditions, vibrant festivals, and ancient temples that add to its charm. Whether you're looking for adventure, peace, or spiritual rejuvenation, Himachal Pradesh has something for everyone."
          icon="fa-regular fa-calendar-days"
          para="15 Days"
          icon1="fa-regular fa-clock"
          para1="360 hours"
        />
        <StickyForm
          title="Shimla| Manali - Solan - Ambala - Mandi - Chamba - Bilaspur - Kinnaur: Get 26% off!"
          originalPrice="INR 60,000"
          discountedPrice="INR 44,600"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Himachal;
