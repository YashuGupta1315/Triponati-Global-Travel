import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.team-bhp.com/forum/attachments/travelogues/1055341d1691508887t-kaziranga-pride-assam-dsc02557.jpg",
    alt: "Kaziranga - National Park",
  },
  {
    src: "https://www.trawell.in/admin/images/upload/496646321Guwahati_Kamakhya_Temple_Main.jpg",
    alt: "Kamakhya Temple",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Umananda_Island%2C_Guwahati_%284%29.jpg/800px-Umananda_Island%2C_Guwahati_%284%29.jpg",
    alt: "Umananda Island",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Guwahati_Planetarium.jpg/800px-Guwahati_Planetarium.jpg?20160218172953",
    alt: "Guwahati Planetarium",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Siva_Dol.JPG/800px-Siva_Dol.JPG",
    alt: "Sivasagar",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A_view_of_Deepor_Beel_in_the_vicinity_of_AEC.jpg/800px-A_view_of_Deepor_Beel_in_the_vicinity_of_AEC.jpg",
    alt: "Deepor Beel",
  },
  {
    src: "https://static.javatpoint.com/top10-technologies/images/top-10-national-parks-in-india7.png",
    alt: "Orang National Park",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Su-Ka-Pha_Samannay_Khetra%2C_Jorhat%2C_Assam.jpg/800px-Su-Ka-Pha_Samannay_Khetra%2C_Jorhat%2C_Assam.jpg",
    alt: "Orang National Park",
  },
];
const Assam = () => {
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
          title="Assam"
          text="Assam, located in the northeastern region of India, is a state rich in natural beauty, cultural heritage, and biodiversity. Known for its sprawling tea gardens, Assam produces some of the finest tea in the world. The state is also home to the Kaziranga National Park, a UNESCO World Heritage site that shelters the endangered one-horned rhinoceros. Assam's vibrant festivals, such as Bihu, reflect its unique cultural tapestry, while the mighty Brahmaputra River adds to the state's scenic charm. From the ancient Kamakhya Temple to the lively wildlife sanctuaries, Assam offers a diverse and enriching travel experience."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Kaziranga - National Park | Guwahati Planetarium - Deepor Beel - Sivasagar - Kamakhya Temple - Umananda Island: Get 26% off!"
          originalPrice="INR 70,000"
          discountedPrice="INR 51,800"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Assam;
