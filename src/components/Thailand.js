import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Thailand = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Home Slide 1', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldIdayZfI093kfMWZezJ7gOTKLiYm-zY--A&s'
        },
        { 
            id: 2, 
            title: 'Home Slide 2', 
            image: 'https://images.herzindagi.info/image/2022/Jul/places-to-visit-in-thailand.jpg' 
        },
        { 
            id: 3, 
            title: 'Home Slide 3', 
            image: 'https://etgstagingstorage.blob.core.windows.net/etgfilescontainer/etg/media/blogs/thailand/thailand-historical-landmarks-wat-plai-laem-thailand.jpg' 
        },
        { 
            id: 4, 
            title: 'Home Slide 4', 
            image: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1620250334/10-Best-Attractions-Thailand-Sukhothai-Wat/10-Best-Attractions-Thailand-Sukhothai-Wat.jpg' 
        },
        { 
            id: 5, 
            title: 'Home Slide 5', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchvKi1KFdfaYIQuotzm64TibcaxeNjzlZpw&s' 
        },
        { 
            id: 6, 
            title: 'Home Slide 6', 
            image: 'https://img.veenaworld.com/wp-content/uploads/2019/11/florian-wehde-y3sidWvDxg-unsplash.jpg' 
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
                heading="Wonders of Thailand | Culture, Corals and Coastlines"
                para="**Thailand**, often called the Land of Smiles, is a captivating blend of culture, natural beauty, and coastal charm. Renowned for its vibrant cultural heritage, Thailand offers a mesmerizing tapestry of ancient temples, bustling markets, and traditional festivals that showcase its deep-rooted customs and warm hospitality. The country's rich cultural tapestry is complemented by its stunning natural wonders, from the lush green mountains in the north to the pristine coral reefs and turquoise waters of its southern coastlines. Thailand's islands, like Phuket, Koh Samui, and the Phi Phi Islands, are famed for their picturesque beaches, vibrant marine life, and adventure-filled watersports. Visitors can explore coral gardens, dive into crystal-clear waters, or relax on sun-kissed shores, all while savoring the diverse flavors of Thai cuisine. "
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Dive into turquoise waters to explore vibrant coral reefs and diverse marine life on Coral Island, offering a perfect tropical escape."
                li2="Glide along Bangkok’s enchanting river during your Chao Phraya Dinner Cruise, savoring a traditional dinner and witnessing the glittering skyline of Bangkok."
                li3="Experience a vibrant blend of ancient temples, lively markets, and pristine beaches in Thailand, where rich cultural heritage seamlessly intertwines with breathtaking natural beauty."
                li4="Get up close with majestic tigers in a safe at the Tiger Kingdom and capture unforgettable moments with them in their natural habitats."
                li5="Encounter playful monkeys amidst the stunning white sands and crystal-clear waters of Monkey Beach, where wildlife interaction merges seamlessly with tropical paradise"
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 : Arrival in Bangkok | Transfer to Pattaya | Leisure Day"
                content="Welcome to Bangkok! Upon arrival at the airport, board your transfer and get driven to Pattaya. Upon arrival, check in to your hotel and spend your day at leisure. You can explore the city on your own and visit the Sanctuary of Truth, which features intricate carvings depicting themes from Buddhism. Also, you can relax or stroll at Jomtien Beach, known for its sandy shoreline. Next, you can visit the Art In Paradise Museum, where art defies reality. Later, return to your hotel."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan"
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Pattaya"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast included"
            />
              <Accordion 
                title="DAY 2 : Day Trip to Coral Island"
                content="In the morning, get driven to Bali Hai Pier and hop on a speedboat for Coral Island Tour. Upon arrival, witness the idyllic white-sand beaches and crystal-clear waters. Also, you can indulge in thrilling activities like snorkeling among colorful marine life or jet-skiing and parasailing. You can enjoy a leisurely stroll at Tawaen Beach. Conclude your island adventure with a scenic speedboat ride back to Pattaya, and from the pier get driven to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Toyota Commuter From => Deluxe Hotel in Pattaya To => Bali Hai Pier"
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Speed Boat From => Bali Hai Pier To => Coral Island Tour From Pattaya"
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Pattaya"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pattaya"

            />
             <Accordion 
                title="DAY 3 : Transfer to Bangkok | Chao Phraya River Dinner Cruise"
                content="Post check-out, get driven to the capital of Bangkok, Thailand. Upon arrival, check-into your hotel and relax. In the evening, get driven to Asiatique Pier and hop on your cruise on the Chao Phraya River. Then, glide past iconic landmarks like the Grand Palace and riverside markets. Next, treat your taste buds to a delicious Thai dinner onboard while enjoying Thai performances and Live Music. Afterwards, get transferred back to your hotel from Asiatique Pier."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Deluxe Hotel in Pattaya To => Super Deluxe Hotel in Bangkok"
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Super Deluxe Hotel in Bangkok"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pattaya"
                Time="fa-solid fa-car"
                TimeDetail="Transfer in Toyota Commuter"
                dura="Super Deluxe Hotel in Bangkok To => Asiatique Pier"
            />
            <Accordion 
                title="DAY 4 : Day Trip to Safari World"
                content="In the morning, get transferred to Safari World for an amazing day. Explore Thailand's largest open zoo, home to more than 400 species of animals. You can observe animals like lions, tigers, and elephants in their natural habitats at Safari World. Also, witness the dolphins and sea lions showcasing their impressive skills and variety of shows at the Marine Park. After an amazing day of encountering wildlife, get driven back to your hotel for a comfortable overnight stay."
                Max="fa-solid fa-mountain-sun"
                MaxAltitude="Activity"
                MaxAlt="Safari World Bangkok Tickets - Single Day Pass for Safari Park + Marine Park (Non-Thai Residents)"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pattaya"
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Super Deluxe Hotel in Bangkok To => Super Deluxe Hotel in Bangkok"

            />
            <Accordion 
                title="DAY 5 : Flight to Phuket | Leisure Day"
                content="Today, after check-out, get transferred to Bangkok Airport and board your flight to Phuket. Upon arrival in Phuket, get driven to your hotel. Post check-in, spend the rest of your day at leisure, where you can relax or explore the city on your own. You can step into another world at Trickeye Museum and explore its variety of themed zones. Next, you can soak-in the vibrant atmosphere of Patong Beach. Later, return to your hotel for a comfortable overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Super Deluxe Hotel in Bangkok To => Suvarnabhumi Airport"
                meal="fa-solid fa-utensils"
                
                Time="fa-solid fa-car"
                TimeDetail="Private Transfer"
                dura="Transfer in Sedan From => Phuket International Airport To => Super Deluxe Hotel in Phuket"

                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pattaya"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Super Deluxe Hotel in Phuket"
            />
            <Accordion 
                title="DAY 6 : Day Trip to Phi Phi Island"
                content="In the morning, get transferred to Phuket Marina and enjoy a journey to discover Phi Phi Islan . Once you arrive, board a speedboat to the renowned Maya Bay. Next, visit the Pileh Lagoon for a refreshing swi in its tranquil emerald waters and explore the Viking Caves' wall paintings. Continue to Monkey Beach to interac with its playful monkeys. Also, visit Phi Phi Don Island, Bamboo Islan , and Khai Nok Island before returning to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Toyota Commuter From => Super Deluxe Hotel in Phuket To => Phuket Marina"
               
                
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Speed Boat From => Phuket Marina To => Phi Phi Island Tour from Phuket"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Phuket"

                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Phi Phi Island Tour from Phuket - Phi Phi Island with lunch by Speed Boat"
            />
             <Accordion 
                title="DAY 7 : Day Trip to Tiger Kingdom"
                content="Today, board your transfer and get driven to the Tiger Kingdom, home to diverse types of tigers. Once there, encounter and get close to tigers, from playful cubs to majestic adults. Also, capture stunning photos with the tigers and learn deeply about them and their behavior before getting driven to your hotel. Later, you can head out and witness the traditional Chinese architecture of Tha Rua Shrine, or you can explore Phuket Aquarium & more. Afterwards, return to your hotel on your own."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Super Deluxe Hotel in Phuket To => Tiger Kingdom Phuket Tickets To => Super Deluxe Hotel in Phuket"
                
                
                Time="fa-solid fa-car"
                TimeDetail="Private Transfer"
                dura="Transfer in Sedan From => Phuket International Airport To => Super Deluxe Hotel in Phuket"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pattaya"
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Tiger Kingdom Phuket Tickets - Big Tiger Encounter with Private Transfers"
                
            />
             <Accordion 
                title="DAY 8 : Departure Day"
                content="In the morning, check-out from your hotel and get driven to Phuket Airport. Upon arrival, board your flight back home, marking the end of this amazing trip."
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Super Deluxe Hotel in Bangkok To => Suvarnabhumi Airport"
                meal="fa-solid fa-utensils"
                
                Time="fa-solid fa-car"
                TimeDetail="Private Transfer"
                dura="Transfer in Sedan From => Phuket International Airport "

                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pattaya"

                
            />
          
            <StickyForm 
            title="Wonders of Thailand | Culture, Corals and Coastlines"
            originalPrice="INR 60,200"
            discountedPrice="INR 49,500"
            saleType="SAVE INR 10,700"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Thailand;