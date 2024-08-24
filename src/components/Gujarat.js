import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/ahmedabad/banner-images/sabarmati-riverfront2.jpg",
    alt: "Ahmedabad",
  },
  {
    src: "https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/kutch/attractions/utsav/White%20Rann%20(1).jpg",
    alt: " Kutch ",
  },
  {
    src: "https://www.shutterstock.com/image-photo/he-dwarkadhish-temple-known-jagat-600nw-2379412501.jpg",
    alt: " Dwarka ",
  },
  {
    src: "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/SOU.jpg",
    alt: " Statue of Unity ",
  },
  {
    src: "https://www.gujarattourism.com/content/dam/gujrattourism/images/gandhi-circuit/kochrab-ashram/gallery/kochrab-ashram1.jpg",
    alt: " Gandhi Circuit ",
  },
  {
    src: "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/sun-temple/gallery/Sun%20Temple0.jpg",
    alt: " Sun Temple ",
  },
  {
    src: "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/somnath-temple/gallery/Somnath-Temple-(1).jpg",
    alt: " Somnath Temple ",
  },
  {
    src: "https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/dang/attractions/ecotourism/saputara/saputara-to-don-hill-station/Saputara%20to%20Don%20Hill%20station1.jpg",
    alt: " Saputara ",
  },
];
const Gujarat = () => {
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
          title="Gujarat"
          text="Gujarat, a vibrant state in western India, is a treasure trove of cultural, historical, and natural wonders. Known for its rich heritage, Gujarat is home to the ancient city of Lothal, one of the oldest known sites of the Indus Valley Civilization. The state boasts stunning architectural marvels like the Sun Temple at Modhera and the Rani ki Vav stepwell. Gujarat’s diverse landscapes range from the white salt flats of the Rann of Kutch to the lush Gir Forest, the only natural habitat of the Asiatic lion. The state's vibrant festivals, such as Navratri, attract visitors with their colorful garba dances and lively celebrations. Additionally, Gujarat’s cuisine, known for its flavorsome vegetarian dishes, adds to the state's allure, making it a must-visit destination for travelers."
          icon="fa-regular fa-calendar-days"
          para="15 Days"
          icon1="fa-regular fa-clock"
          para1="360 hours"
        />
        <StickyForm
          title="Raipur| Achanakmar Tiger Reserve - Ratanpur - Chitrakote - MadkuDweep - Barnawapara: Get 26% off!"
          originalPrice="INR 1,00,000"
          discountedPrice="INR 74,000"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Gujarat;
