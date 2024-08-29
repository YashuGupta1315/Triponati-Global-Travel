import React from "react";
import ImageGallery from "./ImageGallery";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";
import AccordionAdv from "./AccordionAdv";
const images = [
    {
      src: "",
      alt: "Paragliding",
    },
    {
        src: "",
        alt: "Paragliding",
    },
    {
        src: "",
        alt: "Paragliding",
    },
    {
        src: "",
        alt: "Paragliding",
    },
      
];

const Paragliding = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <Navbar/>

            <ImageGallery images={images} />
            <AdventureDetail heading="Paragliding"
            para="The Paragliding in Pokhara takes you above the city heights at 2000 ft. and offers views of the entire Pokhara valley that looks enchantingly beautiful with Annapurna ranges serving as the backdrop. Cherishing every little observation from high above, one ends the adrenaline rush with happy moments by landing near a spot at Phewa Lake. Embark on this adventure-filled day out with Darjeeling paragliding with a set of certified pilots and flying enthusiasts. paragliding will be conducted under the provision of trained experts, instructors will lead a quick briefing session, and then a group of professionals will gear up the paraglider."
            main1="Activity Location"
            Detail1="Sarangkot Site"
            main2="Start Point/End Point"
            Detail2="Pokhra City"
            main3="Tour Timings"
            Detail3="11:00 AM to 03:00 PM"
            main4="Flying Duration"
            Detail4="2-3 hours with (25-30 mins flying"
            main5="Take off Point/Landing Point"
            Detail5="Saragkot site/Phewa Lake Region"
            head="Highlights"
            li1="Paraglide as high as 2000 ft through the air at 40-60 kph and get a birds-eye view of the scenery along the flight path of the - Annapurna ranges, peaks of Mount Everest, and even the virgin Mount Fish Tail."
            li2="The take-off point for this paragliding is at the Saragkot site which is a popular offbeat paragliding site."
            li3="Before the activity, a quick briefing session will be conducted by trained experts."
            li4="A two-seater plane will take you high up in the air from where you can take your paragliding flight with a certified instructor."
            li5="The fly will be for 20-30 minutes, depending on weather conditions. "
            li6="Get your pictures clicked from various angles at an additional cost to capture your memories for a lifetime."
            />
            
            
            
            <StickyForm 
                title="BOOK NOW !!!"
                originalPrice="INR 5,900"
               discountedPrice="INR 4,999"
               discountPercentage={26}
               saleType="FREEDOM SALE"
               onSubmit={handleSubmit}
            />

            <Footer/>
        </>
    );
}
export default Paragliding;