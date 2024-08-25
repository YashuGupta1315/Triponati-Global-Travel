import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://travelbizmonitor.com/wp-content/uploads/2023/09/chittorgarh-960x530-1.jpg",
    alt: "Chittorgarh",
  },
  {
    src: "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/menu/8.jpg",
    alt: "Jaipur",
  },
  {
    src: "https://etimg.etb2bimg.com/photo/94677797.cms",
    alt: "Udaipur",
  },
  {
    src: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/02/Hawa-Mahal_24th-oct.jpg",
    alt: "Jodhpur",
  },
  {
    src: "https://www.traveltrendstoday.in/wp-content/uploads/2022/10/09d7584cad6726ef025d855c4175d7be.jpg",
    alt: "Jaisalmer",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesVLTL72zIAXi4RkOkI0DWMlOP2QulVxvCA&s",
    alt: "Bikaner",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotCPXNHIHeOKQzXvZuwoZLIkFDTQdp8wn5w&s",
    alt: "Pushkar",
  },
  {
    src: "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/menu/29_new.jpg",
    alt: "Ranthambore National Park",
  },
];
const Rajasthan = () => {
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
          title="Rajasthan"
          text="Rajasthan, often referred to as the Land of Kings, is a mesmerizing state in India known for its royal heritage, vibrant culture, and stunning architecture. The state is home to majestic forts, grand palaces, and sprawling deserts that tell tales of a glorious past. Cities like Jaipur, Udaipur, Jodhpur, and Jaisalmer are popular destinations, offering visitors a chance to explore the rich history and tradition of Rajasthan. The amber-hued sands of the Thar Desert provide an enchanting backdrop for camel safaris and desert camping. Rajasthan’s colorful festivals, like the Pushkar Camel Fair and Diwali, add to its allure, showcasing the lively spirit and deep-rooted customs of its people. The state's cuisine, with its rich flavors and aromatic spices, offers a culinary journey like no other. Whether it's the opulent palaces, the serene lakes of Udaipur, or the vibrant bazaars filled with handicrafts, Rajasthan promises an unforgettable experience steeped in history and culture."
          icon="fa-regular fa-calendar-days"
          para="8 Days"
          icon1="fa-regular fa-clock"
          para1="192 hours"
        />
        <StickyForm
          title="Jaipur | Udaipur - Jodhpur - Pushkar - Bikaner - Jaisalmer : Get 26% off!"
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
export default Rajasthan;
