import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import AccordionAdv from "./AccordionAdv";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Australia = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/v0fidlpom82ngl9q3w54mz15tmxx_shutterstock_180140354.jpg?dpr=1.4875000715255737&w=645'
        },
        { 
            id: 2, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/6ahor7f0299cyx12ei5g7drrgjt9_shutterstock_1025960785-min.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 3, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/m1k0jtg4nk381x06qdxz822agy2q_shutterstock_1094901527-min.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 4, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/wuvohj6ky41nm6mh9po5ea049j8r_shutterstock_110988728.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 5, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/ulw3ywmg00jvg37zc270im6zui90_shutterstock_2279313237.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 6, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/isvctoaq99hmsegkh9zefqbqg69k_shutterstock_254848015.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 7, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/ssvwkchviptode6aqo3n475jcx74_shutterstock_113521615.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 8, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/wdzc3bqauj934xzsljzdptcox7b0_yirn9n9eac2uqhtl0k1i850r2a95_shutterstock_1131253484.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 9, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/wjoy8yk8fft5w8qsdgn9ibxyluol_shutterstock_313253633.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 10, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/292w1r653t87zb25hzxr2tjtthni_shutterstock_215506225-min.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 11, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/zzy7q4pmlim9vxdfkzgzuozy8ssn_shutterstock_198495626.jpg?dpr=1.4875000715255737&w=645'
        },
        { 
            id: 12, 
            title: 'Australia', 
            image: 'https://media1.thrillophilia.com/filestore/zftewjzo87abgh0tz4wkhtxlebb4_shutterstock_293091518-min.jpg?dpr=1.4875000715255737&w=645'
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
                heading="Best of Australia and New Zealand"
                para="Australia, often referred to as the Land Down Under, is a country and continent renowned for its stunning natural beauty, vibrant cities, and unique wildlife. From the iconic Sydney Opera House and the Great Barrier Reef to the vast Outback and pristine beaches, Australia offers a diverse range of experiences for travelers. The country's rich indigenous culture, combined with its modern, multicultural society, creates a dynamic and welcoming environment. Whether exploring bustling urban centers, hiking through national parks, or relaxing by the coast, Australia promises adventure, relaxation, and unforgettable memories. "
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Soak in the breathtaking panoramic views from the Sydney Tower Observation deck."
                li2="Take a guided tour of the iconic Sydney Opera House."
                li3="Taking the Sydney Showboat Dinner Cruise."
                li4="Encounter the fascinating marine creatures at the Sydney Sea Life Aquarium."
                li5="Marvel at the stunning Sydney Harbour Bridge."
                Itinerary="Outline Itinerary" 
            />
            <AccordionAdv 
            title="Day 1 | Arrival in Sydney"
            content="Upon arriving in Sydney, the largest city in Australia, you will be greeted at the Sydney Airport by our local representative, who will transfer you to your pre-booked hotel in the city. After checking in, take some time to freshen up and relax in your hotel room. Once you're rested, head out to visit the magnificent Sydney Tower Observation Deck, where you can enjoy 360-degree panoramic views of the city's top landmarks, including Circular Quay and the Sydney Harbour Bridge. After taking in the stunning sights, return to your hotel in the evening for a good night's sleep."
            />
            <AccordionAdv 
            title="Day 2 | Full Day City Sightseeing Tour of Sydney"
            content="Wake up to a lovely morning in Sydney and freshen up before enjoying a lavish breakfast at your hotel. After breakfast, get ready to explore this vibrant city, starting with a visit to the Sydney Opera House, a UNESCO World Heritage site and one of the most iconic landmarks in the world. Here, you will embark on a guided tour of the Opera House and its 300 corridors. Next, head to the Sydney Harbour Bridge, a national heritage of Australia and one of the world's widest bridges. Continue to Bondi Beach, renowned for its dramatic seascape, and explore The Rocks, a lively open-air street market.   Your adventure continues at Darling Harbour, one of Sydney’s largest recreational hubs, where you will visit the Sydney Sea Life Aquarium to discover a diverse range of Australian marine life. As evening approaches, prepare for an unforgettable experience aboard the Sydney Showboat Dinner Cruise. As you cruise across the serene waters, you will soak in stunning views of the Harbour Bridge and the panoramic city skyline. Enjoy a sumptuous dinner while watching an impressive live Cabaret Show. After this enchanting evening, return to your hotel for a peaceful overnight stay."
            
            />
             <AccordionAdv 
            title="Day 3 | Transfer from Sydney to Brisbane to Gold Coast"
            content="After freshening up, enjoy a fulfilling breakfast at your hotel. As part of your Australia and New Zealand tour package from India, you will board a flight from Sydney Airport to your next destination, Brisbane, the capital city of Queensland. Upon arrival in Brisbane, embark on a brief sightseeing tour of the city, beginning with the South Bank Waterfront, the city's vibrant recreational, social, and cultural hub. You will also visit the Town Hall, an architectural marvel flaunting an Italian Renaissance style. As you explore the city, take in the lively graffiti spots and vibrant urban street art that Brisbane is known for. Later in the day, continue your journey to the Gold Coast, a destination famous for its theme parks, surfing beaches, lush rainforests, and vibrant nightlife. Your day concludes with an overnight stay at a pre-booked hotel in the Gold Coast."
            
            />
             <AccordionAdv 
            title="Day 4 | Full Day Sightseeing Tour of Gold Coast"
            content="Wake up to a fresh morning and treat yourself to a delicious breakfast at your hotel. Today, as part of your Australia and New Zealand tour package from India, you will spend the day exploring the vibrant Gold Coast. Begin your adventure with a visit to the breathtaking Currumbin Wildlife Sanctuary, a UNESCO World Heritage site that is home to the largest population of Australian wildlife in the world. Next, head to Warner Bros. Movie World, where you can experience the excitement of ‘The Lego Movie 4D Experience’ show and enjoy thrilling rides like the Green Lantern Roller Coaster, Batwing Spaceshot, Superman Escape, and Wild West Falls. As the evening sets in, take a leisurely stroll along the Surfers Paradise Beachfront, where you can soak in the lively atmosphere and enjoy some shopping at Cavill Avenue. After a day filled with adventure and fun, return to your hotel for a restful overnight stay."
            
            />
             <AccordionAdv 
            title="Day 5 | Transfer from Gold Coast to Cairns"
            content="Begin your day by freshening up and enjoying a delicious breakfast at your hotel before checking out. As part of your Australia and New Zealand tour package from India, you will take a flight from the Gold Coast Airport to Cairns, the gateway to the Great Barrier Reef. Upon arrival in Cairns, you will visit the stunning Kuranda Rainforest, the world's oldest living tropical rainforest. Experience a scenic ride on the SkyRail Rainforest Cableway, a 7.5-kilometer journey above cascading waterfalls, rugged forested mountains, and the dramatic gorges of Barron Gorge National Park. In the evening, you will visit the Aboriginal Cultural Park, where you can witness captivating live Aboriginal dance performances and learn the art of throwing a boomerang. After an eventful day, you will retire for an overnight stay at your pre-booked hotel in Cairns."
            />
             <AccordionAdv 
            title="Day 6 | Transfer from Cairns to Great Barrier Reef to Melbourne"
            content="Begin your day by freshening up and treating yourself to a hearty breakfast before getting ready for an exciting day ahead. As part of your Australia and New Zealand tour package from India, today’s adventure will be a full-day excursion to the Great Barrier Reef, a world-renowned wonder known for its 2,300-kilometer-long coral reef system, home to countless reefs and islands made of both hard and soft corals. You will journey to one of the many islands of the Great Barrier Reef aboard a semi-submersible or glass-bottom boat, allowing you to explore a vibrant world filled with colorful marine life. For those seeking more adventure, this is the perfect opportunity to indulge in some adrenaline-pumping water activities, such as snorkeling or scuba diving. Later in the day, you will catch a flight to your next destination, Melbourne, the cultural capital of Australia. Upon arrival, you will check in to your pre-booked hotel in Melbourne for a comfortable overnight stay."
            
            />
             <AccordionAdv 
            title="Day 7 | Transfer from Melbourne to Phillip Island and Back to Melbourne"
            content="Wake up refreshed to a new morning and enjoy a delicious breakfast at your hotel. As part of your Australia and New Zealand tour package from India, you'll spend the first half of the day exploring the key attractions of Melbourne. Your journey will take you to some of the city's prime landmarks, including the grand Parliament House, the charming Fitzroy Garden – a famous Victorian-style garden filled with fountains, trees, sculptures, pavilions, and an ornamental lake – as well as the historic Town Hall and the magnificent St. Patrick's Cathedral. In the evening, you will head to Phillip Island, a beautiful island known for its population of Fairy Penguins. Upon arrival, you'll have the chance to witness the iconic Penguin Parade, where numerous Fairy Penguins march towards their burrows along Summerland Beach. After this enchanting experience, you will return to Melbourne for a relaxed overnight stay at your hotel."
            
            />
             <AccordionAdv 
            title="Day 8 | Transfer from Melbourne to Auckland"
            content="After enjoying a luscious breakfast at your hotel, check out and head to Melbourne Airport for your flight to Auckland, your next destination. Upon arrival in Auckland, embark on a sightseeing tour of the city and explore its top attractions, including Westhaven Marina, one of the world’s largest marinas, and the Harbour Bridge, a stunning eight-lane motorway bridge spanning the Waitemata Harbour. Stroll along Queen Street, a paradise for shopaholics, and take in the vibrant atmosphere of the Auckland Waterfront. In the evening, visit the Auckland Sky Tower Observatory Deck, the tallest freestanding structure in the Southern Hemisphere, offering mesmerizing views of the city. End your day with an overnight stay at a pre-booked hotel in Auckland."
            
            />
             <AccordionAdv 
            title="Day 9 | Transfer from Auckland to Rotorua and Back to Auckland"
            content="Enjoy a sumptuous breakfast at your hotel and prepare for a full-day excursion to Rotorua, a destination renowned for its Maori culture, shooting geysers, and natural hot springs. Upon arrival in Rotorua, visit the Whakarewarewa Thermal Reserve, a fascinating geothermal site in the Taupo Volcanic Zone that is home to seven active geysers and over 450 hot spring pools, and experience an impressive traditional Maori show. Later, spend some time at the Agrodome, where you can enjoy the entertaining Sheep Shearing Show. In the evening, return to Auckland for an overnight stay at your hotel."
            
            />
             <AccordionAdv 
            title="Day 10 | Transfer from Auckland to Queenstown"
            content="Freshen up and enjoy a piping hot breakfast at your hotel. According to your Australia and New Zealand tour package from India, today you will take a flight from Auckland Airport to Queenstown, New Zealand’s adventure capital. Upon arrival, visit Puzzling World, a captivating attraction filled with illusion rooms, table puzzles, and an outdoor maze. Conclude your day with an overnight stay at a pre-booked hotel in Queenstown."
            
            />
             <AccordionAdv 
            title="Day 11 | Full Day Sightseeing Tour of Queenstown"
            content="Start your day with a sumptuous breakfast at your hotel and prepare for a full day of activities in Queenstown. Begin with a leisurely walk around Arrowtown, a historic gold mining town, and visit the bungee jumping site on the Kawarau River. Later, enjoy a scenic skyline gondola ride to Bob’s Peak, where you can take in breathtaking views of Queenstown. Spend your evening relaxing at the Queenstown Waterfront Area. Conclude the day with an overnight stay at your hotel in Queenstown."
            
            />
             <AccordionAdv 
            title="Day 12 | Transfer from Queenstown to Christchurch"
            content="Freshen up and enjoy a fulfilling breakfast at your hotel before checking out and continuing your journey to Christchurch. En route, visit the picturesque Lake Tekapo, renowned as New Zealand’s second-largest lake, and catch a glimpse of Mt. Cook, the country’s highest mountain. Upon arriving in Christchurch, spend the rest of the day at leisure, either relaxing at your pre-booked hotel or exploring the nearby surroundings."
            
            />
             <AccordionAdv 
            title="Day 13 | Departure"
            content="Take a delicious breakfast at your hotel and check-out. Head to Christchurch Airport, from where you will board your flight and fly back to India with happy memories of your exquisite tour to Australia and New Zealand."
            
            />
          
            <StickyForm 
            title="Best of Australia and New Zealand"
            originalPrice="INR  4,16,000"
            discountedPrice="INR 3,00,120"
            saleType="28% off!"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Australia;