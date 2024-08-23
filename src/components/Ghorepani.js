import React from "react";
import ImageGallery from "./ImageGallery";
import TrekDetail from "./TrekDetail";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
 
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/03/ghorepani-banner.jpg",
        alt: "Ghorepani Poonhill Annapurna Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/03/bouddhanath.jpg",
        alt: "Ghorepani Poonhill Annapurna Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/03/kathmandu-square.jpg",
        alt: "Ghorepani Poonhill Annapurna Trek",
    },
    {
        src: "https://hsj.com.np/uploads/0000/386/2020/05/03/poonhill.jpg",
        alt: "Ghorepani Poonhill Annapurna Trek",
    },

];
const Ghorepani=()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return(
        <>
            <Navbar/>
            <ImageGallery images={images} />
         
            <TrekDetail 
            heading="Ghorepani Poonhill Annapurna Trek"
            para="An incredible journey to Poonhill is one of the best-organized trips to see the sights of Himalayas of Nepal and green vegetation of Nepal offered by Himalayan Social Journey. A short hike or a trek to Poonhill will soothe your eyes as snowcapped mountain come into your view.The Ghorepani hill trek is a short week trek to Ghorepani Poonhill at the foothills of the Annapurna. Enjoy wandering through a stunning mountain landscape and enchanting villages of the Gurung in thick forests full of birds, deep sub-tropical valleys, set under the Annapurnas, dominated by the picturesque fluted summit of Machapuchare (Fish Tail Top). From the Poon Hill (3.210 m above the village of Ghorepani), you can enjoy the best view of the huge sunrise of the Annapurna, Dhaulagiri Nilgiri, Hiunchuli or Machhapuchhre, from which you can appreciate the scenery, the beautiful history and nature on some of the world's most scenic roads."
            Rclass="fa-solid fa-mountain-sun"
            region="Region"
            regionDetail="Annapurna Region"
            Dclass="fa-regular fa-clock"
            duration="Duration"
            days="9 days"
            Gclass="fa-solid fa-medal"
            grade="Grade"
            gradeDetail="2-Moderate"
            Tclass="fa-solid fa-location-dot"
            transport="Transportation"
            transDetail="Tourist Bus, Jeep, Private Car Or Plane Flight (optional)"
            Aclass="fa-solid fa-person-hiking"
            activity="Activity Per Day"
            activityDetail="4-6 Hours Walking"
            Mclass="fa-solid fa-umbrella-beach"
            altitude="Max Altitude"
            altitudeDetail="3210m"
            Bclass="fa-solid fa-smog"
            season="Best Season"
            month="Feb, Mar, April, May, June, Sep, Oct, Nov & Dec."
            head="Highlights"
            li1="Capture the mesmerizing views of the ever-smiling snow-covered peaks"
            li2="Challenging yet rewarding Larkya La Pass crossing with breathtaking panoramas."
            li3="Walk past the forests of rhododendrons, magnolia, and other wild flora and fauna."
            li4="Dress up in traditional Gurung costumes, and click pictures, too."
            li5="Beautiful closer views of the Annapurna, Machhapuchhre and Dhaulagiri range"
            li6="Cherish a clear overview of the Annapurna, Dhaulagiri, Lamjung Himal, Gangapurna and Manaslu ranges."
             />
            <Accordion 
            title=" Day 1 : Arrival Day"
            content="Upon reaching Kathmandu, our representative will greet you at the airport, providing a warm welcome before transferring you to your hotel. Use this day to acclimate to the new time zone and dive into the vibrant atmosphere of kathmandu. An orientation program is scheduled for 5 pm to help to get acquainated with your surroundings."
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
            title="Day 2 : Full Day Sightseeing tour of Kathmandu Valley"
            content="Following breakfast, our knowledgeable tour guide from Himalayan Social Journey will escort you on a captivating  journey to explore Nepal's UNESCO-listed world heritage sites. Today's itinerary includes visits to the renowned Pashupatinath temple, the majestic Bouddhanath stupa, the tranquil Swoyambhunath Stupa and the historic Patan Durbar Square."
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
            title="Day 3 : Drive to Pokhara from Kathmandu"
            content="Starting from Kathmandu, travelers typically take a scenic drive to Pokhara, the gateway to the Annapurna region. Once we arrive, we'll be greeted by the stunning sights of this picturesque city. Our day in Pokhara will be dedicated to soaking in its natural beauty and exploring all that it has to offer. "
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Pokhara (822m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Lake Star or Hotel Mount View"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="Drive (7-8 hrs)"
            />
            <Accordion 
            title="Day 4 : Drive to Tikedhunga via Pokhara"
            content="After enjoying breakfast, we'll embark on a scenic drive to Tikhedhunga, starting from Pokhara where we'll transition to a jeep for the journey. Along the way, we'll experience the breathtaking landscapes leading to the reowned tourist destination. As we approach, the rural villages of the Annapurna region will gradually come into view, offereing a glimpse into the authentic charm of Nepal."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Tikedhunga (1480m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Guest House"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="Drive 6-7 hrs, Trek-3-4 hrs"
            />
            <Accordion 
            title="Day 5 : Hike to Ghorepani via Ulleri"
            content="Following breakfast, our journey commences as we ascend towards Ulleri, traversing verdant jungles,meandering across quiant streams, passing by charming hamlets, and trekking amidst picturesque terraced farmlands. Transitioning onward to Ghorepani from the delightful village of Ulleri, we'll be greeted  by breathtaking panaromas of the Annapurnas, Machapuchre, and Hiunchuli peaks. Continuing our path,we'll traverse gradually toward Nanghethani (2460m), enveloped by the serene ambiance of rhododendron forests. Finally after another hour of tranquil trekking, we'll arrive at the enchanting village of Ghorepani nestled atop the ridgeline."            
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Ghorepani(2,800 m)"
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
            title="Day 6 : Hike to Poonhill and Trek to tadapani"
            content="Experience the breathtaking beauty of a sunrise hike to Poon Hill, offering panoramic views of10 majestic peaks. After soaking in the scenery, we'll journey back to the guest house before continuing our trek to Tadapani. Along the way, we'll traverse stone staircases, newly constructed roads, and lush jungle paths, embracing the varied terrain and natural wonders."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Poonhill(3,214m)"
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
            title="Day 7 : Drive to Pokhara via Ghandruk"
            content="Today, our journey progresses from Tadapani to the charming Gurung community settlement of Ghandruk. After soaking in the scenic beauty of this village, we'll return to Pokhara by private vehicle,capturing memories along the way."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Pokhara (822 m)"
            Over="fa-solid fa-bed"
            OverNight="Overnight"
            hotel="Hotel Lake Star or Hotel Mount View"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
            Time="fa-regular fa-clock"
            TimeDetail="Duration"
            dura="5-6 hrs"
            />
            <Accordion 
            title="Day 8 : Drive back to Kathmandu "
            content="Today, we will drive back to kathmandu, exporing lots of natural beauties. Once we reach Kathmandu, we can visit some cities of Kathmandu as well."            
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
            dura="6-7 hrs"
            />
            <Accordion 
            title="Day 9 : Departure Day"
            content="This marks the day of your departure. Our hotel representive will accompany you to the airport. We hope you have a fantastic time in Nepal."
            Max="fa-solid fa-mountain-sun"
            MaxAltitude="Max Altitude"
            MaxAlt="Kathmandu"
            meal="fa-solid fa-utensils"
            Meal="Meal"
            MealDetail="Breakfast included"
          
            />
            <StickyForm
            title="BOOK NOW !!!"
             originalPrice="INR 60,000"
            discountedPrice="INR 45,000"
            discountPercentage={26}
            saleType="FREEDOM SALE"
            onSubmit={handleSubmit}
            />
        
            <Footer/>
        </>

    );
}
export default Ghorepani;