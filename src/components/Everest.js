import React from "react";
import ImageGallery from "./ImageGallery";
import TrekDetail from "./TrekDetail";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
 
    {
        src: "https://hsj.com.np/uploads/0000/1/2024/01/13/everest-trek-banner-6.png",
        alt: "Everest Base Camp Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/1/2023/06/23/everestview.jpg",
        alt: "Everest Base Camp Trek",
    },
  
    {
        src: "https://hsj.com.np/uploads/0000/1/2024/01/13/everest-trek-banner-3.png",
        alt: "Everest Base Camp Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/04/23/everest-group1.JPG",
        alt: "Everest Base Camp Trek",
    },

];
const Everest=()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return(
        <>
            <Navbar/>
            <ImageGallery images={images} />
         
            <TrekDetail 
            heading="Everest Base Camp Trek"
            para="Over 14 days of Everest Base Camp Trek, you'll trek to an elevation of about 5,644 meters, treating yourself to panoramic views of towering peaks like Pumori, Lhotse, Nuptse, Lobuche, and the iconic Mt Everest itself.
The adventure begins with a thrilling 35-minute flight from Kathmandu to Lukla during (January, February, May, June, July, August, September, December) or a quick 20-minute flight from Manthali/Ramechhap to Lukla during ( March, April, October, November). Manthali Airport is 6-hour drive from Kathmandu
Starting and ending in Lukla, your journey of Everest Base Camp Trek follows the Dudh Koshi River, passing through Sagarmatha National Park en route to Namche Bazaar, a bustling trading hub and a spot for acclimatization.
Though the walk is challenging, the beauty of lush forests, farmlands, hills, and mountains will inspire you to keep going. After a day of acclimatization in Namche Bazaar, the trek continues to Tengboche, home to the renowned Tengboche Monastery. The path then leads to Dingboche and eventually to Lobuche, offering views of Lhotse, Nuptse, Makalu, Cho Oyu, Ama Dablam, and more."
            Rclass="fa-solid fa-mountain-sun"
            region="Region"
            regionDetail="Everest Region"
            Dclass="fa-regular fa-clock"
            duration="Duration"
            days="14 days"
            Gclass="fa-solid fa-medal"
            grade="Grade"
            gradeDetail="3  Strenous"
            Tclass="fa-solid fa-location-dot"
            transport="Transportation"
            transDetail="Domestic flight (Ktm-Lukla-Ktm) and private transportation in Kathmandu"
            Aclass="fa-solid fa-person-hiking"
            activity="Activity Per Day"
            activityDetail="5-6 Hours Walking"
            Mclass="fa-solid fa-umbrella-beach"
            altitude="Max Altitude"
            altitudeDetail="5644m"
            Bclass="fa-solid fa-smog"
            season="Best Season"
            month="Spring (March to May) and Fall (September to November)"
            head="Highlights"
            li1="Follow Sir Edmund Hillary's path to reach the top of the world's highest mountain."
            li2="Climb Kala Pathar for amazing views of Mount Everest."
            li3="Experience an exciting flight on the world's most adventurous route with the shortest runway."
            li4="Authentic teahouse stays for interaction with locals and genuine Himalayan hospitality"
            li5="Visit the highest monastery, Tengboche, in the Khumbu Valley."
            li6="Have a hassle-free trip with all paperwork and trekking permits sorted in advance."
             />
            <Accordion 
            title="Day 1 : Arrival at Kathmandu"
            content="Upon your arrival in Kathmandu, our representative will meet you at Tribhuvan International Airport, extend a warm welcome, and transfer to your hotel. Take advantage of this day to adjust to the new time zone and immerse yourself in the lively atmosphere of Kathmandu. Orientation Program will be at 5 PM. After orientation program welcome dinner with guide."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu (1,400 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Dinner included"
            />
            <Accordion 
            title="Day 2 : Kathmandu to Lukla by flight / Helicopter and trek to Phakding"
            content="Today is the beginning of your journey to Everest Base Camp. You will take early  flight to Lukla. Upon reaching Lukla enjoy the stunning mountain views. Start your trek to Phakding, descending through pine forests and picturesque Sherpa villages. Reach the delightful village of Phakding and settle into a tea house for the night. Make the most of the remaining daylight to explore Phakding. Wrap up your day with a satisfying dinner at the tea house. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Phakding ( 2610 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Khumbu Inn Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Dinner included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="6.2 KM ( 3/4 hrs)"
            />
             <Accordion 
            title="Day 3 : Trek to Namche from Phakding"
            content="Today's trek takes you further into the heart of the Khumbu region as you ascend along the Dudh Koshi River. Start your trek after breakfast, crossing suspension bridges and journeying through pine forests. Pass through the small check point of Monjo, verification of  your entry into Sagarmatha National Park. Keep trekking alongside the Dudh Koshi River, passing through the village of Jorsalle. Commence the challenging ascent to Namche Bazaar after crossing Tenzing Hillary Suspension Bridge, featuring a steep climb with breathtaking views of Thamserku, Everest, and other peaks. Reach Namche Bazaar, a bustling market town and the commercial hub of the Khumbu region. Check into a tea house for your stay. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Namche ( 3440 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Sherpaland/ Hotel Hill Ten/ Yak Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="12 KM ( 6/7 hrs)"
            />
            <Accordion 
            title="Day 4 : Acclimatization at Namche"
            content="Acclimatization is vital for a successful trek to Everest Base Camp, and Namche Bazaar serves as an ideal spot for this purpose. Today is designated for relaxation and exploration, enabling your body to adapt to the higher altitude. Take a short hike to Everest View Hotel for better acclimatization. Explore Namche Bazaar and the Sherpa Museum in the afternoon. Stay hydrated by drinking lots of fluids. Have a taste of local Sherpa cuisine for dinner. Ensure a good night's sleep by going to bed early."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Namche ( 3440 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Sherpaland/ Hotel Hill Ten/ Yak Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5.4 Km ( 4/5 hrs)"
            />
            <Accordion 
            title="Day 5 : Trek to Deboche from Namche Bazaar"
            content="The trek today takes you deeper into the Khumbu region, passing through picturesque landscapes and traditional Sherpa villages. You'll continue your ascent, reaching the village of Deboche, known for its serene monasteries and breathtaking views. Embark on your trek after breakfast from Namche Bazaar to Tengboche, trek uphill for panoramic views of Everest, Lhotse, and Ama Dablam, explore the peaceful Tengboche Monastery upon arrival, then move towards Deboche, cross the Imja River, and finally, check into a tea house for your overnight stay in Deboche."
            MaxAltitude="Max Altitude"
            MaxAlt="Deboche ( 3820 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Rivendell Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="10.5 KM (6/7 hrs)"
            />
            <Accordion 
            title="Day 6 : Trek to Dingboche from Deboche "
            content="After staying overnight in Deboche, we head to Dingboche in the morning. The trek continues through the alpine forest to Deboche, where you cross Imja Khola (River) using a suspension bridge. Along the way, you will  pass by a wall with inscribed stones. Later in the day, you'll enjoy a stunning view of Ama Dablam. You will climb to the village of Pangboche and follow the trail to Imja Valley. Finally, Reach Dingboche and check into a tea house in Dingboche for your overnight stay."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Dingboche ( 4410 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel GoodLuck/ Mountain Paradise Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="11.5 Km (6/7 hrs)"
            />
            <Accordion 
            title="Day 7 : Acclimatization day at Dingboche"
            content="Acclimatization is essential for a safe and enjoyable trek at higher altitudes. Today is all about resting and exploring Dingboche, helping your body adapt to the rising elevation and getting you ready for the upcoming challenges.Start your day with a breakfast. For additional acclimatization, hike to Nangkartshang Peak, which provides views of Makalu, Lhotse, Cholatse, Tawache, and Ama Dablam. Stay hydrated, take it easy, read, or enjoy light activities during the day, then have dinner at the tea house."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Dingboche ( 4410 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel GoodLuck/ Mountain Paradise Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5.1 Km ( 5/6 hrs)"
            />
            <Accordion 
            title="Day 8 : Dingboche to Lobuche"
            content="As you trek from Dingboche to Lobuche, you get closer to the Everest Base Camp. The landscape becomes rougher, and the air gets thinner as you travel through the high-altitude terrain. Begin the day with breakfast, get ready for the trek, ascend towards Thukla Pass to enjoy panoramic views of Pumori and Nuptse, take a lunch break in Thukla, continue trekking towards Lobuche. Check into a tea house for your overnight stay, and have dinner and sleep."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Lobuche ( 4940 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Sherpa Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="8 km ( 5/6 hrs)"
            />
            <Accordion 
            title="Day 9 : Trek to Gorakshep. Hike to Everest Base Camp and back to Gorakshep "
            content="Today is an important day as you finally reach Everest Base Camp. Start your morning trek after a filling breakfast in Lobuche, navigate rocky terrain as you ascend to Gorakshep, the last settlement before Everest Base Camp. Check into the tea house for a quick lunch, then embark on the journey to Everest Base Camp through the Khumbu Glacier. Take time to capture memories with photographs at this incredible spot. After enjoying the Everest Base Camp experience, trek back to Gorakshep, have dinner at the tea house in Gorak Shep, and rest early."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Everest Base Camp ( 5364 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Buddha Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="11.7 KM ( 8/9 hrs)"
            />
            <Accordion 
            title="Day 10 : Hike to Kalapathar and Descend down to Pheriche"
            content="Begin your day early to catch a stunning sunrise over the Himalayas at Kala Pathar and spend time taking photographs. Afterward, descend from Kala Patthar to Gorakshep, trek back down towards Pheriche, stop for lunch in the familiar spot of Lobuche, and finally, reach Pheriche to check into a tea house. Spend the evening resting and enjoy dinner at the tea house."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kalapathar ( 5644 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Snowland/ Pheriche Resort"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="15.2 KM ( 8/9 hrs)"
            />
            <Accordion 
            title="Day 11 : Trek down to Namche Bazar from Pheriche"
            content="Today, you'll continue your descent, making your way back to Namche Bazaar. Going down to lower altitudes brings a welcome relief, and you'll encounter familiar landscapes along the way.  Check in at Hotel Sherpaland and have dinner."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Pheriche ( 4371 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Sherpaland/ Hotel Hill Ten/ Yak Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="19.5 KM ( 7/8 hrs)"
            />
               <Accordion 
            title=" Day 12 : Namche Bazar to Lukla"
            content="Today is the last part of your Everest Base Camp trek as you come down from Namche Bazaar to Lukla. The path goes through familiar villages and landscapes, giving you a chance to think about the amazing journey you've been on. Start your descent from Namche Bazaar after breakfast. Take breaks for tea, enjoy the scenic beauty, and catch glimpses of the mountains one last time. Have lunch in the charming village of Phakding. Continue your trek, crossing suspension bridges and passing through forests. Finally, arrive in Lukla, the gateway to the Everest region, and check into a tea house. Have a dinner celebration dinner with all crew members and sleep."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Namche ( 3440m )"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Mera Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="20 Km ( 8/9 hrs)"
            />
               <Accordion 
            title="Day 13 : Fly back to Kathmandu"
            content="Take a morning flight from Lukla to Kathmandu. Explore Kathmandu, enjoy dinner and enjoy your last night in kathmandu. Once you land at the airport, you'll be transferrred to the hotel. Please note that flight operations are solely determined by the airline and may be influenced by the weather."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Lukla ( 2860 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            />
               <Accordion 
            title="Day 14 : Departure from Kathmandu or start new trip."
            content="Use your last morning in Kathmandu according to your flight time. Pack your things, check out of the hotel, Head to Tribhuvan International Airport for your departure. Wishing you a safe and pleasant journey back home!"
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu (1400 M)"
            Meal="Meal"
            MealDetail="Breakfast included"
            />
        
            <StickyForm
            title="BOOK NOW !!!"
             originalPrice="INR 1,04,000"
            discountedPrice="INR 76,000"
            discountPercentage={26}
            saleType="FREEDOM SALE"
            onSubmit={handleSubmit}
            />
        
            <Footer/>
        </>

    );
}
export default Everest;