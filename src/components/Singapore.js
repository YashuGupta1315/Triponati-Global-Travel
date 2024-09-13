import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Singapore = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/xh1aniox25rqtnw1txqgra6v430x_8xl08melvjlef6r52n52pvl51jbu_shutterstock_317450570.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/kr267ig8902e12uosljxp1gjf1ss_shutterstock_157315883.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/jk8a9gio63lnkodcvlj697nja6so_shutterstock_476270212.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/b1gj41z8xbgr8r5p3etec4mlve2d_shutterstock_1162677847.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/eech541hilu2vc24epuiftmh9ruy_shutterstock_240724939.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/8ucr2a3wgcm20lftjqy42s3a2vll_shutterstock_2041809665.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Singapore', 
            image: 'https://media1.thrillophilia.com/filestore/itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg?h=252&w=auto&dpr=1.4875000715255737'
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
                heading="Singapore & Malaysia Trip | FREE Night Safari Experience"
                para="Singapore is a vibrant city-state located in Southeast Asia, known for its unique blend of modernity and tradition. Despite its small size, Singapore is a global financial hub and a melting pot of cultures, offering a rich tapestry of experiences. The city is renowned for its cleanliness, efficient public transport, and impressive skyline featuring iconic landmarks like Marina Bay Sands and Gardens by the Bay. Singapore also boasts a diverse culinary scene, world-class shopping, and a commitment to sustainability, making it one of the most dynamic and forward-thinking cities in the world."
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Experience the vibrant blend of cultures in Singapore, where modern skyscrapers meet historic temples, offering a unique journey through time and tradition."
                li2="Embark on a nocturnal adventure at Singapore Night Safari, the world’s first safari park dedicated to 2,500 creatures living in their natural, moonlit habitats."
                li3="Capture iconic moments at Merlion Park, home to Singapore’s legendary Merlion statue, and enjoy breathtaking views of Marina Bay."
                li4="Marvel at the architectural splendor of the Petronas Twin Towers, the tallest twin towers in the world, and enjoy panoramic views from the sky bridge."
                li5="Explore the ancient limestone Batu Caves, a cultural and religious landmark in Malaysia, renowned for 272 steps to discover the sacred Hindu temple inside."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 : Arrival in Singapore | Visit Night Safari Zoo"
                content="Welcome to Singapore! Upon arrival, you'll be transferred to your hotel. Check in and relax for a while. Begin your adventure with a visit to the Night Safari, the world’s first nocturnal zoo. Explore seven unique zones and observe nocturnal animals in their natural habitats. Witness the Asian Lion, Tasmanian Devil Elephants, and other creatures showcase their talents in the famous Creatures of the Night show. Later, you will be transferred to the hotel for an overnight stay."
                
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Singapore Changi Airport To => Deluxe Hotel in Singapore"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Singapore"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Singapore Night Safari Tickets with Tram Ride - Singapore Night Safari - Admission with Tram Ride on a Shared basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast included"
            />
              <Accordion 
                title="DAY 2 : Half Day Tour to Singapore Sightseeing | Visit Gardens by the Bay"
                content="Today, get ready to explore Singapore. Start your tour with a visit to Merlion Park, renowned for its iconic statue, and enjoy views of Marina Bay. Stroll through Chinatown and the bustling Dhoby Ghaut. Cross the world’s largest Helix Bridge and marvel at the lotus-shaped ArtScience Museum. Explore Gardens By The Bay, including the Cloud Forest with its 35-meter waterfall, the vibrant Flower Dome, and the enchanting Floral Fantasy. Later, return to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Toyota Commuter From => Deluxe Hotel in Singapore To => Singapore Half-Day Sightseeing Tour"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Singapore Half-Day Sightseeing Tour on a Shared basis"

                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Toyota Commuter From => Singapore Half-Day Sightseeing Tour To => Gardens By The Bay Tickets, Singapore"

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="Gardens By The Bay Tickets, Singapore - Cloud Forest + OCBC Skyway on a Shared basis"

            />
             <Accordion 
                title="DAY 3 : Day Tour to Universal Studios"
                content="Today, get ready for a thrilling adventure at Universal Studios! Board your transfer and get driven to the park, and dive into 28 rides across seven zones: Hollywood, Sci-Fi City, New York, Ancient Egypt, Lost World, Madagascar, and Far Far Away. Experience dueling coasters like Battlestar Galactica and Revenge of the Mummy. Enjoy character meet-and-greets with The Minions and Elmo, and catch the lively parade. Later, you'll be transferred to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Toyota Commuter From => Deluxe Hotel in Singapore To => Universal Studios Singapore Tickets To => Deluxe Hotel in Singapore"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Universal Studios Singapore Tickets - Universal Studios Singapore One-Day Admission Ticket on a Shared basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Singapore"

            />
            <Accordion 
                title="DAY 4 : Arrival in Kuala Lumpur | Day Tour to Kuala Lumpur"
                content="After checking out of your hotel, you'll be transferred to Kuala Lumpur. Upon arrival, check in and relax for a while. Start your tour with a visit to the Petronas Twin Towers, renowned for their architecture. Next, visit the Sultan Abdul Samad Building, a 19th-century government office. Pay tribute to Tugu Negara, Malaysia's national monument. Then, visit the National Mosque and Merdeka Square, where Malaysia's independence was declared. Later, return to your hotel for an overnight stay.======> Check Out from Deluxe Hotel in Singapore"
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer Toyota Commuter From => Deluxe Hotel in Singapore To => Deluxe Hotel in Kuala Lumpur"
                
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Kuala Lumpur"

                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer Toyota Commuter From => Deluxe Hotel in Kuala Lumpur ==> Kuala Lumpur Sightseeing Tour ==> To =>Deluxe Hotel in Kuala Lumpur"

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="Kuala Lumpur Sightseeing Tour on a Shared basis"
            />
            <Accordion 
                title="DAY 5 : Day Trip to Sunway Lagoon Theme Park"
                content="In the morning, head to Sunway Lagoon Theme Park. Enjoy over 90 rides and attractions across six zones, including the Water Park and Wildlife Park. Experience rides like Vuvuzela, Malaysia’s largest water slide, and the 5D Waterplexx, the country's first 5D water attraction. Dive into fun at the man-made surf beach or you can take on activities such as ATV rides and bungee trampolining at X Park. Explore the Wildlife Park and interactive shows. Later, return to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Toyota Commuter From => Deluxe Hotel in Kuala Lumpur ==> Sunway Lagoon Tickets  ==> To => Deluxe Hotel in Kuala Lumpur"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Sunway Lagoon Tickets - Sunway Lagoon Theme Park Admission Tickets on a Shared basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Kuala Lumpur"
                
            />
            <Accordion 
                title="DAY 6 : Day Tour to Genting Highlands and Batu Caves"
                content="Today, get transferred to Genting Highlands Cable Car Station. You can explore its amusement parks, restaurants, and casinos. Enjoy panoramic views of the mountains on the Genting Skyway. Visit the Batu Caves, climbing 272 steps to see the 140-foot-tall statue of Lord Murugan and the vibrant caves. Explore the Chin Swee Caves Temple with its Hindu statues and murals. Then return via cable car. Later, get transferred back to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Toyota Commuter From => Deluxe Hotel in Kuala Lumpur ==> Genting Highlands and Batu Caves Day Tour ==> To => Deluxe Hotel in Kuala Lumpur"

                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Genting Highlands and Batu Caves Day Tour - Group Tour on a Shared basis"
               
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Kuala Lumpur"
            />
          
             <Accordion 
                title="DAY 7 : Departure Day"
                content="In the morning, check out of the hotel and get transferred to Kuala Lumpur International Airport. This is where your trip comes to an end. ====> Check Out from Deluxe Hotel in Kuala Lumpur"

                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Deluxe Hotel in Kuala Lumpur To => Kuala Lumpur International Airport"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Kuala Lumpur"  
            />
          
            <StickyForm 
            title="Singapore & Malaysia Trip | FREE Night Safari Experience"
            originalPrice="INR 99,261"
            discountedPrice="INR 59,432"
            saleType="SAVE INR  39,829"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Singapore;