import React from "react";
import ImageGallery from "./ImageGallery";
import TrekDetail from "./TrekDetail";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
 
    {
        src: "https://hsj.com.np/uploads/0000/1/2023/06/15/lukla.jpg",
        alt: "Gokyo Ri And Everest Base Camp Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/1/2023/08/15/ebc3.jpg",
        alt: "Gokyo Ri And Everest Base Camp Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/1/2019/12/21/everest-trek-through-chola-pass-and-gokyo-lake-2.jpg",
        alt: "Gokyo Ri And Everest Base Camp Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/1/2023/06/22/whatsapp-image-2023-06-22-at-123012.jpg",
        alt: "Gokyo Ri And Everest Base Camp Trek",
    },

];
const Gokyo=()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return(
        <>
            <Navbar/>
            <ImageGallery images={images} />
         
            <TrekDetail 
            heading="Gokyo Ri And Everest Base Camp Trek"
            para="This 17-day trek combines the renowned Everest Base Camp route with the lesser-explored Gokyo Lakes region, creating an exceptional and unbeatable adventure. Gokyo village, nestled in a hidden valley of the Khumbu region, is a true gem of the Himalayas. The trek explores forgotten valleys, tranquil lakes, and traditional villages while showcasing the breathtaking beauty of Gokyo Lakes, including Gokyo Ri and the Fifth Lake, offering magnificent views of Everest and surrounding peaks. The trek also includes traversing the shimmering ice trail of Cho La Pass and ascending Kala Patthar, providing panoramic views of Everest, Pumari, Lhotse, Nuptse, and other majestic peaks. The Gokyo Lake View Trek is highly rewarding, allowing trekkers to immerse themselves in the lap of the world and conquer the natural wonders that Gokyo offers. Optional: For all the helicopter enthusiasts, you now have the option to take a luxurious and adventurous helicopter flight from Kathmandu to Lukla and back from Lukla to Kathmandu by paying an extra USD 350 PP one way. With this, you no longer have to worry about flights being delayed or canceled, which can happen every now and then due to bad weather."
            Rclass="fa-solid fa-mountain-sun"
            region="Region"
            regionDetail="Everest Region"
            Dclass="fa-regular fa-clock"
            duration="Duration"
            days="17 days"
            Gclass="fa-solid fa-medal"
            grade="Grade"
            gradeDetail="3 Strenous"
            Tclass="fa-solid fa-location-dot"
            transport="Transportation"
            transDetail="FLIGHT / CAR"
            Aclass="fa-solid fa-person-hiking"
            activity="Activity Per Day"
            activityDetail="5-7 Hours Walking"
            Mclass="fa-solid fa-umbrella-beach"
            altitude="Max Altitude"
            altitudeDetail="5644m"
            Bclass="fa-solid fa-smog"
            season="Best Season"
            month="Feb, Mar, April, May, June, Sep, Oct, Nov and Dec."
            head="Highlights"
            li1="Experience the exhilaration of trekking to Everest Base Camp."
            li2="Trek up to 5545 m  through spectacular scenery."
            li3="Everest, Lhotse, Nuptse, Changtse, Ama Dablam, and scores of other lesser crests seen from a peaked vantage point"
            li4="The views from the Gokyo Ri much magnificant top of Kala Patthar"
            li5="Explore Ngozumpa glacier – the longest glacier in the Himalayas"
            li6="Suitable for people aged over 14 and below 65"
             />
            <Accordion 
            title="Day 1 : Arrival Day"
            content="Upon your arrival in Kathmandu, our representative will meet you at Tribhuvan International Airport, extend a warm welcome, and transfer to your hotel. Take advantage of this day to adjust to the new time zone and immerse yourself in the lively atmosphere of Kathmandu. Orientation Program will be at 5 PM. After orientation program welcome Dinner with guide."
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
            title="Day 2 : Kathmandu to Lukla by flight or helicopter and trek to Phakding"
            content="Today is the beginning of Gokyo and EBC Trek. You will take early  flight to Lukla. Upon reaching Lukla  enjoy the stunning mountain views. Start your trek to Phakding, descending through pine forests and picturesque Sherpa villages. Reach the delightful village of Phakding and settle into a tea house for the night. Make the most of the remaining daylight to explore Phakding . Wrap up your day with a satisfying dinner at the tea house. During peak  season (March, April, May, October, and November), flights to Lukla operates from Ramechhap/Manthali. Manthali is  around 5 to 6 hours' drive from Kathmandu. In non-peak seasons (January, February, June, July, August, September, and December), flights to lukla operates  from Kathmandu. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Phakding ( 2610 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Khumbu Inn Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="6.2 KM ( 3/4 hrs)"
            />
             <Accordion 
            title="Day 3 : Phakding to Namche Bazar"
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
            title="Day 4 : Acclimatization day in Namche Bazaar"
            content="Acclimatization is vital for a successful trek , and Namche Bazaar serves as an ideal spot for this purpose. Today is designated for relaxation and exploration, enabling your body to adapt to the higher altitude. Take a short hike to Everest View Hotel for better acclimatization. Explore Namche Bazaar and the Sherpa Museum in the afternoon. Stay hydrated by drinking lots of fluids. Have a taste of local Sherpa cuisine for dinner. Ensure a good night's sleep by going to bed early."
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
            Max="fa-solid fa-mountain-sun"
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
            title="Day 6 : Trek to Dingboche "
            content="After staying overnight in Debouche/ Tengbouche, we head to Dingboche in the morning. The trek continues through the alpine forest to Deboche, where you cross Imja Khola (River) using a suspension bridge. Along the way, you will  pass by a wall with inscribed stones. Later in the day, you'll enjoy a stunning view of Ama Dablam. You will climb to the village of Pangboche and follow the trail to Imja Valley. Finally, Reach Dingboche and check into a tea house in Dingboche for your overnight stay."
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
            title="Day 7 : Acclimatization day in Dingboche"
            content="Acclimatization is essential for a safe and enjoyable trek at higher altitudes. Today is all about resting and exploring Dingboche, helping your body adapt to the rising elevation and getting you ready for the upcoming challenges.Start your day with a  breakfast. For additional acclimatization,  hike to Nangkartshang Peak, which provides views of Makalu, Lhotse, Chalotse, Tawache, and Ama Dablam. Stay hydrated, take it easy, read, or enjoy light activities during the day, then have dinner at the tea house"
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
            content="As you trek from Dingboche to Lobuche, you get closer to the Everest Base Camp. The landscape becomes rougher, and the air gets thinner as you travel through the high-altitude terrain.Begin the day with breakfast, get ready for the trek, ascend towards Thukla Pass to enjoy panoramic views of Pumori and Nuptse, take a lunch break in Thukla, continue trekking towards Lobuche. Check in into a tea house for your overnight stay, and have dinner and sleep."
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
            title="Day 9 : Lobuche to Gorekshep. Hike to Everest Base Camp and Back to Gorekshep "
            content="Today is an important day as you finally reach Everest Base Camp. Start your morning trek after a filling breakfast in Lobuche, navigate rocky terrain as you ascend to Gorakshep, the last settlement before Everest Base Camp. Check into the tea house for a quick lunch, then embark on the journey to Everest Base Camp through the Khumbu Glacier. Take time to capture memories with photographs at this incredible spot. After enjoying the Everest Base Camp experience, trek back to Gorakshep, have dinner at the tea house in Gorak Shep, and rest early."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Everest Base Camp (5364 M )"
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
            title="Day 10 : Trek to Kalapathar and back to Lobuche and Trek to Dzongla"
            content="Early morning hike to Kala Patthar, you'll encounter a challenging ascent that rewards you with breathtaking panoramic views of Everest, Lhotse, and Nuptse. Kala Patthar is renowned for providing one of the closest and most awe-inspiring perspectives of Mount Everest, making it a must-visit vantage point for trekkers. After sepnding moments there, retrance your steps back to Lobuche for lunch. After lunch head to northease along Cho la Tsho to reach Dzongla. On the way to Zhongla you will  witness the traditional Sherpa villages, immerse in the local culture, and enjoy the serene surroundings of the Khumbu Valley. Overnight at Dzongla"
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kalapathar ( 5644 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="8 KM ( 4/5 hrs)"
            />
            <Accordion 
            title="Day 11 : Dzongla to Thangnak"
            content="The summit provides an amazing view of the Himalayan panorama. In the west, you'll see Kyajo Ri and Pharilapche surrounded by other peaks. To the north, there's the massive Mahalangur range, stretching from Cho Oyu to Ngozumpa II and I, Ghaychung Kang, and Ngozumpa peaks. Ama Dablam and Choatse impressively grace the southeast. Be cautious on the way down to Tagna – it's steep, with scree slopes and ice. Look for occasional cairns marking the path. Below that, the trail descends through grassy slopes to the summer village of Thangna above Ngozumpa Glacier. Check into a Guest House. Spend the night in Thangna. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Thangnak (4700 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="9.38 KM (8/9 hrs)"
            />
               <Accordion 
            title=" Day 12 : Thangnak to Gokyo and visit 5th and 6th Lake "
            content="After having breakfast in Thangnak you will start continuing your journey to the charming village of Gokyo which is located at 4,700 meters, where the beautiful Gokyo Lakes await! It promises to be a spectacular day, and after the significant effort of yesterday, the trek is relatively easy, lasting just four hours."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Gokyo Lake (4750 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Namaste Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="4.4 KM (5/6 hrs)"
            />
               <Accordion 
            title="Day 13 : Summit Gokyo Ri Peak and trek to Dole"
            content="After breakfast start your journey from the breathtaking village of Gokyo at an altitude of 4,700 meters, you'll marvel at the stunning Gokyo Lakes, making this day truly spectacular. The trek, following a relatively gentle route after the exertions of the previous day, unfolds over four hours of mesmerizing descent. Navigate the Ngozumpa Glacier with care, cross rocky paths, and revel in the scenic beauty surrounding you. As the day unfolds, the trail leads you to the serene village of Dole at 4,038 meters, where you check into a cozy teahouse to rest and absorb the tranquility of the surroundings. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Gokyo Ri Peak (5,357 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="14 KM (6/7 hrs)"
            />
               <Accordion 
            title="Day 14 : Trek to Namche from Dole"
            content="Start your trek from the serene village of Dole at 4,038 meters, the trail to Namche unfolds with a gradual descent through picturesque forests, charming villages, and scenic bridges. Navigate both uphill and downhill sections, catching occasional glimpses of snow-capped peaks. Arrive in the lively town of Namche Bazaar at 3,440 meters, where you can relax in a teahouse and soak in the vibrant atmosphere surrounded by the majestic Himalayan peaks."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Phorste Drengka (3,765 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="12 KM (6/7 hrs)"
            />
            <Accordion 
            title=" Day 15 : Trek to Lukla from Namche Bazar"
            content="Today is the last part of your Everest Base Camp trek as you come down from Namche Bazaar to Lukla. The path goes through familiar villages and landscapes, giving you a chance to think about the amazing journey you've been on. Start your descent from Namche Bazaar after breakfast. Take breaks for tea, enjoy the scenic beauty, and catch glimpses of the mountains one last time. Have lunch in the charming village of Phakding. Continue your trek, crossing suspension bridges and passing through forests. Finally, arrive in Lukla, the gateway to the Everest region, and check into a tea house. Have a dinner celebration dinner with all crew members and sleep."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Lukla (2,840 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Mera Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="20 KM (8/9 hrs)"
            />
            <Accordion 
            title=" Day 16 : Fly back to Kathmandu / Manthali"
            content="Take a morning flight from Lukla to Kathmandu. Explore Kathmandu, enjoy dinner and enjoy your last night in kathmandu. Once you land at the airport, you'll be transferrred to the hotel. Please note that flight operations are solely determined by the airline and may be influenced by the weather."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu (1400 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            />
            <Accordion 
            title="Day 17 : International Departure or start your new trip"
            content="Use your last morning in Kathmandu according to your flight time. Pack your things, check out of the hotel, Head to Tribhuvan International Airport for your departure. Wishing you a safe and pleasant journey back home!"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            
            />
            <StickyForm
            title="BOOK NOW !!!"
             originalPrice="INR 1,15,000"
            discountedPrice="INR 95,000"
            discountPercentage={26}
            saleType="FREEDOM SALE"
            onSubmit={handleSubmit}
            />
        
            <Footer/>
        </>

    );
}
export default Gokyo;