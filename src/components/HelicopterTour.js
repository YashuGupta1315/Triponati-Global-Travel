import React from "react";
import ImageGallery from "./ImageGallery";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";
import AccordionAdv from "./AccordionAdv";
const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBbiKX5EymJ1SyAoG0vNlrgyfbkP2QXMj_w&s",
      alt: "Helicopter Tour",
    },
    {
        src: "https://www.swisshelicopter.ch/components/com_jshopping/files/img_products/Helikopter-Alpenflug-Oberengadiner-Gletscher.jpg",
        alt: "Helicopter Tour",
    },
    {
        src: "https://www.nepaltour.info/wp-content/uploads/2019/03/pokhara-to-annapurna-base-c.jpg",
        alt: "Helicopter Tour",
    },
    {
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/c1/2a/caption.jpg?w=500&h=400&s=1",
        alt: "Helicopter Tour",
    },
      
];

const HelicopterTour = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <Navbar/>

            <ImageGallery images={images} />
            <AdventureDetail heading="Helicopter Tour"
            para="Pokhara helicopter sightseeing tour is one of the popular city sightseeing tour by helicopter that offers a scenic heli ride to explore the beautiful lake city Pokhara and surrounding mountains. Pokhara heli sightseing tour is an amazing helicopter ride over the Phewa Lake and the Pokhara city. The helicopter tour gives an opportunity to explore the green and clean city Pokhara from the aerial view.  "
            main1="Trip Name"
            Detail1="Pokhara Heli Sightseeing"
            main2="Duration"
            Detail2="30 minutes"
            main3="Country"
            Detail3="Nepal"
            main4="Region"
            Detail4="Annapurna Region"
            main5="Highlights"
            Detail5="Pokhara City aerial view, Mountain Views of  Fishtail, Annapurna, Dhaulagiri, Gangapurna, Mardi Himal"
            main6="Activities"
            Detail6="City + Mountain sightseeing"
            head="Highlights"
            li1="Stunning Aerial Views: Enjoy panoramic views of the Annapurna and Dhaulagiri mountain ranges, including peaks like Machhapuchhre (Fishtail)."
            li2="Quick Access to High Altitudes: Reach high-altitude locations quickly, offering close-up views of snow-capped peaks and glaciers"
            li3="Scenic Pokhara Valley: Fly over the scenic Pokhara Valley, including Phewa Lake, lush forests, and charming villages."
            li4="Comfort and Convenience: A comfortable and quick way to explore the Himalayas without the need for trekking.."
            li5="Ideal for Photography: Perfect for capturing breathtaking photographs and videos from unique aerial perspectives. "
            li6="Flexible Timings: Tours can be customized for morning or afternoon, with clear weather for the best visibility."
            />
            
            <AccordionAdv title="8:00 AM:"
            content="Fly from Pokhara airport to explore around the valley just over the Phewa Lake, World Peace Stupa, Begnas Tal, Rupa Tal, Sarangkot hill and enjoy the views of high mountains such as Fishtail, Annapurna, Gangapurna, Dhaulagiri and more."
             />
             <AccordionAdv title="8:15 AM:"
            content="Land at Pokhara airport and return back to hotel or join other program"
             />
            
            <StickyForm 
                title="BOOK NOW !!!"
                originalPrice="INR 1,00,000"
               discountedPrice="INR 74,000"
               discountPercentage={26}
               saleType="FREEDOM SALE"
               onSubmit={handleSubmit}
            />

            <Footer/>
        </>
    );
}
export default HelicopterTour;