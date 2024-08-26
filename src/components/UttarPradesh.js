import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.ibef.org/assets/images/Uttar-Pradesh-tajmahal.jpg",
    alt: "Lucknow",
  },
  {
    src: "https://www.tourmyindia.com/blog//wp-content/uploads/2022/05/Best-Places-to-Visit-in-Uttar-Pradesh.jpg",
    alt: "Ayodhya",
  },
  {
    src: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/38af61f28e242eb8cf5e0ad92cef18c4_1000x1000.jpg",
    alt: "Varanasi",
  },
  {
    src: "https://qph.cf2.quoracdn.net/main-qimg-25ed0ed89d54e34f327c5278575d0da5-lq",
    alt: "Mathura",
  },
  {
    src: "https://uttarpradeshtouristattractions.wordpress.com/wp-content/uploads/2013/03/uttar-pradesh-tourist-attractions-2-clock-tower-at-har-ki-pauri-haridwar.jpg",
    alt: "Vrindavan",
  },
  {
    src: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/24133338/Uttar-Pradesh8.png",
    alt: "Prayagraj",
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:1400/0*M2eArJbhOaWpLeNR.jpg",
    alt: "Agra",
  },
  {
    src: "https://images.nativeplanet.com/fit-in/600x338/img/2020/07/varanasi-1595239223.jpg",
    alt: "Fatehpur Sikri",
  },
];
const UttarPradesh = () => {
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
          title="Uttar Pradesh"
          text="Uttar Pradesh, often called the heartland of India, is a state rich in history, culture, and spirituality. It is home to some of the country’s most iconic landmarks, including the magnificent Taj Mahal in Agra, a UNESCO World Heritage Site and one of the Seven Wonders of the World. The state boasts a diverse range of attractions, from the holy city of Varanasi, where pilgrims come to bathe in the sacred waters of the Ganges, to the vibrant city of Lucknow, known for its Nawabi culture, delicious cuisine, and exquisite Mughal architecture. Uttar Pradesh is also steeped in spiritual significance, being the birthplace of Lord Krishna in Mathura and the setting of the Ramayana epic in Ayodhya. The state is a treasure trove for history buffs, with ancient cities like Prayagraj (Allahabad), where the Kumbh Mela, the world’s largest religious gathering, takes place.
          From the bustling bazaars and historic forts to the serene ghats and wildlife sanctuaries, Uttar Pradesh offers a unique blend of experiences that cater to all types of travelers."
          icon="fa-regular fa-calendar-days"
          para="10 Days"
          icon1="fa-regular fa-clock"
          para1="240 hours"
        />
        <StickyForm
          title="Lucknow | Ayodhya - Varanasi - Mathura - Vrindavan - Prayagraj - Agra - Fatehpur Sikri : Get 26% off!"
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
export default UttarPradesh;
