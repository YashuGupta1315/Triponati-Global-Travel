import React from "react";
import ImageGallery from "./ImageGallery";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";
import AccordionAdv from "./AccordionAdv";
const images = [
    {
      src: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_850,h_420/w_52,x_9,y_9,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wt93bu8u6m5qy1xlf8ui/FromPokhara:3-DayWildlifeCultureJungleSafariTour.webp",
      alt: "JungleSafari",
    },
    
    {
        src: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1280,h_853/w_79,x_14,y_14,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hi5irn44o2okk8y9sv8p/FromPokhara:3-DayWildlifeCultureJungleSafariTour.webp",
        alt: "JungleSafari",
    },
    {
        src: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1280,h_853/w_79,x_14,y_14,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/kaeqxwmwo97erpwlda9u/FromPokhara:3-DayWildlifeCultureJungleSafariTour.webp",
        alt: "JungleSafari",
    },
    {
        src: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1280,h_720/w_79,x_14,y_14,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/pjqazlojbbraqsmpjsdr/FromPokhara:3-DayWildlifeCultureJungleSafariTour.webp",
        alt: "JungleSafari",
    },
];

const JungleSafari = () =>{
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return(
        <>
            <Navbar/>

            <ImageGallery images={images} />
            <AdventureDetail heading="Jungle Safari"
            para="Explore Nepal's wild side with our Chitwan Jungle Safari from Kathmandu/Pokhara. Encounter exotic wildlife, cruise along the Rapti River & immerse in local culture for an unforgettable adventure"
            main1="Duration"
            Detail1=" 3 days"
            main2="Departing"
            Detail2="Pokhara"
            main3="Group Size"
            Detail3="Join in Group"
            main4="Pickup"
            Detail4="Hotel pick up"
            main5="Guide"
            Detail5="English/Hindi"
            main6="Free cancellation"
            Detail6="Cancel up to 24 hours in advance for a full refund"
            head="Highlights"
            li1="Immerse yourself in the breathtaking wilderness of Chitwan National Park."
            li2="Tranquil canoe rides along the scenic Rapti River."
            li3="Immerse engaging cultural encounters with the indigenous Tharu community."
            li4="River Safari: Take a serene canoe ride along scenic Rapti rivers."
            li5="Marvel Comfortable accommodations, delicious meals, and a variety of activities."
            li6="Discover rare and exotic wildlife on a jeep or canoe ride"
            />
             <AccordionAdv title="Day 1: Kathmandu/Pokhara to Chitwan National Park"
            content="Experience the ultimate jungle getaway with our 3-Day Chitwan Jungle Safari Adventure! Your journey begins with a convenient pick-up from your hotel in Kathmandu or Pokhara, followed by a scenic drive to Sauraha. Upon arrival, indulge in a refreshing welcome drink at our cozy hotel. After a delicious lunch, immerse yourself in the local culture with village tours and a mesmerizing riverside sunset view. In the evening, be captivated by the vibrant Tharu Culture Program before savoring a delectable dinner. Rest comfortably in our accommodations, surrounded by the sights and sounds of the jungle, for an unforgettable wilderness experience."
            />
              <AccordionAdv title="Day 2: Jungle Safari and Wildlife Activities"
            content="Wake up to a delicious breakfast before embarking on a thrilling day of adventure in Chitwan National Park. Glide through tranquil waters during canoeing, marvel at exotic bird species during bird watching, and explore the jungle on foot with a captivating jungle walk. Visit the Elephant Breeding Center to learn about these majestic creatures. After a satisfying lunch, choose between an exhilarating Elephant Back Safari or a Jeep Safari to encounter wildlife up close. Return for a delightful dinner and retire to your comfortable room, filled with memories of an extraordinary day in the wilderness."
            />
              <AccordionAdv title="Day 3: Departure to Kathmandu or Pokhara (as per your choice)"
            content="After breakfast, Depart from Chitwan National Park and board the tourist bus back to Kathmandu or Pokhara, whichever you choose."
            />
            <StickyForm 
                title="BOOK NOW !!!"
                originalPrice="INR 20,000"
               discountedPrice="INR 14,269"
               discountPercentage={26}
               saleType="FREEDOM SALE"
               onSubmit={handleSubmit}
            />
            <Footer/>
        </>
    );
}
export default JungleSafari;