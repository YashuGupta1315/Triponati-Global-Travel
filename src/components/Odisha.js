import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.orissatourism.org/helpers/images/bg3.jpg",
    alt: "Bhubaneswar",
  },
  {
    src: "https://2.bp.blogspot.com/-_W2yUVgB3ok/WzfSeW2fRxI/AAAAAAAAITI/bvc6JGsQAXMPtUypeBVmI8UtWJCEnfg6gCLcBGAs/s1600/Sand%2Bart%2BOdisha%2BSudarshan%2Bpatnaik.jpg",
    alt: "Puri",
  },
  {
    src: "https://alternativetoursindia.com/wp-content/uploads/2018/10/tourist-places-in-odisha.jpg",
    alt: "Chilka Lake",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/C511BAQHv39fD7kLptQ/company-background_10000/company-background_10000/0/1584302926663/odisha_tourism_cover?e=2147483647&v=beta&t=NVHWAvfI6_VKcoHzUiRLi9lLMD9J7BXHcusJ7BEonb8",
    alt: "Konark",
  },
  {
    src: "https://content.jdmagicbox.com/comp/bhubaneshwar/r9/0674px674.x674.120428140708.d6r9/catalogue/odisha-tourism-lewis-road-bhubaneshwar-government-organisations-crj3ottoyh.jpg",
    alt: "Similipal National Park ",
  },
  {
    src: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/12/Duduma-waterfalls2.jpg?tr=w-400",
    alt: "Cuttack",
  },
  {
    src: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180803145213/Jagannath-Puri-Rath-Yatra-Orissa.jpg",
    alt: "Sambalpur",
  },
  {
    src: "https://curlytales.com/wp-content/uploads/2015/01/Puri-Sea-Beach.jpg",
    alt: "Golden Beach",
  },
];
const Odisha = () => {
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
          title="Odisha"
          text="Odisha, located on the eastern coast of India, is a treasure trove of natural beauty, rich history, and vibrant culture. Known for its stunning temples, the state is home to the world-famous Konark Sun Temple, a UNESCO World Heritage Site, and the majestic Jagannath Temple in Puri, a key pilgrimage site. Odisha's coastline boasts some of the most pristine beaches, including Puri Beach and Chandrabhaga Beach, perfect for a relaxing getaway.
          The state's diverse wildlife sanctuaries, such as Simlipal National Park and Chilika Lake, Asia's largest brackish water lagoon, offer a haven for nature lovers and bird watchers. Odisha also hosts a variety of traditional festivals like the Rath Yatra, which attracts visitors from all over the world. The state's rich tribal heritage, reflected in its art, craft, and dance forms, adds to its unique charm, making Odisha a must-visit destination for those seeking a blend of culture, history, and natural beauty."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Bhubaneswar | Puri - Chilka Lake - Konark - Similipal National Park - Cuttack - Sambalpur : Get 26% off!"
          originalPrice="INR 45,000"
          discountedPrice="INR 33,300"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Odisha;
