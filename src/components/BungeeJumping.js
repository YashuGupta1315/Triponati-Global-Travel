import React from "react";
import ImageGallery from "./ImageGallery";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";
import AccordionAdv from "./AccordionAdv";
const images = [
    {
      src: "https://www.holidify.com/images/cmsuploads/compressed/Bungee-Jumping-in-Pokhara-Adventure-sports-Nepal_20200106132253.jpg",
      alt: "BungeeJumping",
    },
    
    {
        src: "https://www.holidify.com/images/cmsuploads/compressed/16086694862_46c0945363_b_20200104010303.jpg",
        alt: "BungeeJumping",
    },
    {
        src: "https://thehimalayanjourneys.com/wp-content/uploads/2020/01/Pokhara-Bungy-e1578748509532.jpg",
        alt: "BungeeJumping",
    },
    {
        src: "https://adventuretrekkingtour.com/wp-content/uploads/2019/04/Day-Bungee-Jump-Tour-Pokhara.jpg",
        alt: "BungeeJumping",
    },
];

const BungeeJumping = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <Navbar/>

            <ImageGallery images={images} />
            <AdventureDetail heading="Bungee Jumping"
            para="Prepare to be exhilarated as you step off the edge of our 80-meter tower Bungee Jump at Bungee Pokhara. Suspended high above the captivating Hemja valley, our cantilevered tower teeters over a mesmerizing river and a jaw-dropping 50-meter cliff. As you plummet into five pulse-pounding seconds of freefall, embrace the unbridled excitement while surrounded by the awe-inspiring splendor of the mighty Himalaya. Just a 20-minute journey from the enchanting Pokhara Lakeside, HighGround Bungee invites you to embark on an extraordinary escapade. Our world-class jump site showcases panoramic views of the majestic Himalayan peaks, verdant hills, and tranquil rivers, setting the stage for a truly unforgettable experience. At Bungee Pokhara, your safety is paramount. Our expert Jump Masters are unwaveringly dedicated to providing a secure and thrilling experience. By adhering to the most stringent safety standards and employing cutting-edge technology and top-tier bungee cords, we ensure that you can focus solely on the exhilaration of the moment and the breathtaking vistas."
            main1="Difficulty"
            Detail1="Leisurely Plus"
            main2="Altitude"
            Detail2="1200m"
            main3="Group size"
            Detail3="1 above PAX"
            main4="Accomodation"
            Detail4="Hotel/Lodge"
            main5="Season"
            Detail5="Sept - Nov to March & April"
            main6="Meals"
            Detail6="Breakfast, Lunch & Dinner"
            head="Highlights"
            li1="Scenic Jump Site: Jump from a 70-meter high steel cliff bridge over the River Hemja, surrounded by lush green hills and stunning landscapes."
            li2="Thrilling Freefall: Experience an exhilarating freefall with a breathtaking view of the mountains and river below."
            li3="Safety Standards: Operated by professionals with international safety standards and high-quality equipment."
            li4="Convenient Location: Easily accessible from Pokhara city center, making it a popular adventure activity for tourists."
            li5="Best Time to Jump: Ideal during clear weather seasons—autumn (October-November) and spring (March-April)."
            li6="Adventure Hub: Combine with other adventure activities in Pokhara, like paragliding, zip-lining, or ultralight flights."
            />
            
            <StickyForm 
                title="BOOK NOW !!!"
                originalPrice="INR 10,000"
               discountedPrice="INR 7,400"
               discountPercentage={26}
               saleType="FREEDOM SALE"
               onSubmit={handleSubmit}
            />

            <Footer/>
        </>
    );
}
export default BungeeJumping;