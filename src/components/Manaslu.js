import React from "react";
import ImageGallery from "./ImageGallery";
import TrekDetail from "./TrekDetail";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
 
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/04/manasalu-banner1.jpg",
        alt: "manasalu-camp",
    },
    {
        src: "https://hsj.com.np/uploads/0000/1/2020/02/22/manasalu.jpg",
        alt: "manasalu-camp",
    },
    {
        src: "https://hsj.com.np/uploads/0000/1/2020/02/22/manasalu-trek-1.jpg",
        alt: "manasalu-camp",
    },
    {
        src: "https://hsj.com.np/uploads/0000/1/2023/01/21/manasalu-trek.jpg",
        alt: "manasalu-camp",
    },

];
const Manaslu=()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return(
        <>
            <Navbar/>
            <ImageGallery images={images} />
         
            <TrekDetail 
            heading="Manaslu Circuit Trek"
            para="The Manaslu circuit trek stands as an unparalleled adventure amidst the awe-inspiring landscapes of Nepal. This trek takes you through the pristine beauty of the Manaslu Conservation Area, offering a breathtaking glimpse of the world's eighth-highest mountain, Manaslu. With its 13-day itinerary, the Manaslu Circuit Trek commences at Maccha Khola, leads you through awe-inspiring wonders, and concludes at Beshi Sahar. Moreover, for the avid adventurers, the trek can be extended to 22 days by adding a side trekking to the enchanting Tsum Valley."
            Rclass="fa-solid fa-mountain-sun"
            region="Region"
            regionDetail="Manaslu Region"
            Dclass="fa-regular fa-clock"
            duration="Duration"
            days="15 days"
            Gclass="fa-solid fa-medal"
            grade="Grade"
            gradeDetail="3"
            Tclass="fa-solid fa-location-dot"
            transport="Transportation"
            transDetail="Tourist Bus, Private Jeep"
            Aclass="fa-solid fa-person-hiking"
            activity="Activity Per Day"
            activityDetail="5-6 Hours Walking"
            Mclass="fa-solid fa-umbrella-beach"
            altitude="Max Altitude"
            altitudeDetail="5300m"
            Bclass="fa-solid fa-smog"
            season="Best Season"
            month="Spring (March to May) and Fall (September to November)"
            head="Highlights"
            li1="Stunning mountain vistas, including Mt. Manaslu, the world's eighth highest peak."
            li2="Challenging yet rewarding Larkya La Pass crossing with breathtaking panoramas."
            li3="Immersion in diverse cultures of Gurungs, Tamangs, and Tibetans in remote villages."
            li4="Authentic teahouse stays for interaction with locals and genuine Himalayan hospitality"
            li5="Abundant flora and fauna in the protected Manaslu Conservation Area."
            li6="Stunning views world-renowned peaks like Manaslu, Himlung, and Annapurna II."
             />
            <Accordion 
            title=" Day 1: Your arrival to Tribhuwan International Airport and transfer to hotel."
            content="Arrive in Kathmandu at any time. Upon your arrival, representative will be picked up from airport then you will be transferred to a hotel for check in.  Welcome dinner at hotel in the evening."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu (1,300 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Dinner included"
            />
            <Accordion 
            title="Day 2 : Full day sightseeing tour of Kathmandu valley"
            content="After breakfast, our guide will take you to different attractions of Kathmandu Valley. Today, you will visit, Swoyambhunath, Boudhanath, Pashupatinath and Patan Durbar Square. Overnight at Himalayan Suite Hotel. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu (1,300 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Dinner included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="4-5 hrs"
            />
             <Accordion 
            title="Day 3 : Drive Kathmandu to Machha Khola"
            content="Today, you'll start your journey towards Machhakhola, a small village situated in the Gorkha District of Nepal.The drive from Kathmandu to Machhakhola is quite long, taking around 7 hours to cover the distance of approximately 200 kilometers.Despite the dusty and bumpy road, you'll be rewarded with breathtaking landscape views from your window seat during the journey. Along the way, there are numerous rest stops where you can take short breaks and enjoy meals. Your day's adventure will conclude with a comfortable overnight stay at one of the welcoming teahouses in Maccha Khola."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Machha Khola (900m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="7-8 hrs"
            />
            <Accordion 
            title="Day 4 : Machha Khola to Jagat (special permit start)."
            content="The next day, start the trek along the twisting Budi Gandaki river, spotting monkeys and langurs in the forest trail. Explore Gurung villages like Lower Khorlabeshi, where shepherds wear traditional Bokkhu capes. Reach Tatopani for warm showers to relax. Cross a new suspension bridge to Doban, avoiding a difficult 3-hour climb. Traverse a long cantilever bridge to Jagat, a charming Gurung village with flagstone paths. Verify your trekking permits at the check post, as you enter the restricted region."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Jagat (1,340 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="6-7 hrs"
            />
            <Accordion 
            title="Day 5 : Jagat to Deng"
            content="After breakfast in Jagat village, the trek will take you through diverse landscapes, including dense sub-tropical forests, small rivers, and charming rustic villages.
            Begin by ascending over a rocky ridge to Salleri, followed by a descent to Sirdibas. As you continue, the valley widens, and you'll encounter the Ghatta Khola river. Walking upstream, you'll come across a long suspension bridge in Philim, a large Gurung village. Heading north just above the lowest house in the village, the trail remains fairly level, guiding you through millet fields to Ekle Bhatti.Next, the route enters a steep and uninhabited gorge. Descend to the grassy slopes, cross the Budhi Gandaki river, and continue along the west bank before crossing to the east side and back to the west side again. The trail widens as you proceed through the valley, passing through bamboo forests until you reach the Deng Khola river. After crossing the river, you'll arrive at the quaint village of Deng."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Deng (1,860 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="6-7 hrs"
            />
            <Accordion 
            title="Day 6 : Deng to Namrung. "
            content="Today, we leave Deng and cross Budhi Gandaki and ascend our way to Rana. The trail passes through mani walls and towards to Ghap. You will traverse through stunning gorge, valley, villages and finally reach Namrung."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Namrung (2,630 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="6-7 hrs"
            />
            <Accordion 
            title="Day 7 : Namrung to Lhogaon"
            content="Today, we leave Deng and cross Budhi Gandaki and ascend our way to Rana. The trail passes Namrung village is a good viewpoint for Siring and Ganesh Himal and from the village one can also see Mt. Himal Chuli in the south. We climb steadily and pass through forests and reach Lihi, a fine village with many chortens and barley terraces. The trail drops and crosses the side valley of Simnang Himal with Ganesh Himal always close by. We further pass through Sho and then finally reach Lho Village."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Lhogaon (2,900 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5-6 hrs"
            />
            <Accordion 
            title="Day 8 : Lhogoan to Sama Village "
            content="Today, you will leave Lho village and make the journey towards, Sama Gaun. The trail is beautiful with forest, deep valleys and magnificent view of Manaslu and shimmering large glaciers."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Sama Village (3,556 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5-6 hrs"
            />
            <Accordion 
            title="Day 9 : Hike from Sama Village to Manaslu Base Camp and back to Sama Village "
            content="Hike to Manaslu Base Camp, which is situated north of Sama Gong. Follow the trail past Birendra Tal and turn left onto the base camp track. The climb may be a bit challenging due to the altitude, so remember to stay hydrated and take it slow. As you make your way north of Manaslu glacier, you'll reach the base camp at 4,400m / 14,435, and then return."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Sama Village (3,556 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="7-8 Hrs Trek"
            />
            <Accordion 
            title=" Day 10 : Sama Village to Samdo Village "
            content="Today, we descend to the Budhi Gandaki River, that has turned north and follow it to a bridge over a side stream. The trail to the left leads to the Manaslu Base camp. The Larkya la Trail passes several mani walls as the valley begins to widen. It is an easy trail on a shelf above the river passing the juniper and birch forests of Kermo Kharka. We drop off the shelf, cross the Budhi Gandaki on a wooden bridge and climb steeply onto a promontory between two forks of the river. From a stone arch we can view a large white kani gate. Finally passing through the kani we find Samdo."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Samdo (3,690 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5-6 hrs"
            />
            <Accordion 
            title=" Day 11 : Samdo to Dharmasala "
            content="Today, you will walk down the edge, cross the wooden bridge over Budi Gandaki and start walking upwards. Upon crossing two streams and witnessing the Larkya Glacier we go around the valley of the Salka Khola and climb up again to the stone guest house (4450 m), which is not a lodge but a kind of shelter called Dharmshala, also known as Larke Phedi. The short walk today also leaves plenty of time for acclimatization and relaxing in the afternoon."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Dharmasala (4450 m)"
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
            title=" Day 12 : Dharmasala to Bhimthang via larkya la pass "
            content="This is a special day as you will walk to the trail’s highest point,  as you ascend to the trail's highest point, the Larkya La Pass (5,160m / 16,929 ft). Although challenging in adverse weather and snow, it is feasible with an early start around 4 am. Walking steadily is the key to successfully crossing the pass before afternoon. The reward awaits at the top with stunning views of Himlung (7,126m / 23,379 ft) near Tibet, Kang Guru (6,981m / 22,903 ft), and Annapurna II (7,937m / 26,040 ft) in the Annapurna Range.Take in the beauty of the pass before descending for about 3 hours towards Bimthang, where you will spend the night. On your way down, marvel at the majestic icefalls and surrounding mountains, including Pongkar Tal nestled between the Pongkar and Salpu Danda Glaciers."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Bhimthang (3700 M)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5-6hrs"
            />
               <Accordion 
            title=" Day 13 : Bhimtang to Dharapani"
            content="On the final day of your Manaslu trek, you'll be enchanted by the lush forests abundant with diverse flora and fauna, including vibrant rhododendron bushes.As you descend, you'll cross the Dudh Khola and make your way to Karche for a delightful lunch. Be prepared to witness signs of a glacial flood, with tree trunks scattered and riverbanks altered, making the trail rough. The route leads to Gurung Goa Village, the first village since Samdo.Passing through picturesque agricultural fields and charming oak and rhododendron copses, the valley becomes even more inviting. Stay on the north (true right) bank until you reach Tilije. From there, continue your leisurely stroll towards Dharapani, cherishing the last moments of your memorable Manaslu trek."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Dharapani (1860 )"
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
            title="Day 14 : Dharapani to Kathmandu"
            content="After your trek, you'll board a convenient jeep ride from Dharapani  to Beshi Sahar. From Beshi Sahar, you'll embark on a comfortable journey back to Kathmandu, which takes around 6 to 7 hours. Once in Kathmandu, you can unwind and relax spa and massage at Himalayan Suite Hotel."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu (1300 M )"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Himalayan Suite Hotel"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="6 - 7 hrs drive"
            />
               <Accordion 
            title=" Day 15 : International Departure or start new trip"
            content="We will arrange your transfer to the Kathmandu airport for your return flight to your home country or to start your next adventure."
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
export default Manaslu;