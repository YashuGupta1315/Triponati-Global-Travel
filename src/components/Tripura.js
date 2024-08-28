import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://assets.telegraphindia.com/telegraph/3d386800-1b9e-4dda-811c-d48f2085ab05.jpg",
    alt: "Agartla",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCIW4GEiw5pjJPkPSUcguSYmity5rtx9GRQ&s",
    alt: "Unakoti",
  },
  {
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/50/ba/30/neermahal-palace.jpg?w=500&h=-1&s=1",
    alt: "Dharmanagar",
  },
  {
    src: "https://enewstime.in/backOffice/NewsImages/7659.jpg",
    alt: "Udaipur",
  },
  {
    src: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/18/e6c14b7fb6b401cc140988e719f8aade_1000x1000.jpg",
    alt: "Kailashpur",
  },
  {
    src: "https://pbs.twimg.com/media/DpZYjPYW4AAcOIN.jpg:large",
    alt: "Ambassa",
  },
  {
    src: "https://im.hunt.in/cg/trip/About/Tourism/Kumarghat.JPG",
    alt: "Melaghar",
  },
  {
    src: "https://www.taleof2backpackers.com/wp-content/uploads/2019/12/Rajbari-in-Udaipur-Tripura.jpg",
    alt: "Tripura",
  },
];
const Tripura = () => {
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
          title="Tripura"
          text="Tripura, a small yet enchanting state in Northeast India, offers a rich tapestry of culture, history, and natural beauty. The capital city, Agartala, is home to the magnificent Ujjayanta Palace, a former royal residence now turned museum showcasing Tripura's heritage. The state is also known for its ancient temples, such as the Tripura Sundari Temple, one of the 51 Shakti Peethas, attracting pilgrims and tourists alike. Nature lovers can explore the scenic Neermahal Palace, a striking lake palace set amidst the Rudrasagar Lake, and the tranquil Sepahijala Wildlife Sanctuary, home to a variety of flora and fauna. Tripura's lush green landscapes, rolling hills, and serene lakes make it an ideal destination for those seeking peace and natural beauty. The state's vibrant festivals, like Kharchi Puja and Garia Puja, offer a glimpse into the local traditions and customs, making Tripura a unique and culturally rich destination."
          icon="fa-regular fa-calendar-days"
          para="5 Days"
          icon1="fa-regular fa-clock"
          para1="120 hours"
        />
        <StickyForm
          title="Agartla| Unakoti - Kailashpur - Dharmanagar - Melaghar - Ambassa : Get 26% off!"
          originalPrice="INR 30,000"
          discountedPrice="INR 22,200"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Tripura;
