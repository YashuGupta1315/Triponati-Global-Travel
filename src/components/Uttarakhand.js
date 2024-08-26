import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://registrationandtouristcare.uk.gov.in/images/about-us.jpg",
    alt: "Rishikesh",
  },
  {
    src: "https://www.corbett-national-park.com/socialimg/uttarakhand-tourism.jpg",
    alt: "Nainital",
  },
  {
    src: "https://www.clubmahindra.com/blog/media/section_images/visit-in-u-b6fa5a61e8c38c7.jpg",
    alt: "Mussorie",
  },
  {
    src: "https://primarktravelhouse.com/images/domestic-tour-packages/uttarakahand/special-of-uttarakhand.jpg",
    alt: "Haridwar",
  },
  {
    src: "https://etimg.etb2bimg.com/photo/77994007.cms",
    alt: "Dehradun",
  },
  {
    src: "https://etimg.etb2bimg.com/photo/80626834.cms",
    alt: "Kedarnath",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacLglSGm-zIWCPemPi_QIqtS2OKHz2rYkOA&s",
    alt: "Badrinath",
  },
  {
    src: "https://www.prabhatkhabar.com/wp-content/uploads/2024/07/Alaknanda-River-Uttarakhand.jpg",
    alt: "Jim Corbatt National Park",
  },
];
const Uttarakhand = () => {
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
          title="Uttarakhand"
          text="Uttarakhand, often referred to as the Land of the Gods, is a stunning destination in northern India known for its majestic Himalayan landscapes, spiritual significance, and adventure opportunities. The state is home to sacred pilgrimage sites like Haridwar, Rishikesh, Kedarnath, and Badrinath, attracting millions of devotees each year. Uttarakhand also boasts breathtaking hill stations such as Mussoorie, Nainital, and Almora, offering serene getaways amidst lush greenery and tranquil lakes. Adventure enthusiasts can indulge in trekking, river rafting, and skiing in places like Auli and the Valley of Flowers. With its rich cultural heritage, diverse wildlife, and awe-inspiring natural beauty, Uttarakhand is a paradise for travelers seeking both peace and adventure."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Rishikesh | Nainital - Mussorie - Haridwar - Dehradun - Kedarnath - Badrinath - Jim Corbatt National Park : Get 26% off!"
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
export default Uttarakhand;
