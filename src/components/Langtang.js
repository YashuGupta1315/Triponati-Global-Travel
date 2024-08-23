import React from "react";
import ImageGallery from "./ImageGallery";
import TrekDetail from "./TrekDetail";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
 
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/04/langtang-banner1.jpg",
        alt: "Langtang Valley Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/04/langtang-trek.jpeg",
        alt: "Langtang Valley Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/04/langtang-valley-trek-7days.jpg",
        alt: "Langtang Valley Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/04/langtang-valley-trek.jpg",
        alt: "Langtang Valley Trek",
    },

];
const Langtang=()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return(
        <>
            <Navbar/>
            <ImageGallery images={images} />
         
            <TrekDetail 
            heading="Langtang Valley Trek"
            para="The third preferred trekking trail in Nepal, Langtang region is still unspoiled and mesmerizing trekking destination in Nepal. Despite the terrible hit of April 25, 2015, Earthquake, Langtang Region Trekking is always safe and enthralling. To convey this significant message to the travellers around the globe, Himalayan Social Journey coordinated the historical event Langtang Marathon’ on 29th May 2016, in this region, ‘and HSJ is facilitated as Langtang Goodwill Ambassador since then, HSJ has been working as ‘The Goodwill Ambassador to Langtang Region’. We have been operating various trips in different regions of Nepal successfully but our special concern or simply put, we are specialized in organizing various exciting trip programs in Langtang Region. The Langtang Valley is simply breathtaking and Tamang Heritage and Gosainkunda are the cultural and spiritual tour and trekking in the lap of Himalaya. Travelling to Langtang and trekking with us, you are not only enjoying the beauty but also contributing to the socio-economic and cultural aspect of the livelihood of the people inhabiting there. "
            Rclass="fa-solid fa-mountain-sun"
            region="Region"
            regionDetail="Langtang Region"
            Dclass="fa-regular fa-clock"
            duration="Duration"
            days="11 days"
            Gclass="fa-solid fa-medal"
            grade="Grade"
            gradeDetail="2 Moderate"
            Tclass="fa-solid fa-location-dot"
            transport="Transportation"
            transDetail="Tourist Bus, Private Car"
            Aclass="fa-solid fa-person-hiking"
            activity="Activity Per Day"
            activityDetail="4-5 hrs Walking"
            Mclass="fa-solid fa-umbrella-beach"
            altitude="Max Altitude"
            altitudeDetail="3800m (Kyanjin Gompa) / 4773m (Kyanjin Ri)"
            Bclass="fa-solid fa-smog"
            season="Best Season"
            month="Feb, Mar, April, May, June, Sep, Oct, Nov and Dec."
            head="Highlights"
            li1="Trek through rhododendron forests, yak pastures, and villages"
            li2="Experience the local's unique Tamang culture and Tibetan villages"
            li3="Stunning view of the icefall from Kimshung and Langtang Lirung peaks"
            li4="Rare and abundant flora and fauna"
            li5="Doman waterfall"
            li6="Yak cheese factory"
             />
            <Accordion 
            title="Day 1 : Arrival Day "
            content="Your arrival to Tribhuwan International Airport and transfer to Hotel. Orientation in the evening at around 5 PM. At evening welcome dinner."
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
            title="Day 2 : Sightseeing of Kathmandu"
            content="After breakfast, our Himalayan Social Journey City tour guide will take you to different UNESCO listed world heritage sites of Nepal. Today, you will visit Pashupatinath Temple or Kapan Monastery, Boudhanath, Swayambhu and Patan Durbar square. Overnight at Himalayan Suite  Hotel or similar. (B)"
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
            dura="4-5 hrs"
            />
             <Accordion 
            title="Day 3 : Drive to Syabru Besi"
            content="In the wake of morning breakfast, you travel by means of transport through Trishuli Bazaar, and afterwards Dhunche to Syabrubesi. In spite of the fact that roads are uneven and harsh, the journey shall turn out to be so pleasurable with sights of lovely scenes and snow-secured mountains. You remain at a hotel in Syabrubesi. Ensure you rest on time as your body is worn out on the long and suffering bus ride."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Syabru Besi (1,462 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Yella Peak Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="Drive (6-7hrs)"
            />
            <Accordion 
            title="Day 4 : Trek to Lama Hotel"
            content="As the trek starts, you go through Trisuli River and pursue Langtang River. Walking through a suspension bridge, you need to stroll through Pahiro to reach to Bamboo. The trail at that point crosses a subtropical woodland. Red Panda, Langur monkey, wild pigs and different feathered creatures occupy the woods. The trail at that point rises through Rimche to end the day trek at Lama Hotel. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Lama Hotel (2,500 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Original Lama Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="4-5hrs"
            />
            <Accordion 
            title="Day 5 : Trek to Langtang Village"
            content="Subsequent to morning breakfast, the fifth-day trek starts with a delicate tough ascension up the trekking trails. However, the trail before long gets steep as you trek further. You shall have a look at excellent Langtang Lirung and other snow-shrouded tops beginning showing up, your trek turns out to be additionally intriguing. You can give your legs a rest and have your lunch in Ghoda Tabela. As you climb up, you will reach to a wonderful valley – Langtang where you will see yaks brushing everywhere throughout the fields. You will go through your fifth night in Langtang Village. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Langtang Village (3,307 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="4-5 hrs"
            />
            <Accordion 
            title="Day 6 : Trek to Kyanjin Gompa "
            content="You go through a Buddhist place of worship and trek to Mundu. After you traverse streams, wooden scaffolds and moraines, you get a look at Buddhist religious community called as Kyanjin Gompa. The town is named after a Buddhist religious community Kyanjin Gompa which is comprised of nearby woods and stones. There are Buddha pictures and icons. You can visit a cheddar ie, Cheese processing plant there. You can rest or tour the region after lunch. Langtang Lirung, Kyanjin RI, Tsergo RI, Langshisha RI, Yala Peak are some mountain tops you can see from Kyanjin Gompa. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kyanjin Gompa (3,798 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Namastey Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="3-4 hrs"
            />
            <Accordion 
            title="Day 7 : Excursion day around Kyanjin Gompa."
            content="The seventh day is for rest. As you have moved to more than 3800-meter elevation, your body needs to conform to the adjustment in the earth. Additionally, it is a safeguard for height affliction. On the off chance that you feel good, you can investigate Kyanjin as you can visit the religious community, cheddar plant, and icy masses. You can likewise climb to Kyanjin RI or Tserko RI. From those focuses, you can see the stunning view of Langtang Valley, Langtang Lirung, and some other snow-shrouded mountain tops. Tserko RI remains at a height of 5,033 meters which is the most elevated peak of Langtang Valley trek. Overnight at Namastey Guest House. On this day, if you wish to take the flight to Kathmandu straight, you would have the option to take a helicopter ride at INR. 35,000/pp based on 5 pax."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kyanjin Gompa (3,798 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Namastey Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            />
            <Accordion 
            title="Day 8 : Trek back to Lama Hotel"
            content="You drop in excess of 1430 meter for around 6 hours trek for medium-term remain at Lama Hotel. As you return through a similar trail, you can take a rest in Ghoda Tabela and eat. Ensure you appreciate the heavenly perspective on the snow-secured mountain extends while diving down to Lama Hotel – it's an incredible sight. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Lama Hotel (2,500 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Original Lama Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5-6 hrs"
            />
            <Accordion 
            title="Day 9 : Trek back to Syabru Besi"
            content="You trek downhill through beautiful forests and villages to Syabrubesi from where you shall be driving back to Kathmandu. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Syabru Besi (1,462 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Yala Peak Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="4-5 hrs"
            />
            <Accordion 
            title="Day 10 : Drive back to Kathmandu"
            content="Drive back to Kathmandu through Pasang Lhamu Highway along the Trishuli riverside. 7 to 8 hours drive will take you back to Kathmandu. At night, you get the opportunity to impart encounters to your aides or companions with supper at the lodging. "
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
            dura="Drive (6-7 hrs)"
            />
            <Accordion 
            title="Day 11 : International Departure "
            content="It is now time to say goodbye. You will be driven to the airport for your departure with a heartwarming farewell. You will be provided breakfast before your departure from the hotel."
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
           
            />
              
            <StickyForm
            title="BOOK NOW !!!"
             originalPrice="INR 1,00,000"
            discountedPrice="INR 75,000"
            discountPercentage={26}
            saleType="FREEDOM SALE"
            onSubmit={handleSubmit}
            />
        
            <Footer/>
        </>

    );
}
export default Langtang;