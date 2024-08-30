import React from "react";
import ImageGallery from "./ImageGallery";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";

const images = [
    {
      src: "https://media2.thrillophilia.com/images/photos/000/134/639/original/1539861676_bali-sobek-ayung-rafting_62bcccbdbd7732466a2bf365a1a7e5e7379e9686.jpg?",
      alt: "RiverRafting",
    },
    
    {
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/d3/07/c5/upper-seti-half-day-action.jpg?w=1200&h=-1&s=1",
        alt: "RiverRafting",
    },
    {
        src: "https://i.ytimg.com/vi/Kvfzd0Sq2Mg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDRAZmU1I9_-jfu5vRnAVO1KExLaA",
        alt: "RiverRafting",
    },
    {
        src: "https://media.greenvalleynepaltreks.com/uploads/fullbanner/upper-seti-river-rafting-in-pokhara.webp",
        alt: "RiverRafting",
    },
];

const RiverRafting = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <Navbar/>

            <ImageGallery images={images} />
            <AdventureDetail heading="River Rafting"
            para="Are you looking for an amazing way to spend time while in Pokhara? If you are an adventure hunter and would love to experience the white-water sport, river rafting in Pokhara is a perfect option for you. Just imagine yourself wearing a life jacket, paddling, and fighting against the current of the Set River, doesn't that sound like a must-do adventure for adrenaline junkies?

This is exactly what the Seti River Rafting in Pokhara package from Green Valley Nepal Treks offers. One and half hours of aquatic sport along the white water of Seti River, where the mesmerizing landscapes, untouched areas, unique tradition, culture, and majestic Annapurna range look at you as you paddle. Rafting in Pokhara, however, is not just about an aquatic sports experience, it is also an activity where you can enhance your team's playing ability. The sport teaches you to work alongside the team because rafting is a proper team sport.

Along with adrenaline-popping adventure, rafting also offers valuable life lessons, which you can apply in your everyday life. Besides, you will also be accompanied by professional guides who ensure the safety of the rafters while unlocking access to the thrilling white water. Rafting in Pokhara is all about going with the flow, paddling your way with the team, and enjoying the best one-and-a-half hour while you stay in Pokhara.

Adventurers of all ages can participate in Seti River Rafting in Pokhara. No prior experience is necessary for this river rafting; all you need is a desire to have some fun. Rafting is available all year round. There are even more exciting rapids during the monsoon season because of the rainfall. Green Valley Nepal Treks will handle every aspect of planning for the rafting trip in Pokhara.

River Rafting in Pokhara starts from the old bamboo bridge and ends at the Simpani Dam. However, Green Valley Nepal Treks offers a pickup service from your hotel and drop you off at your hotel after the rafting ends. Besides, we also offers the most reasonable cost for Rafting in Pokhara for 2024 and 2025. If you are in Kathmandu and want to experience river rafting then we also have option for you."
            main1="Duration"
            Detail1="2 Hours"
            main2="Destination"
            Detail2="Nepal"
            main3="Group Size"
            Detail3="1 to 15"
            main4="Starts at"
            Detail4="Old Bamboo Bridge"
            main5="Ends at"
            Detail5="Simpani Dam"
            main6="Season"
            Detail6="Spring and Autumn"
            head="Highlights"
            li1="Scenic Jump Site: Jump from a 70-meter high steel cliff bridge over the River Hemja, surrounded by lush green hills and stunning landscapes."
            li2="Stunning background scenarios of the Annapurna range."
            li3="Exploration of the remote and untouched landscapes along the Seti River."
            li4="Witness the surrounding traditional civilization."
            li5="An excellent way to enhance a team playing ability as rafting is a team sport."
            li6="A perfect chance to take memorable photos and videos while going for one of the most challenging water sports."
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
export default RiverRafting;