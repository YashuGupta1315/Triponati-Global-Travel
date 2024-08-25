import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.sikkimtourismindia.com/blog/wp-content/uploads/2017/08/Sarwa-Dharma-Sthal%E2%80%99.jpg",
    alt: "Gangtok",
  },
  {
    src: "https://toim.b-cdn.net/pictures/travel_guide/thmb/sikkim-714.jpeg",
    alt: "Pelling",
  },
  {
    src: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/11/Best-Places-to-Visit-in-North-Sikkim-Gurudongmar-Lake-Tourism.jpg",
    alt: "Yumthang",
  },
  {
    src: "https://sikkimtourism.gov.in/Content/Pics/travellerEssentials/Tourismcalendar/calendarImage2.jpg",
    alt: "Lachung",
  },
  {
    src: "https://thumbs.dreamstime.com/b/sikkim-image-pelling-skywalk-chenrezig-avalokiteshvara-statue-west-famous-tourism-destination-known-as-222504449.jpg",
    alt: "Lachen",
  },
  {
    src: "https://hikerwolf.com/wp-content/uploads/2020/04/sikkim-tourist-places-1280x800.jpg",
    alt: "Yuksom",
  },
  {
    src: "https://www.globaltourismindia.com/states/sikkim/images/west_sikkim_tourism.jpg",
    alt: "Namahi",
  },
  {
    src: "https://www.naturewings.com/images/west-sikkim/slider/Kechopalri-Lake-Pelling.JPG",
    alt: "Ravangla",
  },
];
const Sikkim = () => {
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
          title="Sikkim"
          text="Sikkim, nestled in the eastern Himalayas, is a paradise for nature lovers and adventure enthusiasts alike. This small but stunning state in India is known for its breathtaking landscapes, which include snow-capped mountains, lush valleys, and vibrant rhododendron forests. The capital city, Gangtok, offers a perfect blend of modern amenities and traditional charm, with attractions like the Enchey Monastery and the bustling MG Road. Sikkim is also home to the majestic Kanchenjunga, the third-highest mountain in the world, providing awe-inspiring trekking opportunities. The state's serene monasteries, including Rumtek and Pemayangtse, offer a glimpse into its rich Buddhist culture. Whether you're exploring the tranquil Tsomgo Lake, soaking in the hot springs of Yumthang Valley, or experiencing the unique culture of the Lepcha, Bhutia, and Nepali communities, Sikkim promises an unforgettable journey into nature's lap."
          icon="fa-regular fa-calendar-days"
          para="8 Days"
          icon1="fa-regular fa-clock"
          para1="192 hours"
        />
        <StickyForm
          title="Gangtok | Pelling - Yumthang - Lachung- Lachen - Namahi - Ravangla : Get 26% off!"
          originalPrice="INR 50,000"
          discountedPrice="INR 37,000"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Sikkim;
