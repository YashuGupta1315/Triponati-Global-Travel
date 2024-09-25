import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import AccordionAdv from "./AccordionAdv";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Turkey = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Turkey', 
            image: 'https://media1.thrillophilia.com/filestore/6g3gqggjsqo52jfku3pnx5lhorsp_shutterstock_697138561.jpg?dpr=1.4875000715255737&w=645'
        },
        { 
            id: 2, 
            title: 'Turkey', 
            image: 'https://media1.thrillophilia.com/filestore/eynyzue47i9zupa5fkb7bqsv0xwm_shutterstock_1113985421%20(1).jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 3, 
            title: 'Turkey', 
            image: 'https://media1.thrillophilia.com/filestore/ddb1b0782wehe4tgzjy0aerzh6qj_shutterstock_721552321.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 4, 
            title: 'Turkey', 
            image: 'https://media1.thrillophilia.com/filestore/mxfq8aiz192ez8m779s9utwcbw2r_shutterstock_1449415016.jpg?dpr=1.4875000715255737&w=645' 
        },
        { 
            id: 5, 
            title: 'Turkey', 
            image: 'https://media1.thrillophilia.com/filestore/qsyb50s8uds633dnuy9fkv1ho4nx_shutterstock_553466686%20(1).jpg?dpr=1.4875000715255737&w=645' 
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
                heading="Turkey At A Glance With Free Pamukkale Tickets"
                para="Turkey is a beautiful country nestled gracefully at the crossroad between Europe and Asia. It wouldn't be a lie to say that this glorious country is a perfect blend of Asian, European, and Middle Eastern influences, making it a must-visit destination for people who seek an ideal getaway. It has a beautiful coastline enveloped amidst the Mediterranean Sea, historical ruins that date back thousands of years and delicious food, this country has something for everyone. This 6-day tour to Turkey lets you explore the highlights of Istanbul. From witnessing the architectural brilliance of the Blue Mosque to cruising along the Bosphorus Strait and witness some of the famous landmarks of Istanbul, cotton castle Pamukkale, this tour will give you an experience that will be etched in your memories for a lifetime. "
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Turkey's Unique Location: Situated at the crossroads of Europe and Asia, blending Asian, European, and Middle Eastern influences."
                li2="Stunning Coastline: Beautiful Mediterranean coastline offering scenic views."
                li3="Delicious Cuisine: A blend of flavors that cater to food lovers."
                li4="Explore Istanbul: Visit iconic sites like the Blue Mosque and cruise along the Bosphorus Strait."
                li5="Memorable Experience: A well-rounded tour providing an unforgettable experience."
                Itinerary="Outline Itinerary" 
            />
            <AccordionAdv 
            title="Day 1 | Arrival at Antalya"
            content="On arrival at the airport we shall be waiting to transfer you to the hotel.You can enjoy free time until your tour starts, information about the meeting place and start time can be found on the information boards in the hotel reception area. At 17.00 hrs (aprox)- We will make a brief visit to ANTALYA a coastal city of more than a million inhabitants, the door of Adrian, the Ottoman district and its great waterfall that falls straight into the sea."
            />
            <AccordionAdv 
            title="Day 2 | Antalya to Nigde"
            content="Contrast of the Anatolian region between the coast and the high mountains. We leave Antalya for ASPENDOS, we visit the Roman theatre which many believe to be the best preserved in the world. After this in SIDE we can admire the Greek temple of Apollo by the sea. Time to stroll around the port and through its streets full of life. Amidst impressive countryside we cross the Taurus Mountains, their peaks of over 3,500 meters in height are snow- covered for a large part of the year. A stop in KARAMAN where we visit TARTAN EVI, an ancient Ottoman mansion. Continuation to the region of Cappadocia. As you arrive at Nigde, check in to your hotel and complete the formalities and enjoy your dinner. Overnight stay at Nigde."
            
            />
             <AccordionAdv 
            title="Day 3 | Nigde to Cappadocia"
            content="As you wake up in the morning today we will go to see landscapes with spectacular picturesque towns.A full day in the fantastic region of CAPPADOCIA, with its lunar landscapes, its churches and troglodyte villages.We start by visiting GUMUSLER, an incredible seventh century underground monastery with maybe the best Byzantine frescoes in Turkey.In KAYMAKLI we will see the underground city that could house 30,000 people. We will visit the natural fortress of UCHISAR. After lunch, we will see the GOREME Valley with its open-air museum and its churches dug out of the rocks, entrance included.Proceed to Avanos, and on arrival complete your check in formalities and call it a night."
            
            />
             <AccordionAdv 
            title="Day 4 |Cappadocia to Konya"
            content="Ihlara Valley, Caravanserai, Konya. Dinner included. At the far end of Cappadocia, we will visit the IHLARA Valley; known for the freshness of its waters, its churches and villages excavated in the rock.Then we continue our route, with a stop in an old CARAVANSERAI from the 13th Century before arriving in KONYA where we visit the Mausoleum of Mevlana.Here we will learn about the sect of the Dervishes (entrance included).At night, we suggest that you attend the dance performance of the whirling dervishes in the cultural centre."
            
            />
             <AccordionAdv 
            title="Day 5 | Konya to Pamukkale"
            content="Fantastic Cotton Castle at the end of the day. Dinner included. We take a scenic road between the lakes, and get to know EGRIDIR, a beautiful town next to a large lake, with its walls and mosques.There’s time to have lunch. We then continue to PAMUKKALE-Hierapolis, whose calcareous waters have created the Cotton Castle (entrance included).Overnight stay at Pamukkale."
            />
             <AccordionAdv 
            title="Day 6 | Pamukkale to Kusadasi"
            content="We leave for EPHESUS, the best preserved ancient city of Asia Minor; 2000 years ago it had a quarter of a million inhabitants. We see the house of the Virgin Mary, the Basilica of Saint John and the impressive ruins of Ephesus (entrance included). We then go on to KUSADASI, a popular coastal town with a lot of atmosphere, commercial life and a small castle."
            
            />
             <AccordionAdv 
            title="Day 7 | Kusadasi to Istanbul"
            content="Interior of Anatolia. Hanging bridges crossing the Sea of Marmara and the Bosphorus Strait. We leave for the city with the fourth largest population in Turkey: IZMIR.We make a brief visit with our guide to this city considered the most westernized and modern city in the country in terms of values, ideology and lifestyle.We then return to inland Turkey. Stop en route for lunch before reaching BURSA, the fourth largest city in Turkey, whose historic centre has been declared UNESCO World Heritage, with its traditional commercial districts, mosques, religious schools, public baths.The green mosque stands out. Arrival in ISTANBUL at the end of the day."
            
            />
            <AccordionAdv 
            title="Day 8 | Istanbul Sightseeing"
            content="Sightseeing tour. Cable car to Pierre Loti viewpoint. Topkapi Palace. Night transfer to Taksim. A sightseeing tour of the city. We find ourselves in a city built in two continents. On our tour, we will include a cable car ride up to the Pierre Loti viewpoint and we will enter the Mosque of Suleyman the Magnificent (the largest in Istanbul). We will see the walls, the Golden Horn, the fishing district, and we will admire the exterior of Hagia Sofia. After the visit, we will offer tickets and a visit to the Top Kapi Palace, which was the administrative center of the Ottoman Empire, with its magnificent courtyards and its pavilions.At the end of the afternoon we will provide a transfer to the Taksim neighborhood, the most commercialized and lively area of the city. There will be time to dine in one of its many restaurants, and you can also take the old tram that crosses the area or go to see the nearby Galata Tower.Overnight stay at Istanbul."
            
            />
            <AccordionAdv 
            title="Day 9 | Bosphorus Cruise"
            content="Boat trip on the Bosphorus.Today we include a boat trip on the Bosphorus that will last about two hours, exclusively for Europamundo travelers.The Bosphorus is a strait that connects the Black Sea with the Sea of Marmara, which separates Istanbul into two parts: the European and Asian parts. We will enjoy seeing the liveliness of the strait with its multitude of boats. We will pass under the two bridges that unite Europe and Asia and we will admire the palaces of the sultans, the typical wooden houses and the Ottoman villas. Free time. Overnight stay at Istanbul."
            
            />
            <AccordionAdv 
            title="Day 10 | Departure | End of Experience"
            content="Wake up in the morning, have a scrumptious breakfast and pack your bags for your departure.Complete the check-out formalities and get ready to leave for Kayseri airport to catch a suitable flight to Istanbul.Reach your desired destination and end the trip with unforgettable memories."
            
            />
          
            <StickyForm 
            title="Turkey At A Glance With Free Pamukkale Tickets"
            originalPrice="INR  1,08,000"
            discountedPrice="INR 70,000"
            saleType="Best Offer!!"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Turkey;