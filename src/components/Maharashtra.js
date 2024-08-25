import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://static.toiimg.com/photo/64028431.cms",
    alt: "Gateway Of India",
  },
  {
    src: "https://www.tripsavvy.com/thmb/SiovykEVKvPj7ii-ist9A_dHIzc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AjantaCaves-India-AnnaHaines122-46f7e10e05ac4e638c32618a4bf623af.jpg",
    alt: "Ajanta Caves",
  },
  {
    src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/mahabaleshwar-maharashtra.jpg",
    alt: "Mahabaleshwar",
  },
  {
    src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/nashik-maharashtra.jpg",
    alt: "Nashik",
  },
  {
    src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/matheran-maharashtra.jpg",
    alt: "Matheran",
  },
  {
    src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/ratnagiri-maharashtra.jpg",
    alt: "Sailani Island",
  },
  {
    src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/kolhapur-maharashtra.jpg",
    alt: "Kolhapur",
  },
  {
    src: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/aurangabad-maharashtra.jpg",
    alt: "Aurangabad",
  },
];
const Maharashtra = () => {
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
          title="Maharashtra"
          text="Maharashtra is one of India's most vibrant and diverse states, offering a rich tapestry of cultural heritage, natural beauty, and urban experiences. Home to the bustling metropolis of Mumbai, Maharashtra also boasts stunning landscapes, including the serene Western Ghats, pristine beaches along the Konkan coast, and historic sites like the Ajanta and Ellora Caves, which are UNESCO World Heritage Sites. The state is also famous for its religious sites such as the Shirdi Sai Baba Temple, Siddhivinayak Temple, and the vibrant festivals like Ganesh Chaturthi, which is celebrated with immense zeal. From the hill stations of Lonavala and Mahabaleshwar to the wildlife sanctuaries of Tadoba and Pench, Maharashtra has something to offer for every type of traveler."
          icon="fa-regular fa-calendar-days"
          para="15 Days"
          icon1="fa-regular fa-clock"
          para1="360 hours"
        />
        <StickyForm
          title="Bhopal | Satpura - Jabalpur - Bhedaghat - Pristine Tamia - Panchmarhi: Get 26% off!"
          originalPrice="INR 1,50,000"
          discountedPrice="INR 1,10,000"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Maharashtra;
