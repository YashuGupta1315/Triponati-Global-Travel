import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://tourism.nagaland.gov.in/wp-content/uploads/2022/06/doyang-960x600-1.jpg",
    alt: "Kohima",
  },
  {
    src: "https://clubmahindra.gumlet.io/blog/images/Kohima-resized.jpg?w=376&dpr=2.6",
    alt: "Dimapur",
  },
  {
    src: "https://www.seaburyholidays.com/blog/image/uploads/2016/09/nagaland2014-07-16at091340_zps76245f75.jpgoriginal.jpg",
    alt: "Khonoma",
  },
  {
    src: "https://www.adventure.tourism.gov.in/images/state/Nagaland/Wokha.jpg",
    alt: "Mokokchung",
  },
  {
    src: "https://im.hunt.in/cg/nag/About/Tourism/greenv.jpg",
    alt: "Ntanki National Park",
  },
  {
    src: "https://im.hunt.in/cg/nag/About/Tourism/ruins.jpg",
    alt: "Wokha",
  },
  {
    src: "https://morungexpress.com/sites/default/files/field/image/002491e7-0324-406f-96e6-c9e46b952071.JPG",
    alt: "Mon Village",
  },
  {
    src: "https://morungexpress.com/uploads/2023/04/44567313_1682008316_Ft5PTNXWcAI5Ibh.jpg",
    alt: "Tuensang",
  },
];
const Nagaland = () => {
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
          title="Nagaland"
          text="Nagaland, a vibrant state in northeastern India, is a land of mystique and cultural richness. Known for its diverse tribal communities, each with its unique traditions, festivals, and languages, Nagaland offers a deep dive into the heritage of the region. The state's capital, Kohima, is a gateway to history with landmarks like the War Cemetery and the State Museum, which chronicles Nagaland's past and tribal culture. One of the most famous events in the state is the Hornbill Festival, held annually in December, showcasing the colorful dances, music, and crafts of the Naga tribes. The picturesque landscapes of Nagaland, with its rolling hills, dense forests, and serene villages like Khonoma, provide a perfect setting for trekking, wildlife exploration, and nature walks. Nagaland's warm hospitality, coupled with its rich culture and breathtaking scenery, makes it a unique and memorable travel destination."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Kohima | Dimapur - Khonoma - Mokokchung - Ntanki National Park - Wokha - Mon Village : Get 26% off!"
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
export default Nagaland;
