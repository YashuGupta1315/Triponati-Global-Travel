import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://www.nonebutall.com/wordpress/wp-content/uploads/2022/07/Lotus-Temple-New-Delhi.jpg",
    alt: "Lotus Temple",
  },

  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzxjq1-_NfNHMiEI9il5lFV88X3eLBd5e8w&s",
    alt: "Red Fort",
  },

  {
    src: "https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Qutub-Minar.jpg",
    alt: "India Gate",
  },

  {
    src: "https://media.assettype.com/outlooktraveller%2F2024-02%2F8594c101-1ab8-4950-9fdd-da2cadb0589b%2Fshutterstock_1222867963.jpg?w=480&auto=format%2Ccompress&fit=max",
    alt: "Chandni Chowk",
  },

  {
    src: "https://blog.thomascook.in/wp-content/uploads/2018/05/img-9-2-e1528721599722.jpg",
    alt: "Connaught Place" ,
  },

  {
    src: "https://content.r9cdn.net/rimg/dimg/89/80/30f91a95-city-32821-16374b316c6.jpg?width=1366&height=768&xhint=2922&yhint=2792&crop=true",
    alt: "Qutub Minar",
  },

  {
    src: "https://www.onemidtowndelhi.com/img/blogs/d9f5380f91_DilliHaat.jpg",
    alt: "Akshardham Mandir",
  },
  
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4c4d6QpTNyr2I72kp8v0Nw-X3Dfz1ZibXaPB4woiWaX-a8UbMBkZt7aKqM83csvU-3wQ&usqp=CAU",
    alt: "Hauz Khas",
  },
];
const Delhi = () => {
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
          title="Delhi"
          text="Delhi, the vibrant capital of India, is a city that seamlessly blends history with modernity, offering a rich tapestry of cultural experiences. Tourists can explore iconic landmarks like the majestic Red Fort, the awe-inspiring India Gate, and the historic Qutub Minar. The city is also home to the grand Jama Masjid and the serene Lotus Temple, showcasing its religious diversity. Delhi's bustling markets, such as Chandni Chowk and Connaught Place, offer a sensory overload of sights, sounds, and flavors, making it a paradise for food lovers and shopaholics alike. The city’s museums, gardens, and cultural festivals provide a deep dive into India's heritage, making Delhi a must-visit destination for any traveler."
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
export default Delhi;
