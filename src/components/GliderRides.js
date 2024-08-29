import React from "react";
import ImageGallery from "./ImageGallery";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";
import AccordionAdv from "./AccordionAdv";
const images = [
    {
      src: "https://cdn.getyourguide.com/img/tour/08712ea5b6fd0dfa0360f027a75533e61d6edbc5b370efc505f1d1733c459e1e.jpg/146.jpg",
      alt: "Glider Rides",
    },
    {
        src: "https://hikeontreks.com/wp-content/uploads/2021/04/ultra-flight-pokhara.jpg",
        alt: "Glider Rides",
    },
    {
        src: "https://veronikasadventure.com/wp-content/uploads/2024/01/4_explore-pokhara-and-mountains-from-glider.jpg",
        alt: "Glider Rides",
    },
    {
        src: "https://imgcld.yatra.com/ytimages/image/upload/v1517482864/AdvNation/ANN_TRP200/ann_banner_1_trp200_oskDdq.jpg",
        alt: "Glider Rides",
    },
      
];

const SkyDiving = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <Navbar/>

            <ImageGallery images={images} />
            <AdventureDetail heading="Glider Rides"
            para="Prepare for an exhilarating journey into the skies above Pokhara with our Ultralight Glider Flight Experience. From the moment of takeoff to the gentle landing, our experienced pilots will guide you through the skies, offering unparalleled views and unmatched thrills.As you soar above the picturesque landscapes of Pokhara, including the shimmering waters of Phewa Lake and the snow-capped peaks of the Annapurna Range, you'll witness the region's beauty from a perspective few have the opportunity to experience. Our skilled pilots ensure your safety while providing insightful commentary, enhancing your aerial adventure with fascinating insights into the surrounding landscape.Capture jaw-dropping photos of the landscapes below, creating memories that will last a lifetime. Whether you're an adrenaline junkie seeking incomparable thrills or a nature enthusiast eager to explore Pokhara's beauty from a new vantage point, our Ultralight Glider Flight Experience offers an unforgettable journey through the skies.After your flight, our team will ensure your comfort as we safely return you to your hotel within the lakeside area of Pokhara. Reflect on your aerial adventure and cherish the memories of soaring above the clouds in one of Nepal's most scenic regions."
            main1="Free cancellation"
            Detail1="Cancel up to 24 hours in advance for a full refund"
            main2="Duration 75 minutes"
            Detail2="Check availability to see starting times."
            main3="Live tour guide"
            Detail3="English, Hindi"
            main4="Activities"
            Detail4="Thrilling Ultralight Glider Flight"
            main5="Accommodation"
            Detail5="Tourist Class Hotels"
            head="Highlights"
            li1="Thrilling Ultralight Glider Flight Experience in Pokhara"
            li2="Soar above Phewa Lake and the Annapurna Range"
            li3="Expert pilots ensure safety and provide insightful commentary"
            li4="High safety standards with professional tandem instructors"
            li5="the picturesque landscapes of Pokhara, including the shimmering waters of Phewa Lake and the snow-capped peaks of the Annapurna Range, you'll witness the region's beauty from a perspective few have the opportunity to experience"
            li6="Capture jaw-dropping photos of the landscapes below, creating memories that will last a lifetime."
            />
            <AccordionAdv title="8:00 AM - Hotel Pickup"
            content="Meet your driver at your hotel in Pokhara.Transfer to Pokhara Airport, where the ultralight flight adventure begins."
            />
            <AccordionAdv title="8:30 AM - Arrival and Registration at the Flight Center"
            content="Arrive at the flight center located near Pokhara Airport.Complete registration and necessary paperwork.Receive a safety briefing and an overview of the flight from the experienced pilot"
             />
             <AccordionAdv title="9:00 AM - Pre-Flight Preparation"
            content="Get equipped with safety gear, including helmets and communication devices.Meet your pilot who will guide you through the flight.Get a brief introduction to the ultralight glider, including safety protocols and what to expect during the flight."
             />
            <AccordionAdv title="9:15 AM - Ultralight Glider Flight"
            content="Take off for an exhilarating flight over Pokhara.Enjoy breathtaking aerial views of the Annapurna and Dhaulagiri mountain ranges, Phewa Lake, and the lush Pokhara Valley.The flight duration can range from 15 to 60 minutes, depending on your chosen package.Experience the thrill of soaring like a bird while capturing stunning photographs of the landscape below."
            />
            <AccordionAdv title="10:15 AM - Landing and Debriefing"
            content="Safely land back at the airport.Debrief with your pilot, share your experience, and receive a flight certificate as a memento.Opportunity to purchase photo and video footage of your flight."
            />
            <AccordionAdv title="10:30 AM - Transfer Back to Hotel"
            content="Transfer back to your hotel in Pokhara.Reflect on the experience and enjoy the rest of your day exploring Pokhara."
            />
            
            <StickyForm 
                title="BOOK NOW !!!"
                originalPrice="INR 20,000"
               discountedPrice="INR 14,800"
               discountPercentage={26}
               saleType="FREEDOM SALE"
               onSubmit={handleSubmit}
            />

            <Footer/>
        </>
    );
}
export default SkyDiving;