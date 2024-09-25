import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Dubai = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/rbfpnbim9d5uw3iuwfcjk928yy5j_29d07cda-b6e3-447f-a225-2b55cea6b159-2545-dubai-dubai-aquarium---underwater-zoo---burj-khalifa-combo-02.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/tt2p0hxisk3xixhbj08sxgfli153_7wcsxreqzgfwfd7icvmvparvwni8_1465888976_ap5.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/k7c6j0wmvy03sn55a25wd63zwmp1_1mqp4vf7ii61mbgkpt5e3u0whbdy_Dwell%20into%20the%20journey%20of%20possibilities%20at%20the%20the%20Museum%20of%20the%20Future.webp?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/rpsqxjgnpokkqwkjekediofexd1p_AYA%20Family%2010%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/60et8w1j2bps51tmwetnedr3chb5_593827b5549b4c1c8b6eeb46a49e01ee.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/oc3gscy5151uq9yycf8zm5binzqx_Ferrari%20World-1.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/sg5izzuc5ndv171lmeb1dxn9rimv_Atlantis%20Palm%20Hotel.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/mdjl01z282z9r6zr1jl88uvw6y1c_shutterstock_1630101913.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/ytq1j06ndd63wnoua0vywhik8ia3_shutterstock_1196821240.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/nf7b4v3rxngzvgbaybu8rg6x4t1e_shutterstock_1419478073.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/s11oqeqde0ik5ebil4mem5c4u4ep_shutterstock_1071877145.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/ohjp388o3cq7cfp4863qjhq8l453_shutterstock_1741368515%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/uo1w25sob9ce4zqsil1b4i315sdc_shutterstock_621924287.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/5qz4xd7vqai75fu14lwd3w4uf9yg_shutterstock_2052253448.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Dubai', 
            image: 'https://media1.thrillophilia.com/filestore/91auwe9632in9yhrixuqzuznmolq_1556193320_marina2.jpg?h=252&w=auto&dpr=1.4875000715255737'
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
                heading="Dubai Family Getaway | Towers Above and Sands Below"
                para="Dubai is a city of superlatives, known for its futuristic skyline, luxury shopping, and vibrant culture. Nestled in the United Arab Emirates, this modern metropolis is home to the world's tallest building, the Burj Khalifa, and the expansive Dubai Mall. Beyond its architectural marvels, Dubai offers a blend of traditional and contemporary experiences, from exploring bustling souks and desert safaris to enjoying fine dining and world-class entertainment. A hub of innovation and tourism, Dubai is a dynamic destination that promises an unforgettable experience."
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Experience Dubai, where ancient traditions meet modern marvels, from towering skyscrapers to desert safaris, offering a blend of culture and adventure."
                li2="Dive into adventure at Atlantis Aquaventure for thrilling water slides, lazy rivers, and encounters with marine life."
                li3="Marvel at the grandeur of Sheikh Zayed Grand Mosque in Abu Dhabi, a symbol of Islamic architecture blending beauty and culture."
                li4="Ascend the heights of innovation and luxury at Burj Khalifa, the world's tallest building, for breathtaking views and architectural wonder."
                li5=" A hub of innovation and tourism, Dubai is a dynamic destination that promises an unforgettable experience."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 : Arrival in Dubai | Evening Dhow Marina Dinner Cruise"
                content="Welcome to Dubai, the dazzling city known for its lavishness and futuristic architecture. Upon arrival at Dubai International Airport, you will be transferred to your hotel. Check-in and take some time to relax after your journey. In the evening, you will be taken for the amazing Dhow Cruise. Get onboard and enjoy sailing over the waters of Dubai, while enjoying a delicious dinner and admiring Dubai's iconic landmarks. After the tour, get driven back to the hotel for an overnight stay."
                
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Toyota Previa, Toyota Corolla or similar From => Dubai International Airport To => Check-in at Standard Hotel in Dubai"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Dubai"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Dhow Cruise Dubai Marina - Marina Dinner Cruise on a Shared basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast included"
            />
              <Accordion 
                title="DAY 2 : Dubai Sightseeing Tour | Visit to Dubai Aquarium & Burj Khalifa"
                content="Today, start your day with getting driven on a city tour of Dubai, visiting landmarks such as the Dubai Museum, Palm Jumeirah, and Burj Al Arab. Next, explore the Dubai Aquarium, home to thousands of aquatic creatures. Further, experience the thrill of ascending to the 124th floor of the Burj Khalifa, the world's tallest building. Enjoy breathtaking panoramic views of the city from the observation deck. Afterwards, get transferred back to your hotel for a comfortable overnight stay."

                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Coach From => Standard Hotel in Dubai To => Dubai Half Day City Tour"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Dubai Half Day City Tour on a Shared basis"

                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Coach From => Dubai Half Day City Tour To => Burj Khalifa 124th Floor and Dubai Aquarium Tickets"

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="Burj Khalifa 124th Floor and Dubai Aquarium Tickets on a Shared basis"

            />
             <Accordion 
                title="DAY 3 : Visit to Dubai Dolphinarium & Dubai Frame with Museum of the Future"
                content="Begin your day with getting driven to the Dubai Dolphinarium, where you can watch an entertaining dolphin and seal show. Next, transfer to the Dubai Frame, an architectural landmark offering stunning views of both old and new Dubai from its sky deck. Later, visit the Museum Of The Future, a unique and innovative museum showcasing advanced technology and futuristic concepts. After a day of exploration, get transferred to your hotel for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Coach From => Standard Hotel in Dubai To => Dubai Dolphinarium Tickets To => Dubai Frame Tickets To => Museum of the Future Tickets, Dubai To  => Standard Hotel in Dubai"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Universal Studios Dubai Tickets - Universal Studios Dubai One-Day Admission Ticket on a Shared basis"

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="Dubai Dolphinarium Tickets - Dolphin & Seal Show (Regular Entry) with Sharing Transfers on a Shared basis"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Dubai Frame Tickets - Dubai Frame Ticket on a Shared basis And  Museum of the Future Tickets, Dubai on a Shared basis"
            />
            <Accordion 
                title="DAY 4 : Trip to AYA Universe | Desert Safari with BBQ Dinner"
                content="Today, get transferred to AYA Universe, an interactive entertainment experience showcasing the fusion of art & technology. Then, prepare yourself for an unforgettable desert adventure. Take part in a thrilling desert safari that includes dune bashing, sandboarding, and camel riding. In the evening, enjoy a traditional BBQ dinner under the stars with live entertainment such as Tanoura dance performance. Later, get transferred to your hotel for an overnight stay."
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer Coach From => Standard Hotel in Dubai To => AYA Universe Tickets, Dubai"

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="AYA Universe Tickets, Dubai - AYA Universe Admission Tickets on a Shared basis"
                

                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer Coach From => AYA Universe Tickets, Dubai ==> Dubai Desert Safari with BBQ Dinner ==> To =>Standard Hotel in Dubai"

                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Dubai Desert Safari with BBQ Dinner - All-In-One-Package on a Shared basis"

              
            />
            <Accordion 
                title="DAY 5 : Visit to Sheikh Zayed Mosque | Trip to Abu Dhabi | Ferrari World Park Tour"
                content="In the morning, get driven on a day trip to Abu Dhabi, the capital of the United Arab Emirates. Upon arrival, visit the Sheikh Zayed Mosque, UAE's largest mosque. Afterward, get ready to go on city tour and witness attractions like Emirates Palace, Heritage Village & Louvre Abu Dhabi. Next, visit Ferrari World, the world's first Ferrari-branded theme park, where you can experience exhilarating rides. After a fun-filled day, get transferred to your hotel in Dubai for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Coach From => Standard Hotel in Dubai ==>Sheikh Zayed Grand Mosque Guided Tour, Abu Dhabi "
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Sheikh Zayed Grand Mosque Guided Tour, Abu Dhabi on a Shared basis"

                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer Coach From =>Sheikh Zayed Grand Mosque Guided Tour, Abu Dhabi To => Abu Dhabi City Sightseeing Tour To => Abu Dhabi City Sightseeing Tour To => Ferrari World Abu Dhabi "

                meal="fa-solid fa-mountain-sun"
                Meal="Activity"
                MealDetail="Abu Dhabi City Sightseeing Tour - City Tour By Sharing Transfers on a Shared basis And Ferrari World Abu Dhabi on a Shared basis"
                
            />
            <Accordion 
                title="DAY 6 : Atlantis Aquaventure Tour"
                content="Today, get driven to Atlantis Aquaventure, one of the largest waterparks in the Middle East, located at Atlantis, The Palm. There, you can enjoy a variety of thrilling water rides and slides, relax on the private beach, and explore The Lost Chambers Aquarium. Next, you can spend the day experiencing the excitement and adventure of this world-class waterpark before getting transferred back to your hotel for a comfortable overnight stay."

                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Coach From => Standard Hotel in Dubai ==> Atlantis Aquaventure Waterpark Tickets, Dubai ==> To => Standard Hotel in Dubai"

                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Atlantis Aquaventure Waterpark Tickets, Dubai - Atlantis Aquaventure Day Pass on a Shared basis"
               
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Standard Hotel in Dubai"
            />
          
             <Accordion 
                title="DAY 7 : Departure Day"
                content="In the morning, check out from your hotel and get transferred to Dubai International Airport for your departure, marking an end to this trip. ====> Check Out from Standard Hotel in Dubai"

                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Toyota Previa, Toyota Corolla or similar From => Standard Hotel in Dubai To => Dubai International Airport"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Standard Hotel in Dubai"  
            />
          
            <StickyForm 
            title="Dubai Family Getaway | Towers Above and Sands Below"
            originalPrice="INR 87,326"
            discountedPrice="INR  70,000"
            saleType="SAVE INR 17,326"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Dubai;