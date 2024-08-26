import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://static.theprint.in/wp-content/uploads/2020/08/Untitled-design-2020-08-09T193331.340.jpg",
    alt: "Swaraj Dweep",
  },
  {
    src: "https://static.wanderon.in/wp-content/uploads/2023/07/top-min.jpg",
    alt: "Port Bliar",
  },
  {
    src: "https://ayushtoursandtravels.in/wp-content/uploads/2022/11/202664.jpg",
    alt: "Baratang",
  },
  {
    src: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/f3966004be85ac83b66b11a0213611aa_1000x1000.jpeg",
    alt: "Barren Island",
  },
  {
    src: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_43,w_800,h_450,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/symphony-samudra-beachside-jungle-resort-and-spa/Cellular_Jail",
    alt: "Little Andaman",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZWybdYqnIIFR4QPWxqHRuA5xhDExf6jRKA&s",
    alt: "Diglipur",
  },
  {
    src: "https://travelbizmonitor.com/wp-content/uploads/2023/12/5e2ea443865a1-Island_Tourism_Festival_Attractions.jpg",
    alt: "Rangat",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDqYCI-YXErtBEAA5DxAwVnqe4mSAmyADSg&s",
    alt: "Mayabunder",
  },
];
const AndamanandNicobar = () => {
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
          title="Andaman and Nicobar Island"
          text="The Andaman and Nicobar Islands offer a tropical paradise with pristine beaches, crystal-clear waters, and vibrant marine life. Located in the Bay of Bengal, these islands are famous for their stunning natural beauty and diverse ecosystems. Popular spots include Havelock Island, renowned for its white sandy beaches and excellent snorkeling opportunities, and Neil Island, known for its serene environment and picturesque sunsets. Visitors can explore the historic Cellular Jail in Port Blair, indulge in water sports, or take a boat ride to the stunning Ross Island. The Andamans also offer lush forests and unique wildlife, making it a perfect destination for nature lovers and adventure seekers alike."
          icon="fa-regular fa-calendar-days"
          para="5 Days"
          icon1="fa-regular fa-clock"
          para1="120 hours"
        />
        <StickyForm
          title="Swaraj Dweep | Port Bliar - Baratang - Little Andaman - Diglipur - Bishnupur -Mayabunder : Get 26% off!"
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
export default AndamanandNicobar;
