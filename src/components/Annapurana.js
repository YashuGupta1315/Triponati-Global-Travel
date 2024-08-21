import React from "react";
import ImageGallery from "./ImageGallery";
import TrekDetail from "./TrekDetail";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";

const images = [
    {
      src: "",
      alt: "",
    },
];
const Annapurana=()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return(
        <>
            <ImageGallery images={images} />
            <div className="main_content">
                <h1>Annapurna Base Camp</h1>
            </div>
            <TrekDetail 
            heading="Overview"
            para="Don’t let the lack of time become the excuse to not let you have extraordinary journey to the Annapurna Base Camp. This 11 days Annapurna Base Camp Trek is created for you so you will never have to worry about missing the enthralling adventure to the one of the best trekking destination there is. We have your back, you just make up your mind. The Annapurna base camp trek is a diversity trek that leads through rural Nepali ethnic villages,lush forests and shrubs, to one of Nepalese's most popular trekking destinations. And a nice view ofthe Shrine of the mountain. It's not very hard and also fast. It's excellent for people who have nomore time but want to admire the beauty of Nepal's mountains and hills."
            Rclass="fa-solid fa-mountain-sun"
            region="Region"
            regionDetail="Annapurna Region"
            Dclass="fa-regular fa-clock"
            duration="Duration"
            days="11"
            Gclass="fa-solid fa-medal"
            grade="Grade"
            gradeDetail="2 Strenuous"
            Tclass="fa-solid fa-location-dot"
            transport="Transportation"
            transDetail="Tourist Bus, Private Car Or Plane Flight (optional)"
            Aclass="fa-solid fa-person-hiking"
            activity="Activity Per Day"
            activityDetail="4-6 Hours Walking"
            Mclass="fa-solid fa-umbrella-beach"
            altitude="Max Altitude"
            altitudeDetail="4210m"
            Bclass="fa-solid fa-smog"
            season="Best Season"
            month="March,April,May,Sept,Oct,Nov"
            head="Highlights of Annapurna Base Camp (ABC) Trek"
            li1="Spend a lovely day at Pokhara, Tourists' Favourite hub in Nepal"
            li2="Travel to the Ghandruk, explore gurung village and mingle with the locals"
            li3="Find the Temple of Gurung, learn about their cultures and vist Buddhist monasteries"
            li4="Trek to Annapurna Base Camp at the altitude of 4130m"
            li5="Relax and enjoy hot water spring of Jhinu Danda"
            li6="Watch in the awe, Nature's splendour, take in the view of Hiunchuli Khangsar"
             />
            <Accordion 
            title=" Day 1: Arrival Day"
            content="Upon your arrival in Kathmandu, our representative will meet you at Tribhuvan International Airport,  extend a warm welcome, and transfer to your hotel. Take advantage of this day to adjust to the new time zone and immerse yourself in the lively atmosphere of Kathmandu. Orientation Program will be at 5 PM. After orientation program welcome Dinner with guide."
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
            title=" Day 2: Drive to Pokhara"
            content="After having  early morning breakfast, you'll board a bus bound for Pokhara, departing early. The journey offers picturesque views and lasts approximately 5-6 hours. (Alternatively, you may opt for a flight.)"
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Pokhara (822 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Dandelion or Hotel Lake Starl"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="Drive (5-6 hrs)"
            />
             <Accordion 
            title=" Day 3 : Drive to Jhinu and Trek to Chhomrong"
            content="After early morning hearty breakfast, you will drive to Jhinu and trek to your destination. That is to Chommrong. Along the way we'll see the wonderful views of Annapurna West, Fishtail Peak, and the steep descent to the Kimron River and up to Chhomrong an hour after hiking to Ghandruk. We travel to Chhomrong for a night's relaxation. It's a beautiful spot nestled in the shadow of Annapurna's towering peak."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Chhomrong (2,150 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Chommrong Cottage"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="Drive (2-3 hrs), Trek (4-5 hrs)"
            />
            <Accordion 
            title=" Day 4 : Treck to Doban"
            content="Trekking forward from the Chommrong, our next destination is a beautiful village of Doban. We enter the green forest through the stone steps of Homrong Hola and then uphill to the village of Doban, through the thick bamboo and rhododendron trees."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Doban (2,500 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Himalayan"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="7 hrs"
            />
            <Accordion 
            title="Day 5 : Treck to Deurali"
            content="You trek gently & ascend through bamboo forests with varieties of rhododendron and oak trees. Now you pass through the muddy trail which traverses high above the river. It takes approximately 3 and half hours to reach Deurali (3230m.) from Dovan. (Optional: You can also hike upto Machhapuchhre Base Camp from Doban.)"
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Deurali (3,200 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="4-5 hrs"
            />
            <Accordion 
            title=" Day 6 : Treck to Annapurna Base Camp "
            content="On this day, we finally arrive to our ultimate destination. At the altitude of 4130m, we shall have walked 6-7 hours to reach the Annapurna Base Camp. To reach here we pursue an itinerary through the narrow gorge Modi Khola glacier valley, which takes us to Annapurna's base camp, at the foot of Machhapuchhre. The Annapurna glaciers are not far away.The Base Camp in Machhapuchhre gives us amazing views of the nearby mountains. From Hiunchuli, past Annapurna South to Annapurna I (8097m/26,566 ft) and Khangsar Kang, Gangapurna, Annapurna III and Machhapuchhare we have an impressive 360 grade view."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Annapurna Base Camp (4,130 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Annapurna Sanctuary Lodge"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="7 hrs"
            />
            <Accordion 
            title="Day 7 : Treck to Lower Sinuwa"
            content="At the back of the world we will continue our walking out of the Annapurna Shrine and start with our move out of the Modi River gorge. We watch a stunning sunrise with the Himalaya. We eventually hit our serene Lower Sinuwa stoppoint. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Lower Sinuwa (2,340 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="6 hrs"
            />
            <Accordion 
            title="Day 8 : Treck to Jhinu Danda and drive back to Pokhara "
            content="Through the tranquil forests of rhododendrons, bamboos, and oak, we proceed down to Kimrong Khola and then ascend toward Chomrong town, before falling into Jhinu Danda, a low, quiet town. This village has near hot springs along the river that allow us to soak our tired muscle. On the same day, we drive to Pokhara via jeep which is considered one of the best and most relaxing spaces after the trekking."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Pokhara (822 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Dandelion or Hotel Lakestar"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="4 hrs"
            />
            <Accordion 
            title=" Day 9 : Guided sightseeing in Pokhara  "
            content="Today, we will spend our full day touring around Pokhara. Visit the different attractions of Pokhara."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Pokhara (822 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Dandelion or Hotel Lakestar"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5-6 hrs"
            />
            <Accordion 
            title=" Day 10 : Drive back to Kathmandu  "
            content="After breakfast drive or fly back to Kathmandu (flight is optional). Evening farewell dinner."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu (1,400 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="Drive (5-6 hrs)"
            />
            <Accordion 
            title="  Day 11 : Departure Day "
            content="Use your last morning in Kathmandu according to your flight time. Pack your things, check out of the hotel, Head to Tribhuvan International Airport for your departure. Wishing you a safe and pleasant journey back home!"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
           
            />
            <StickyForm
             originalPrice="INR 80,000"
            discountedPrice="INR 65,000"
            discountPercentage={26}
            saleType="FREEDOM SALE"
            onSubmit={handleSubmit}
            />
        </>

    );
}
export default Annapurana;