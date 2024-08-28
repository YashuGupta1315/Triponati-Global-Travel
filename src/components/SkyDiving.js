import React from "react";
import ImageGallery from "./ImageGallery";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdventureDetail from "./AdventureDetail";
const images = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83VeE04zqC9MUtezEoVa96hLId0GKDcZ_LQ&s",
      alt: "Pokhara",
    },
    {
        src: "https://traveldiarynepal.com/wp-content/uploads/2020/09/Skydiving.jpg",
        alt: "Pokhara",
    },
    {
        src: "https://pbs.twimg.com/media/CGYlNnPUQAAVlwx.jpg",
        alt: "Pokhara",
    },
    {
        src: "https://www.gobeepbeep.com/wp-content/uploads/2021/01/Sunny-Nepal-skydive-himalayas-with-logo-high-res-1.jpg",
        alt: "Pokhara",
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
            <AdventureDetail heading="Sky Diving"
            para="Are you ready to unleash your inner daredevil? This year, step out of your comfort zone and take the plunge with an adventure that will leave you breathless and exhilarated. Get ready to experience the ultimate rush of adrenaline with the Pokhara Skydive – the latest addition to the world of extreme sports !"
            main1="Trip length"
            Detail1="8 Nights / 9 Days"
            main2="Starts in"
            Detail2="Kathmandu"
            main3="Ends in"
            Detail3="Kathmandu"
            main4="Activities"
            Detail4="Skydiving, Sightseeing & Rafting"
            main5="Accommodation"
            Detail5="Tourist Class Hotels"
            main6="Drop zone Altitude"
            Detail6="820m (2689ft)"

            />
            <Accordion title="Day 01: Arrive Kathmandu, Transfer to Hotel"
            content="You will be welcomed by the Himalayan Shangrila before you land in Kathmandu. Once you land and finish your immigration formalities, you will be received by our representatives and escort you to your hotel."
            />
            <Accordion title="Day 2: Drive to Kurintar, Rafting in Trishuli and Drive to Pokhara"
            content="You will take an early drive to Kurintar, which lasts for about 4 hours. Under the guidance of a river guide, you will venture into the Trishuli river and raft along the exciting rapids (rafting past Twin Rock, Ladies Delight and Scout Upset can be a mind-blowing experience). This river journey is found to be electrifying and one of the best ways to explore Nepal. During this meticulously organized river trip, you will journey through some of the unexplored landscapes of Nepal. After the day’s adventure, you will drive to Pokhara."
             />
             <Accordion title="Day 03 - 06: Jump Day"
            content="Your jump takes place in one of these days. Your jump schedule will be given after the jump master fixes the schedule during the event. In the excess time, you are free to do your independent activities, like exploring the city. On your jump day, you will be driven to the drop zone in the morning. It takes about 30-40 minutes to reach there. The drop zone is a wide grassland next to a river surrounded by hills. Your whole day will be fun filled as you can also see the lifts and jumps of others apart from yours. In the evening, you will be back to your hotel for your well earned rest."
             />
            <Accordion title="Day 07: Fly to KTM"
            content="A 30 minutes’ flight will bring you to Kathmandu. You can utilize your free time in Kathmandu by strolling down the streets, doing some shopping or enjoying the dusky light of the evening from your hotel."
            />
            <Accordion title="Day 08: Sightseeing in Kathmandu"
            content="Kathmandu, the historical and cultural centre of Nepal, has been a popular destination for tourists ever since Nepal opened its doors to visitors. The city presents a wonderful mix of Hinduism, Tibetan Buddhism and western influence. There will be a guided tour to the UNESCO World heritage Sites Boudhanath -the largest Buddhist Stupa in Nepal, Pashupatinath – the largest Hindu shrine in Nepal dedicated to Lord Shiva, and Patan or Lalitpur, the medieval city of arts and architecture."
            />
            <Accordion title="Day 09: Depart Kathmandu"
            content="Our support team will take you to the airport for your flight back home. Or you can stay longer for more exploration activities such as game drive at National parks, trekking, Tibet tours, mountain biking etc. You never know what Nepal has to offer you."
            />
            
            <StickyForm 
                title="BOOK NOW !!!"
                originalPrice="INR 50,000"
               discountedPrice="INR 30,000"
               discountPercentage={26}
               saleType="FREEDOM SALE"
               onSubmit={handleSubmit}
            />

            <Footer/>
        </>
    );
}
export default SkyDiving;