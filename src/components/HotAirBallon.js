import React from "react";
import ImageGallery from "./ImageGallery";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";
import AccordionAdv from "./AccordionAdv";
const images = [
    {
      src: "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2018/11/Balloon-Nepal.jpg",
      alt: "Hot Air Ballon",
    },
    {
        src: "https://www.travelingtoworld.com/wp-content/uploads/2016/02/hot-air-balloon-ride.jpg",
        alt: "Hot Air Ballon",
    },
    {
        src: "https://livingcph.dk/wp-content/uploads/2015/09/DSC_4183.jpg",
        alt: "Hot Air Ballon",
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCuTrbZ6Zkj-NoU3a-bdAVlFK9lEw5MWbQ4NVO3_xZPga2UJxKKC9lchdsFfZ-0TOd0I&usqp=CAU",
        alt: "Hot Air Ballon",
    },
      
];

const HotAirBallon = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <Navbar/>

            <ImageGallery images={images} />
            <AdventureDetail heading="Hot Air Ballon"
            para="The Balloon experience is much more than just a hot air balloon ride. Views of Mt. Annapurna & many more with the freshness of cold chill weather is something you will never forget.Pokhara is one of the most beautiful cities in Nepal with lakes, Mountains, and a peaceful environment. Explore the beauty of Pokhara and the stunning Himalayan rages from the Hot Air balloon. The balloon will fly appx 700m above Pokhara city which gives you magnificent views of the Annapurna ranges, Mt. Fishtail, Heuchuli, Lamjung Himal ranges, Dhaulagiri, and obviously the beautiful lake view of Pokhara. "
            main1="Free cancellation"
            Detail1="Cancel up to 24 hours in advance for a full refund"
            main2="Duration 3.5 hours"
            Detail2="Check availability to see starting times."
            main3="Driver"
            Detail3="English"
            main4="Pickup included"
            Detail4="Hotel pick-up in Pokhara (Lakeside area)"
            main5="Small group"
            Detail5="Limited to 9 participants"
            head="Highlights"
            li1="See the heart and soul of Pokhara from a thrilling hot air balloon ride"
            li2="Marvel at the spectacular views of the mountains as you glide through the skies"
            li3="Aerial Views of Nepal's Idyllic Countryside"
            li4="High safety standards with professional tandem instructors"
            li5="Enjoy excellent views of the Annapurna range, the Fishtail, Mountain Dhaulagiri, Mountain Hiunchuli, and Lamjung Himal with the freshness of cold chill weather is something you will never forget."
            li6="Get a glimpse of heaven as you fly high into the heavenly Nepal skies on a hot air balloon! "
            />
            <AccordionAdv title="Pickup service "
            content="Begin your journey with a convenient pickup service from your accommodation in the city taking you to the flight area for some safety briefing and instructions before your official hot air balloon experience. Witness spectacular panoramic views of Phewa lake as you ascend and glide through the air for 30-40 minutes."
            />
            <AccordionAdv title="Morning Shift Flight"
            content="5:45AM - 6:00AM Pick up from your Hotel => 25 to 30 Minute Drive to start point => 06:30 AM to 7:00 AM (Flight Starts: depend upon weather)."
             />
             <AccordionAdv title="Evening Shift Flight"
            content="03:45PM - 04:00 PM Pick up from your Hotel => 25 to 30 Minute Drive to start point. => 04:50 PM to 05:30 PM (Flight Starts: depend upon weather)."
             />
            
            
            <StickyForm 
                title="BOOK NOW !!!"
                originalPrice="INR 30,000"
               discountedPrice="INR 22,200"
               discountPercentage={26}
               saleType="FREEDOM SALE"
               onSubmit={handleSubmit}
            />

            <Footer/>
        </>
    );
}
export default HotAirBallon;