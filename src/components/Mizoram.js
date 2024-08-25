import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.mizoramtourism.com/post_images/627dec7751861_Serlui%20B%20Lodge.jpg",
    alt: "Khawzawl",
  },
  {
    src: "https://www.mizoramtourism.com/post_images/626a2a886ad50_IMG_1023.jpg",
    alt: "Aizawl",
  },
  {
    src: "https://www.mizoramtourism.com/post_images/626b9daddd360_Kawtchhuah%20Ropui%201.jpg",
    alt: "Lungloi",
  },
  {
    src: "https://www.purvidiscovery.com/blog-img/best-places-to-visit-in-mizoram.jpg",
    alt: "Champai",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMIcsuNXTL6d9dNExFtq60jn2GZYZ6Blu3w&s",
    alt: "Siaha",
  },
  {
    src: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/12/07115226/champhai-1.jpg",
    alt: "Kolasib",
  },
  {
    src: "https://pbs.twimg.com/media/Ed_OjxoX0AEiMHq.jpg",
    alt: "Lawngtlai",
  },
  {
    src: "https://assets.zeezest.com/blogs/PROD_ZZ%20SEO%20Image%20Resizing%20%2835%29_1680624170958.png",
    alt: "Hnahthial",
  },
];
const Mizoram = () => {
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
          title="Mizoram"
          text="Mizoram, nestled in the northeastern region of India, is a captivating destination known for its scenic beauty and rich cultural heritage. The state is renowned for its lush green hills, vibrant tribal cultures, and serene landscapes. Visitors can explore the picturesque town of Aizawl, the state's capital, which offers stunning views of the surrounding hills and valleys. Mizoram is also home to several beautiful lakes, including the serene Blue Lake and the enchanting Palak Lake, perfect for nature enthusiasts. The state's unique festivals, such as the Chapchar Kut and Bamboo Dance, provide an immersive experience into local traditions and customs. For adventure seekers, Mizoram's diverse terrain offers opportunities for trekking and exploring its pristine natural surroundings."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Khawzawl | Aizawl - Lungloi - Champai - Siaha - Kolasib - Lawngtlai - Hnahthial: Get 26% off!"
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
export default Mizoram;
