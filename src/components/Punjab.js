import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://punjabtourism.punjab.gov.in/destination/destibnation-amritsar-3.jpg",
    alt: "Amritsar",
  },
  {
    src: "https://punjabtourism.punjab.gov.in/destination/destibnation-gurdaspur-3.jpg",
    alt: "Gurdaspur",
  },
  {
    src: "https://punjabtourism.punjab.gov.in/destination/destibnation-bathinda-2.jpg",
    alt: "Bathinda",
  },
  {
    src: "https://punjabtourism.punjab.gov.in/destination/destibnation-ludhiana-6.jpg",
    alt: "Ludhiana",
  },
  {
    src: "https://punjabtourism.punjab.gov.in/destination/destibnation-patiala-1.jpg",
    alt: "Patiala",
  },
  {
    src: "https://punjabtourism.punjab.gov.in/destination/destibnation-sas-nagar-3.jpg",
    alt: "SAS - Nagar",
  },
  {
    src: "https://punjabtourism.punjab.gov.in/destination/destibnation-anandpur-3.jpg",
    alt: "Anandpur",
  },
  {
    src: "https://dynamic.tourtravelworld.com/blog_images/mohali-20170314115854.jpg",
    alt: "Pathankot",
  },
];
const Punjab = () => {
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
          title="Punjab"
          text="Punjab, known as the Land of Five Rivers, is a vibrant state in northern India, rich in history, culture, and tradition. The state is famous for its lively festivals, delicious cuisine, and warm hospitality. Amritsar, home to the iconic Golden Temple, is a major pilgrimage site and a must-visit for anyone exploring Punjab. The city also offers the poignant Jallianwala Bagh and the vibrant Wagah Border ceremony. Punjab's rural heartland is dotted with charming villages where visitors can experience traditional Punjabi life, including farming, folk music, and dance. The state is also known for its historical sites, such as the majestic forts of Patiala and Bathinda, as well as the serene Ropar Wetlands, perfect for nature enthusiasts. With its blend of spirituality, history, and culture, Punjab offers a truly enriching travel experience."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Amritsar | Patiala - Gurdaspur - Ludhiana - Anandpur - Pathankot : Get 26% off!"
          originalPrice="INR 35,000"
          discountedPrice="INR 25,900"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Punjab;
