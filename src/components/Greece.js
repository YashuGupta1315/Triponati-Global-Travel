import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import AccordionAdv from "./AccordionAdv";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Greece = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/x3t67qxk5434ztkh3bbl8xxhswhw_Nothing-Familiar-Mykonos-Greece.jpg?dpr=1.4875000715255737&w=645'
        },
        { 
            id: 2, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/3ugkni6mjh98r8cw50de7xtcn5aa_gal2.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 3, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/r5adpb5firxegyor7vw6ehb4jsq6_gal4.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 4, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/s9a8fq3sg5u097ena96sk1e45o42_gal6.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 5, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/lmhplj7dee3brt2tdfrtpfjyys1x_gal10.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 6, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/3du1tdoah7o9m3x9p766tpwmey0i_gal1.jpeg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 7, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/3qkufm220jfx981mjju7jbor40wk_Chora-Mykonos-Town.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 8, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/xhwgweku2nzycwk1sr68th4attw2_gal5.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 9, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/8n4gtapx94k6r2inecpqvhlfk3z9_gal3.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 10, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/0buat36p9i9h1gci79d0jsa208mz_DAY1AA.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 11, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/ucpkyny7omuiighbw8wmxnjxf5ie_GettyImages-583746888-59139d5d5f9b586470b78d43.jpg?dpr=1.4875000715255737&w=645'
        },
        { 
            id: 12, 
            title: 'Greece', 
            image: 'https://media1.thrillophilia.com/filestore/amly7jqqxw4zbc8fdhtqxy7to9di_athens-instagram-tour-the-most-scenic-spots-542738.jpg?dpr=1.4875000715255737&w=645'
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
                heading="7 Days Enchanting Greece Tour"
                para="Greece & the Greek Islands are famous for 3 things: ancient civilization, amazing landscapes, and well-established tourism. Athens is a place widely recognised for the rich history and archaeological ruins, its pristine beaches and alluring landscape making this amazing city a must-visit place for those who seek a perfect getaway. Located in the center of the Cyclades island group, Mykonos is one of the most famous Greek islands for its cosmopolitan atmosphere and vivid nightlife! No wonder why it’s widely known as the “Ibiza of Greece”! Chora, the main town of Mykonos, is where the heart of the island beats! Awarded Mykonos restaurants, designer boutiques, elegant bars, and top clubs, guarantee an unforgettable Greece holiday experience! "
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Visit the famed Olympic (Panathenaic Stadium), the only stadium in the world built entirely of marble and home to the first modern games in 1896"
                li2="Explore the mighty UNESCO-listed Acropolis of Athens on foot to see the glorious Parthenon, Temple of Zeus and other highlights"
                li3="Fall in love with “Little Venice” known for its 18th-century captains’ houses and painted balconies"
                li4="Witness the Monastery of Panagia Tourliani when you travel to Mykonos"
                li5="Tour the traditional Ano Mera village dotted with historic sites."
                Itinerary="Outline Itinerary" 
            />
            <AccordionAdv 
            title="Day 1 | Welcome to Greece! Arrival in Athens"
            content="Prepare for an adventure you'll cherish for a lifetime as you arrive in the city of ancient ruins. Upon landing at Athens Airport or the Port of Piraeus, meet your driver for a panoramic transfer to your hotel where you can check in. Depending on your arrival time, enjoy some free time at your leisure. Spend the night in Athens, soaking in the rich history and vibrant atmosphere of the city."
            />
            <AccordionAdv 
            title="Day 2 | Explore Athens | City Tour | Touring Acropolis, visiting Parthenon & the Temple of Athena etc"
            content="Start your exciting morning with a tasty breakfast at the hotel. Then, embark on a half-day sightseeing tour of Athens, which may take place either in the morning or afternoon. Explore iconic landmarks such as the Acropolis, Constitution Square, the Memorial of the Unknown Soldier, the National Library, the Temple of Zeus, the Olympic Stadium, and the Parliament House. Return to your hotel in Athens for an overnight stay."
            
            />
             <AccordionAdv 
            title="Day 3 | Discover Stunning Mykonos | Proceed from Athens to Mykonos (via ferry)"
            content="After breakfast, transfer to the port for your ferry to Mykonos. Upon arrival at the island’s port, you will be assisted with your transfer to the hotel. With plenty of cafes and restaurants available, be sure to find a table towards the end of the day to enjoy a spectacular sunset. Don’t miss the chance to see the famous Mykonos pelicans, a charming local attraction. Spend the night at your hotel in Mykonos."
            
            />
             <AccordionAdv 
            title="Day 4 | Witness the surreal beauty of Mykonos | Half Day City & Island Tour"
            content="After breakfast, discover the highlights of Mykonos on a comfortable city walk, exploring its unique sites. Following this, embark on a bus tour that takes you across the island, showcasing its beautiful bays and beaches, as well as the traditional village of Ano Mera. The tour is packed with fascinating information about the island’s culture, history, and notable places, ensuring an experience you’ll love. Spend the night at your hotel in Mykonos."
            
            />
             <AccordionAdv 
            title="Day 5 | Discover the highlights of Mykonos | Tour of Delos (Optional)"
            content="Enjoy your stay on the island of Aeolos, the God of the Wind, in Mykonos. Breakfast is served at the hotel, and the day is yours to savor this island paradise with a variety of optional tours to choose from. Take the opportunity to swim in the crystal-blue Mykonian sea and sip a mouthwatering cocktail by its golden beaches. Explore the island’s well-preserved windmills and charming white houses, and don’t miss a visit to the historic ancient site of Delos. Spend the night in Mykonos."
            />
             <AccordionAdv 
            title="Day 6 | Head back to Athens from Mykonos (via Ferry)"
            content="After breakfast, transfer to the port for your ferry back to Athens. Upon arrival, you will be transferred to your hotel, with the remainder of the day at your leisure. Take the opportunity to explore the picturesque Pláka neighborhood, a popular tourist spot known for its charming village ambiance. Wander through narrow pedestrian streets and cheerful little squares, where you'll find lovely bougainvillea-trimmed pastel-painted houses, restaurants, and shops. Spend the night in Athens."
            
            />
             <AccordionAdv 
            title="Day 7 | Departure day"
            content="Wake up to a mouth-watering breakfast and pack your bags filled with unforgettable memories. You will be picked up from your hotel and transferred to Athens Airport for your departure flight. Board the flight and cherish the moments you have spent in this beautiful country."
            
            />
          
            <StickyForm 
            title="Best of Greece and New Zealand"
            originalPrice="INR  1,55,000"
            discountedPrice="INR 1,40,000"
            saleType="Best Offer!!"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Greece;