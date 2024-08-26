import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8c_HfaLzboSe0xjjDzNPSfIgQ9G_9tzdwoA&s",
    alt: "Minicoy Island",
  },

  {
    src: "https://www.informalnewz.com/wp-content/uploads/2024/01/Lakshadweep-Tour-Packages-1200x808.jpg",
    alt: "Agatti Island",
  },

  {
    src: "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1701412412/bbj/afwnhzo9gur2tqel9cjc.jpg",
    alt: "Kadmat Island",
  },

  {
    src: "https://images.timesproperty.com/blog/6485/lakshwadeep.jpg",
    alt: "Kavaratti",
  },

  {
    src: "https://images.squarespace-cdn.com/content/v1/6202004c3c7aae13f71fcc18/1984e983-966e-4766-b250-0da135472c37/pamban-bridge-rameshwaram+island.jpg",
    alt: "Minicoy",
  },

  {
    src: "https://www.sotc.in/blog/wp-content/uploads/2024/02/Scuba-Diving-in-Lakshadweep-2.jpg",
    alt: "Amini",
  },

  {
    src: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/659cf23447ea6-lakshadweep-091354699-16x9.png?size=948:533",
    alt: "Lakshadweep",
  },
  
  {
    src: "https://i0.wp.com/travelspan.in/wp-content/uploads/2024/01/image-4-1.png?fit=696%2C490&ssl=1",
    alt: "Lakshadweep",
  },
];
const Lakshadweep = () => {
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
          title="Lakshadweep"
          text="Lakshadweep, a group of picturesque islands in the Arabian Sea, is a tropical paradise known for its stunning coral reefs, crystal-clear waters, and pristine beaches. As one of India's smallest Union Territories, Lakshadweep offers an idyllic escape for nature lovers and adventure enthusiasts. The islands are perfect for snorkeling, scuba diving, and other water sports, allowing visitors to explore vibrant marine life and breathtaking underwater landscapes. The tranquil environment, combined with the unique culture of the local communities, makes Lakshadweep a serene and captivating destination for those seeking relaxation and natural beauty."
          icon="fa-regular fa-calendar-days"
          para="5 Days"
          icon1="fa-regular fa-clock"
          para1="120 hours"
        />
        <StickyForm
          title="Minicoy Island | Agatti Island - Kavaratti - Minicoy - Amini   : Get 26% off!"
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
export default Lakshadweep;
