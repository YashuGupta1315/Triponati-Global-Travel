import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Nepal = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/rakk0ug4v0ylcbiwhydlfqs0fu72_shutterstock_551112193.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/70sdbeehi7s72ngrejiehxw4u9ho_shutterstock_643770787.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/hc2uc2walvulfae51sa90juv1jiv_shutterstock_1930253279.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/5un1e0syy91seduvwab1zgifftn3_shutterstock_366785876.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/vfeorrkfnc60v7ojvhmogwdj4v6p_shutterstock_223257994.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/8vlf5jsh27jex9qy7bfbw6k58d33_shutterstock_312459785.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/fiehd8oqvlkbi8ayz66yoiiu3ueb_shutterstock_2150066949.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/cu9wn76has9fzisstew30xb3qsyd_shutterstock_132349601.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/bb8i10nyplzpwpsi1tu0n3f092d2_shutterstock_389309857.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/ly6c49zkyp45c2r38dcmqu7h5jic_shutterstock_1361496539.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/u0gidhabhudy587opru7gl1uil5m_shutterstock_647026006.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/5h1d9s3ixgxg7bwkk55gbhmejz59_shutterstock_2150067779.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/e9y0ieha2qpt9uyd4e5j06rks577_shutterstock_1746101375.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/uyqveyp4zagm1qcd3dq4eokj7iuo_shutterstock_1716285310.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Nepal', 
            image: 'https://media1.thrillophilia.com/filestore/oxvkapn7iitij8r162wttie3alip_shutterstock_1123448075.jpg?h=252&w=auto&dpr=1.4875000715255737'
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
                heading="Spiritual Journey to Nepal | Trails, Temples and Traditions"
                para="Nepal, a country nestled in the Himalayas, is a renowned destination for adventure and cultural tourism. Home to Mount Everest, the world's highest peak, it attracts trekkers and climbers from around the globe. Nepal offers a rich tapestry of ancient temples, monasteries, and vibrant festivals, reflecting its diverse cultural heritage. Popular spots like Kathmandu, Pokhara, and Lumbini, the birthplace of Buddha, provide a blend of history, spirituality, and natural beauty. Whether exploring serene lakes or trekking through rugged mountain trails, Nepal's unique charm captivates travelers seeking both adventure and tranquility."
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Explore Kathmandu's rich heritage on a full-day sightseeing tour, discovering ancient temples, bustling markets, and UNESCO World Heritage Sites."
                li2="Embark on a spiritual journey in Janakpur, tracing the cultural and historical sites associated with the Ramayana epic."
                li3="Marvel at the ancient and sacred Swayambhunath Temple, known as the Monkey Temple, with its panoramic views of Kathmandu Valley."
                li4="Visit the revered Janaki Temple, dedicated to Goddess Sita, renowned for its intricate architecture and cultural significance."
                li5="Experience the cultural and natural wonders of Pokhara on a sightseeing tour, including the World Peace Pagoda, Gupteshwor Cave, and Bindebasini Temple."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 :Arrival in Kathmandu | Visit to Swayambhunath Temple"
                content="Welcome to Nepal, 'The Land of Mount Everest'. Upon arrival at the Kathmandu airport, you will be driven to your pre-booked hotel. Check in and rest for a while. In the evening, visit the famous Swayambhunath Temple, also known as Monkey Temple. Climb the 365 steps to reach the main stupa area and enjoy panoramic views of Kathmandu city. Marvel at the beautiful architecture of the stupa and its ancient carvings depicting Buddhist deities before being transferred back to the hotel."
                
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Tribhuvan International Airport To => Deluxe Hotel in Kathmandu"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Kathmandu"


                meal="fa-solid fa-car"
                Meal="Private Transfer"
                MealDetail="Transfer in Sedan From => Deluxe Hotel in Kathmandu ===> Trip to Swayambhunath Temple ===> To => Deluxe Hotel in Kathmandu"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Trip to Swayambhunath Temple"
            />
              <Accordion 
                title="DAY 2 : Kathmandu Sightseeing"
                content="Begin your day with a hotel pickup to start your sightseeing in Kathmandu. First, explore the Durbar Square, a UNESCO World Heritage Site known for its intricately carved wooden palaces, temples, and courtyards. Next, continue to the Pashupatinath Temple, where you'll witness Hindu rituals and ceremonies along the banks of the Bagmati River. Further, visit the Boudhanath Stupa, one of the largest stupas in Nepal. Later, get driven back to the hotel."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Deluxe Hotel in Kathmandu ===> Full Day Kathmandu Sightseeing Tour ===> To => Deluxe Hotel in Kathmandu"

                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Full Day Kathmandu Sightseeing Tour"

                
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Kathmandu"

            />
             <Accordion 
                title="DAY 3 : Transfer to Janakpur | Visit the Janaki Temple"
                content="Check out from your hotel and embark on a scenic drive to Janakpur. Upon arrival, check in to the hotel and rest for a while. Later, get transferred to explore the Janaki Mandir, a magnificent temple dedicated to Goddess Sita. Admire the grand structure of the temple adorned with intricate carvings and colorful paintings depicting scenes from the Ramayana, the epic tale of Lord Rama and Goddess Sita. Later, get transferred back to the hotel. ========> Check Out from Deluxe Hotel in Kathmandu"
                
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Deluxe Hotel in Kathmandu To => Deluxe Hotel in Janakpur"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Janakpur"


                meal="fa-solid fa-car"
                Meal="Private Transfer"
                MealDetail="Transfer in Sedan From => Deluxe Hotel in Janakpur ===> Trip to Janaki Mandir ===> To => Deluxe Hotel in Janakpur"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Trip to Janaki Mandir"
              

            />
            <Accordion 
                title="DAY 4 : Ramayana Heritage tour"
                content="This day is dedicated to the Ramayana Heritage tour, exploring Janakpur's rich cultural and spiritual significance. Begin at the Ram Sita Vivah Mandap, where the divine wedding of Lord Rama and Goddess Sita took place. Next, visit the Ram Mandir, a sanctuary dedicated to Lord Rama, and marvel at its intricate carvings depicting the narrative of the Ramayana. Continue your journey to the sacred pond of Dhanush Sagar before being transferred back to the hotel."

                meal="fa-solid fa-car"
                Meal="Private Transfer"
                MealDetail="Transfer in Sedan From => Deluxe Hotel in Janakpur ===> Ramayana Heritage Tour in Janakpur, Nepal ===> To => Deluxe Hotel in Janakpur"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Ramayana Heritage Tour in Janakpur, Nepal"
               
                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Deluxe Hotel in Janakpur"
               
            />
            <Accordion 
                title="DAY 5 : Transfer to Pokhara from Janakpur | Day at Leisure"
                content="Check out from your hotel and embark on a picturesque journey to Pokhara. Witness the landscape changing from flat plains to rolling hills, passing through lush green scenery and terraced fields. Upon reaching Pokhara, settle into your hotel and relax for the day. You can explore the serene Phewa Lake and enjoy a boat ride while admiring the peaceful views of the surrounding mountains. Later, return to the hotel. ======> Check Out from Deluxe Hotel in Janakpur"

                
                meal="fa-solid fa-car"
                Meal="Private Transfer"
                MealDetail="Transfer in Sedan From => Deluxe Hotel in Janakpur  To => Deluxe Hotel in Pokhara"
                
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Pokhara"

                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Deluxe Hotel in Pokhara"
               
                
            />
            <Accordion 
                title="DAY 6 : Pokhara Sightseeing | Transfer to Sarangkot"
                content="Post hotel check out, get transferred to explore Pokhara. First, visit Pumdikot Mahadev. Then, continue to the World Peace Pagoda, a peaceful Buddhist stupa that promotes global harmony. Next, see Devi's Fall, where the Pardi Khola river flows into an underground tunnel. Conclude your tour with Gupteshwor Cave and the ancient Gupteshwor Temple hidden inside the cave before continuing your journey to Sarangkot. Upon arrival in Sarangkot, check in to your hotel and rest for the day."

                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Deluxe Hotel in Pokhara To => Full Day Pokhara Sightseeing Tour"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Full Day Pokhara Sightseeing Tour"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Hotel Pristine Himalaya in Sarangkot"


                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pokhara"

               
            />
          
             <Accordion 
                title="DAY 7 : Transfer to Kathmandu | Day at Leisure"
                content="Wake up early to embark on a journey to Kathmandu. Enjoy the scenic drive, passing through diverse landscapes, quaint villages, terraced fields, and lush green hills. Consider stopping at local viewpoints or cafes along the way to soak in the surroundings. Upon arrival in Kathmandu, check into your hotel and relax for the day. ======>  Check Out from Deluxe Hotel in Pokhara"
                
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Hotel Pristine Himalaya in Sarangkot To => Deluxe Hotel in Kathmandu"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Kathmandu"


                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pokhara | Breakfast at Hotel Pristine Himalaya in Sarangkot"

            />
              <Accordion 
                title="DAY 8 : Departure Day"
                content="Bid adieu to Kathmandu while you check out from the hotel. Later, get transferred to the Tribhuvan International airport to board your flight back home. =====> Check Out from Deluxe Hotel in Kathmandu"

                  
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Deluxe Hotel in Kathmandu  To => Tribhuvan International Airport "
              
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Kathmandu"  
            />
          
            <StickyForm 
            title="Spiritual Journey to Nepal | Trails, Temples and Traditions"
            originalPrice="INR 52,000"
            discountedPrice="INR 40,000"
            saleType="SAVE INR 12,000"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Nepal;