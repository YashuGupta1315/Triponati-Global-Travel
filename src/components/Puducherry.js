import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://pondicherrytourism.co.in/images/places-to-visit/header/chunnambar-boat-house-parking-puducherry-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    alt: "Veerampathiam",
  },

  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/03/23/02/varadaraja-temple-pondi.jpg?w=500&h=-1&s=1",
    alt: "Karaikal",
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjCioM79bssBJJkTza4SrO37K0vCbFvhPDA&s",
    alt: "Mahe",
  },

  {
    src: "https://hikerwolf.com/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-31-at-3.18.20-PM-1.jpeg",
    alt: "Thirunakar",
  },

  {
    src: "https://media.assettype.com/outlooktraveller%2F2023-08%2F62a1ee03-2b9a-41ad-98b5-d6d8010ad52f%2Fshutterstock_1967101996.jpg",
    alt: "Villianur",
  },

  {
    src: "https://www.southtourism.in/assets/images/cityinfo/Pondicherry2.png",
    alt: "AriyanKuppam",
  },

  {
    src: "https://destinationreporterindia.com/wp-content/uploads/2018/04/Pondicherry4.jpg",
    alt: "AriyanKuppam",
  },
  
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozCWQ33n0DNWRG68iXCuC4ODdhpEiv2eD0A&s",
    alt: "AriyanKuppam",
  },
];
const Puducherry = () => {
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
          title="Puducherry"
          text="Puducherry, often referred to as the French Riviera of the East, is a charming coastal destination in South India. Known for its unique blend of French colonial architecture and Indian culture, Puducherry offers a tranquil escape with its serene beaches, tree-lined streets, and vibrant cafes. The Union Territory's French Quarter, with its pastel-colored villas and cozy cafes, transports visitors to a bygone era. The Promenade Beach is a popular spot for leisurely walks, while Auroville, an international community dedicated to peace and sustainable living, attracts those seeking spiritual enrichment. Puducherry's diverse cuisine, offering a mix of French and South Indian flavors, adds to its allure as a must-visit destination."
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
export default Puducherry;
