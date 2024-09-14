import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Maldives = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/gqn3bj02wkzrf4ux4qb2s4f2t4qx_397483443.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/0xslw912myma558h3ny6lschhvjs_381fa3d6.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/skolwko3bywghhriotu5qks7nd2j_world-sports-arena.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/jd2t9xu9y45i1cwd5r17kvyrqjod_bee91aa3.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/son51fpho4ynjsp2dps98hfgd4a9_38bcdca4.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/p27p0euft1ibo93i8ve2t75u4v0f_e3d87b88%20-222222.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/t6jlv54m22lvlpmx6vuusqbhwu6c_711861e7.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/3mubhopgy58rdgmpdevsacxb2as5_shutterstock_1065506156.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/w5w3v93y56715bqe67gnvxbp0mbv_shutterstock_768773560.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/k76n5omfhex48havmeduim3rnqio_shutterstock_1645512889.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/coq6aqqv1lvqhwc27j2xvjaxbudu_shutterstock_284927267.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/amw9dvnf4xrab7g9jac6vi6677r0_shutterstock_1493491943.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/79733y14y7s0ehnw42uaxiuu4wvl_shutterstock_210586210.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/mf4o4n6zsqo3c9al8wh99d08aud5_shutterstock_1382366879.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Maldives', 
            image: 'https://media1.thrillophilia.com/filestore/qbuowws22pusloeedlxdpeh9xbie_shutterstock_2403376189.jpg?h=252&w=auto&dpr=1.4875000715255737'
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
                heading="Siyam World Resort, Maldives"
                para="The Maldives is a tropical paradise located in the Indian Ocean, known for its stunning white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs. Comprising over 1,000 small islands, it’s a popular destination for luxury resorts, honeymooners, and diving enthusiasts. The Maldives offers a tranquil escape, with its unique overwater bungalows, abundant marine life, and breathtaking sunsets. Beyond its natural beauty, the Maldives is also rich in cultural heritage, with a history influenced by South Asian, Arab, and African traders."
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Relax in spacious villas with lagoon or ocean access."
                li2="Indulge in diverse gourmet dining with global and local tastes"
                li3="Enjoy diverse sports, from water activities to tennis."
                li4="Rejuvenate at a luxury spa with soothing treatments and therapies."
                li5="The Maldives offers a tranquil escape, with its unique overwater bungalows, abundant marine life, and breathtaking sunsets."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 : Arrival in Maldives | Day at Leisure"
                content="Welcome to the Maldives! Upon arrival at the Velana International Airport, get transferred to your luxury resort via seaplane. Post check-in, spend your day at leisure, where you can relax or engage in the experiences of the resort. You can visit the Gaadiya, a stall that offers local delicacies, and indulge in a delightful array of snacks. Also, you can enjoy fire dances, glow parties, & more to experience the Maldivian nightlife. Later, return to your villa for an overnight stay."
                
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Seaplane From => Velana International Airport To => Water Villa with Pool & Slide at Siyam World in Maldives"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Water Villa with Pool & Slide at Siyam World in Maldives"


                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Lunch at Water Villa with Pool & Slide at Siyam World in Maldives And Dinner at Water Villa with Pool & Slide at Siyam World in Maldives"
            />
              <Accordion 
                title="DAY 2 : A Day to Indulge in Thrilling Water Sports at the Resort"
                content="Today, enjoy your breakfast and spend the rest of your day at leisure. You can engage in thrilling water activities like the world’s first underwater jet pack and explore the stunning Underwater World. Also, you can hop on a Seabreacher, which is an extraordinary semi-submersible vessel that leaps over, dives under, and carves through waves. You can also try cycling in water with the world’s first hydrofoil e-bike. After a day full of adventure, return to your villa."

                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Water Villa with Pool & Slide at Siyam World in Maldives"
                
                Over="fa-solid fa-utensils"
                OverNight="Meal"
                hotel="Lunch at Water Villa with Pool & Slide at Siyam World in Maldives"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Dinner at Water Villa with Pool & Slide at Siyam World in Maldives"

            />
             <Accordion 
                title="DAY 3 : A Day Filled with Experiences at the Resort"
                content="In the morning, you can indulge in the yoga sessions to start your day with a sense of peace. Also, you can take part in Zumbini classes that engage kids and teens with music, dance, and educational tools. Next, you can enjoy stunning pool parties at Siyam World or enjoy playing a football match at the football ground. Also, you can rent a Moke and explore the island, or you can experience the thrill of a go-kart track around the island. Conclude your day with a peaceful walk to your villa."
                
                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Water Villa with Pool & Slide at Siyam World in Maldives"
                
                Over="fa-solid fa-utensils"
                OverNight="Meal"
                hotel="Lunch at Water Villa with Pool & Slide at Siyam World in Maldives"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Dinner at Water Villa with Pool & Slide at Siyam World in Maldives"


            />
            <Accordion 
                title="DAY 4 : Departure Day"
                content="After checking out, you'll be transferred from Siyam World Resort to the airport by seaplane. Also, soak-in the breathtaking aerial view of the Maldives and upon arrival at the airport, board your flight back home. This marks the end of your amazing trip!"
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Seaplane From => Water Villa with Pool & Slide at Siyam World in Maldives To => Velana International Airport"
                
                
                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Water Villa with Pool & Slide at Siyam World in Maldives"
               
            />
           
            <StickyForm 
            title="Siyam World Resort, Maldives"
            originalPrice="INR 1,37,486"
            discountedPrice="INR 1,05,759"
            saleType="Best Offer!!"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Maldives;