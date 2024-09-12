import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Bali = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/xd76elx22080yds0m97w8thh6kvw_shutterstock_459781222.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/9imq1yroyvb3vealbz87u6n38cfe_shutterstock_2246108303.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/gm4z6h3ftihhgfjz5wv0dkxygzy1_Tanah%20Lot%20Temple.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/43rkds84d7pz4kjvrrlmjzu6jiaz_Alas%20Kedaton-1.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/a1tvt1ppc2hvvmht3k2tbqbfc0bz_shutterstock_485756020.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/jayxq6r23hkk2898go4nd3uhfylf_shutterstock_2377723489.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/g4bh877gq989p4c5j6gwklcbct9v_shutterstock_639746914.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/to6ggx4y63cvowgdpjn04qqjmfir_shutterstock_450911629.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/dkqhxqx8b8p6cy2cv2t191vc7uta_shutterstock_662627050.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/m7c5upsav32okdknvsqopp0oq829_swing.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/2c4gsvjx6ewmkfj69yem24289bdg_shutterstock_2266682373.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Bali', 
            image: 'https://media1.thrillophilia.com/filestore/vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
      ];
    
      const homePageSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
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
                heading="Escape to Bali | Temple, Terraces and Tropical Shores"
                para="Bali, often referred to as the Island of the Gods,is a tropical paradise located in Indonesia. Renowned for its stunning beaches, vibrant culture, and lush landscapes, Bali offers a unique blend of natural beauty and rich traditions. Visitors can explore ancient temples, surf world-class waves, and immerse themselves in the island's lively arts scene. With its warm hospitality, diverse culinary experiences, and breathtaking sunsets, Bali is a dream destination for travelers seeking both adventure and relaxation"
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Discover Bali’s charm, from Ubud’s serene rice terraces and vibrant arts scene to Kuta’s lively beaches, offering a perfect blend of culture and adventure."
                li2="Admire the stunning Tegenungan Waterfall, where cascading waters create a refreshing oasis surrounded by lush greenery, perfect for a scenic escape."
                li3="Feel the thrill at the Bali Swing, where you soar above lush jungles and rice terraces, capturing breathtaking views and unforgettable moments in the heart of nature"
                li4="Witness the mystical beauty of Tanah Lot, an iconic sea temple perched on a rock formation, and soak-in the stunning ocean views."
                li5="Marvel at the ancient Balinese architecture of the stunning Uluwatu Temple, perched dramatically on a cliff, offering panoramic ocean views."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 : Arrival in Ubud | Day at Leisure"
                content="Welcome to Bali! Upon arrival at Ngurah Rai Airport, get transferred to your hotel in Ubud. Post check in, spend the rest of your day at leisure, where you can relax or explore the city on your own. You can visit the ancient Goa Gajah Temple, known for its intricate cave carvings, & you can witness a stunning collection of exotic birds at the Bali Bird Park. Also, you can indulge in thrilling rides at Waterbom Waterpark, Bali's top water park before returning to your hotel for an overnight stay."

                

                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan, SUV or similar From => Ngurah Rai To => Deluxe Hotel in Ubud"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Ubud"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast included"
            />
              <Accordion 
                title="DAY 2 : Kintamani Highlighlands with Tegallalang Rice Terraces & Tegenungan Waterfall"
                content="In the morning, board your transfer to explore Central Bali. Start with a visit to the stunning Tegenungan Waterfall and admire the lush Tegallalang Rice Terraces, renowned for their amazing tiered beauty. Proceed to Kintamani Highlands and soak-in the breathtaking views of Mount Batur and its caldera. Also, experience the rich flavors of Luwak coffee (at an extra cost) and enjoy the exhilarating Bali Swing for an unforgettable thrill. Later, get transferred to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan, SUV or similar From => Deluxe Hotel in Ubud ====> Kintamani With Bali Jungle Swing Combo Tour ====>  To => Deluxe Hotel in Ubud "
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Kintamani With Bali Jungle Swing Combo Tour - Kintamani | Coffee Plantation | Tegenungan Waterfall | Tegalalang Rice Terrace | Bali Jungle Swing | Local Lunch on a Private basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Ubud"

            />
             <Accordion 
                title="DAY 3 : Transfer to Kuta | Bali Temple Tour with Monkey Forest"
                content="Today, after checking out from your hotel, get driven to Alas Kedaton Monkey Forest, a serene sanctuary, and observe playful long-tailed macaques in their natural habitat. Next, visit the iconic Tanah Lot Temple, perched atop a dramatic sea rock formation, and soak-in the stunning coastal views. Continue to Taman Ayun Temple, a beautiful royal temple known for its scenic gardens and stunning sunset views. Later, get transferred to your hotel in Kuta for check-in and a comfortable overnight stay.
                =====> Check Out from Deluxe Hotel in Ubud"
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan, SUV or similar From => Deluxe Hotel in Ubud To => Ketadon Monkey Forest with Tanah Lot Sunset Tour | Bali"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Ketadon Monkey Forest with Tanah Lot Sunset Tour | Bali - Taman Ayun | Tanah Lot Sunset Tour on a Private basis"

                Time="fa-solid fa-car"
                TimeDetail="Private Transfer"
                dura="Transfer in Sedan, SUV or similar From => Ketadon Monkey Forest with Tanah Lot Sunset Tour | Bali To => Deluxe Hotel in Kuta"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in  Ubud"

            />
            <Accordion 
                title="DAY 4 : South Bali Sightseeing Tour"
                content="Today, board your transfer to Tanjung Benoa Beach, offering an exciting range of water sports. Once there, dive into thrilling activities like jet skiing, parasailing, and banana boat rides amidst a lively atmosphere. Then, visit the iconic Uluwatu Temple, perched dramatically on a cliff 70 meters above sea level and one of Bali's six key sea temples. Also, marvel at its intricate architecture and soak-in its peaceful atmosphere. Later, get driven to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan, SUV or similar From => Deluxe Hotel in Kuta ====> Water Sports with Uluwatu Temple | Bali ====> To =>Deluxe Hotel in Kuta"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Water Sports with Uluwatu Temple | Bali on a Private basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in  Kuta"
            />
            <Accordion 
                title="DAY 5 : Nusa Penida West Tour"
                content="In the morning, get transferred to Sanur Harbor and board a speedboat to Nusa Penida. Start by visiting Kelingking Beach, renowned for its T-Rex-shaped cliff, and soak-in the stunning views. Next, explore Angel’s Billabong, a natural infinity pool with crystal-clear waters and continue to Broken Bay, where a breathtaking natural arch offers incredible coastal views. Also, enjoy snorkeling at Bubu Beach, famous for its vibrant marine life, before returning to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer/Shared Transfer"
                MaxAlt="Transfer in Sedan, SUV or similar From => Deluxe Hotel in Kuta ,Transfer In Speed Boat From Sanur Harbor To => Nusa Penida West Tour With 4 Beaches"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Nusa Penida West Tour With 4 Beaches"

                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer/Private Transfer"
                dura="Transfer in Speed Boat From => Nusa Penida West Tour With 4 Beaches To => Sanur Harbor , Transfer in Sedan, SUV or similar From => Sanur Harbor To => Deluxe Hotel in Kuta"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Kuta"
                
            />
            <Accordion 
                title="DAY 6 : Departure Day"
                content="IToday, after check-out from the hotel in Kuta, board your transfer to the Ngurah Rai International Airport. This marks the end of your amazing Bali trip! ========> Check Out from Deluxe Hotel in Kuta"
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan, SUV or similar From => Deluxe Hotel in Kuta  To => Ngurah Rai"
               
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Kuta"
            />
             
          
            <StickyForm 
            title="Wonders of Thailand | Culture, Corals and Coastlines"
            originalPrice="INR 80,662"
            discountedPrice="INR 59,750"
            saleType="SAVE INR  20,912"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Bali;