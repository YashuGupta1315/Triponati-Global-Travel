import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Paris = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/lkfeq29j545x49q7b31uz28cp35s_shutterstock_1926669674.jpg?h=262&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/0ycid7jvhtjfwrhiab354xoeposx_Downpic.cc-514786130.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/xe2yv2l1qs4w94aab5jaz7dz1kcq_shutterstock_536482078.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/q5a9wayk6o4opfkx9pa8slrtqqz8_shutterstock_74901310.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/z6cpdnxapn5ernlt4ongimubkogz_shutterstock_722699410.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/nkxkvptztjejaaphsyagwd6uaina_shutterstock_374994151.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/oeko8me2r1tlrwpifv9nq4wzyj2b_shutterstock_1359489737.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/gdnbtizejt9xo2cl0fsi44uis0qi_Downpic.cc-480295417.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/goefzh8ad3023okpplja9x9xrr8r_Downpic.cc-73636359.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/0jzgw845ssxdfhjstxdbru9bylhv_paris%205.png?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/8ndu0ivpb0ppjsxalnfn1yxnvvs1_Downpic.cc-image396145763.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/xgxq2xmcy2mtekkvewj8w0blbm7m_pexels-pierre-blach%C3%A9-3009663.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/jowwugrwchukijkhoi92fxlock6v_paris%209.png?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/w1dwfnb8bwiu8yldd4r0x1eh8ass_paris%208.png?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Paris', 
            image: 'https://media1.thrillophilia.com/filestore/7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
      ];
    
      const homePageSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };
      const handleSubmit = (event) => {
        event.preventDefault();
       
      };
    
      return(
        <>
            <Navbar/>
            <HeaderSlider slides={homePageSlides} settings={homePageSettings} />
            <InternationalDetails 
                heading="Best of Swiss And France | FREE Eiffel Tower Summit Access"
                para="Paris, the capital of France, is often called the City of Light and is renowned for its rich history, art, and culture. It is home to iconic landmarks like the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. Paris is also famous for its charming streets, world-class cuisine, and vibrant café culture. The city's blend of old-world elegance and modern innovation makes it a beloved destination for travelers from around the globe."
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Experience the refreshing mist and hear the roar of the most powerful waterfall in Europe, the Rhine Falls, during your exhilarating and unforgettable boat ride adventure."
                li2="Ride the historic cogwheel railway to the Queen of the Mountains, Mt. Rigi, offering panoramic views of the Swiss Alps and the breathtaking natural beauty of Switzerland."
                li3="Admire the glory of one of the most famous landmarks in the world, the Eiffel Tower, also known as the 'Iron Lady', and witness its architectural brilliance."
                li4="Enjoy a boat ride on the crystal-clear waters of Lucerne Lake and admire stunning mountain landscapes, creating an unforgettable journey through Switzerland's natural beauty."
                li5="The city's blend of old-world elegance and modern innovation makes it a beloved destination for travelers from around the globe."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 :Arrival in Paris"
                content="Welcome to the City of Light, Paris! Upon landing at the Paris International Airport, complete your immigration process and board your transfer to reach your hotel for check-in. Post check-in, enjoy the rest of the day at your leisure. You can explore iconic attractions such as the beautiful Montmartre or stroll through the lively Rue Montorgueil with its bustling cafes and shops. Later, return to your hotel on your own for an overnight stay."
                
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Paris Beauvais Tillé Airport To => Deluxe Hotel in Paris"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Paris"


                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast included"
            />
              <Accordion 
                title="DAY 2 : Paris Hop on Hop off Tour | Eiffel Tower 2nd level tickets"
                content="In the morning, get ready to explore the beautiful city of Paris by a classic hop-on, hop-off tour. Soak-in the views from an open-top bus and get a chance to visit famous spots like the Louvre Museum, the Moulin Rouge cabaret club, and many more attractions with an informative audio commentary in the bus. Next, hop-off to visit the iconic Eiffel Tower and ascend to its 2nd level for stunning views of the city. Post Hop-on hop-off tour, return to your hotel on your own for an overnight stay."
                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Deluxe Hotel in Paris"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Paris Hop-On Hop-Off Bus Tour - Paris Hop-On Hop-Off Tootbus Tour ( 24 hours)"

          

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="Eiffel Tower Tickets, Paris - Eiffel Tower - 2nd Floor "

            />
             <Accordion 
                title="DAY 3 : Disneyland Paris Tour (Optional Tour)"
                content="In the morning, you can opt for an escape to Walt Disney World with an optional tour of Disneyland Paris. You can take local transport and reach Disneyland to soak-in the magical atmosphere. Meet your favorite Disney characters, watch the Stars fireworks show, and enjoy thrilling rides. You can explore the enchanting Disney Park or the immersive Walt Disney Studios Park, for a unique and unforgettable experience. After a fun-filled day, return to your hotel for an overnight stay."
                
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Paris"

            />
            <Accordion 
                title="DAY 4 : Transfer to Zurichr"
                content="In the morning, check-out from your hotel and head to the Paris Gare De Lyon Station to board your train for Zurich, one of the most beautiful cities in Switzerland. Upon reaching Zürich Hbf Station, use your Swiss pass to take local transport to your hotel and check-in. Then, spend the rest of the day at leisure, where you can explore a huge collection of artworks in the Kunsthaus and visit the famous Bahnhofstrasse, a vibrant street in Zurich. Later, return to your hotel for an overnight stay. =====> Check Out from Deluxe Hotel in Paris"
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Train From => Paris Gare De Lyon Station To => Zurich Station"
                
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Zurich"

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="Swiss Continuous Pass - 4 Days Pass"
                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Deluxe Hotel in Paris"
               
            />
            <Accordion 
                title="DAY 5 : Mt Rigi and Lucerne Day Trip with Boat Ride"
                content="Today, use your Swiss pass and reach Zurich Central bus Station to board the coach for Mt. Rigi. Upon reaching, enjoy a cable car ride followed by a cogwheel train to the top of Mt. Rigi. Take-in the stunning views before descending to Vitznau. Next, enjoy a scenic boat ride on the calming Lake Lucerne surrounded with mountains. Also, you can explore Lucerne on your own before transferring back to Zurich Central Bus Station. From there, return to your hotel on your own for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer  in Coach From => Zurich Central Bus Station ==> Mt Rigi and Lucerne Day Trip from Zurich With Boat Ride  ==> To => Zurich Central Bus Station"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Mt Rigi and Lucerne Day Trip from Zurich With Boat Ride on a Shared basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Zurich"
                
            />
            <Accordion 
                title="DAY 6 : Rhine Falls Boat Trip"
                content="In the morning, board a train from Zurich using your Swiss pass to reach Schaffhausenuse and witness Europe’s biggest waterfall, the Rhine Falls. Enjoy a boat ride to get close to the waterfall and feel the mist, while enjoying stunning views of the cascading water. Post-tour, you can explore Zurich and visit the Swiss National Museum, the famous FIFA Museum, and many more attractions with your Swiss pass for discounts. Later, return to your hotel on your own for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Train From => Zurich Station To => Schaffhausen Station"

                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Rhine Falls 15-Minute Boat Tour, Switzerland"
               
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Zurich"
            />
          
             <Accordion 
                title="DAY 7 : Departure Day"
                content="Today, pack your bag full of memories and get ready to check-out from your hotel. Head to the Zurich international airport for your flight back home. This marks the end of your trip. ====> Check Out from Deluxe Hotel in Zurich"

              
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Zurich"  
            />
          
            <StickyForm 
            title="Best of Swiss And France | FREE Eiffel Tower Summit Access"
            originalPrice="INR 2,55,094"
            discountedPrice="INR 1,35,200"
            saleType="SAVE INR 1,19,894"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Paris;