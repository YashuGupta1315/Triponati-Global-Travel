import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Switzerland = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/zkip7khwzew8nnesw6tr7qo0zba7_Downpic.cc-482200118.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/gx4anc560j90y57i9ywj8ui194py_dl.beatsnoop.com-final-IVdGcXJHOB.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/fchf25rloxkwqdpmzzokcxxq1u5h_4lgkpvphpxdmexate8vhgbxpcgwu_shutterstock_391379860.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/3x8vnit285jli7m8hyurkhapvcd5_asisai7c06znuf3kx7kaf12f15c3_shutterstock_332148542.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/b9pz8goa40y5e6x3oytte30voazt_m0ta18746mupo0sg3dn1983qiy0u_shutterstock_280183490.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/x4o5xkhgjz97jpbrw4m5z8gvc688_tqw96ktwjvxqvkj1pnuv4hp6vzh0_shutterstock_519605656.webp?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/t1k6tt5bi010pog5d3zrwisudjqa_dl.beatsnoop.com-high-9c47803d11755f98ee.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/yp9k09gqquytcdz8thdz6u7g1mlt_shutterstock_314150237%20(3).jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/i628pp9teqrmo7okg9ef6ggih20a_shutterstock_1549086965.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/76p65s3vqbgnoblsx4gdh44xeva2_shutterstock_535685914.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/yu2n9sxfkirebtzd2pzm7cvggfcw_shutterstock_121718119.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/neuln4glqb99z6ectgjt5vpaxv7o_shutterstock_397741987.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/0esaau9c42a5ieu7nt4vfdceodcl_shutterstock_1589326495.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/amha7yx6cx138beg78ea0u73pubf_shutterstock_1024092049.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Switzerland', 
            image: 'https://media1.thrillophilia.com/filestore/alfkc4hb70jq7shtbqthw2o9pmc0_shutterstock_401739034.jpg?h=252&w=auto&dpr=1.4875000715255737'
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
                heading="Glimpse Of Switzerland | FREE FIFA Museum Tickets"
                para="Switzerland is renowned for its breathtaking landscapes, featuring the majestic Alps, serene lakes, and picturesque villages. A paradise for nature lovers and adventure enthusiasts, it offers world-class skiing, hiking, and mountain biking. Cities like Zurich, Geneva, and Lucerne blend modernity with rich history, offering museums, luxury shopping, and cultural experiences. Switzerland's efficient transport system makes it easy to explore its diverse attractions, including iconic sites like the Matterhorn, Lake Geneva, and the scenic train routes. Its famous Swiss hospitality, chocolate, and cheese further enhance the travel experience, making it a top destination year-round."
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Explore Mount Titlis in a ROTAIR, the world's first cable car that revolves 360 degrees and offers a breathtaking view of the snow-clad Alps."
                li2="Feel the touch of the snowy breeze on your face as you ascend smoothly and safely over snowfields in an Ice Flyer at Titlis."
                li3="Be amazed by the magnificent beauty of Rhine Falls, Europe's largest waterfall, and hear the mighty roar as you go on a boat ride."
                li4="Fascinate your inner soccer enthusiast as you witness the legendary FIFA museum."
                li5="Its famous Swiss hospitality, chocolate, and cheese further enhance the travel experience, making it a top destination year-round."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 : Arrival in Zurich"
                content="Welcome to Zurich ! Upon arrival at Zurich Airport, activate your 4 days second-class continuous Swiss Pass, which offers unlimited travel on the Swiss Travel System network, including trains, buses, and boats. From the airport, head to your hotel with the pass for check-in. Spend the rest of the day exploring Zurich, a city known for its vibrant cultural scene, historical landmarks, and stunning architecture. Later, head back to your hotel for an overnight stay."
              
                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Swiss Continuous Pass - 6 Days Pass"

                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Zurich"


                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Zurich"
            />
              <Accordion 
                title="DAY 2 : Day Trip to Mount Titlis | Lucerne Walking Tour with Cruise"
                content="In the morning, get ready to go on an exhilarating excursion to Mount Titlis. Travel to Engelberg using swiss pass & take the Rotair, the world's first 360-degree revolving cable car, to the summit. Enjoy amazing views of the Swiss Alps, and walk on the Titlis Cliff Walk. Later, head for a Lucerne walking tour and a cruise. Visit the Chapel Bridge & the Lion Monument, then enjoy the soothing ride as you go on a boat ride across Lake Lucerne. Later, head back to your hotel for an overnight stay."

                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Train From => Zürich Enge To => Luzern => Engelberg station ==> Transfer in Coach From => Engelberg station => Engelberg Titlisbahn"

                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Mount Titlis Tour, Switzerland - With Swiss Pass with Ice flyer"


                meal="fa-solid fa-car"
                Meal="Shared Transfer"
                MealDetail="Transfer in Coach From => Engelberg Titlisbahn => To => Engelberg station ===> Transfer in Train From =>Engelberg station To =>Lucerne Station => Zurich Station"

                Time="fa-solid fa-mountain-sun"
                TimeDetail="Activity"
                dura="Lucerne Walking Tour with Lake Lucerne Cruise"
            />
             <Accordion 
                title="DAY 3 : Day at Leisure in Zurich"
                content="Today is a day at leisure to explore Zurich at your own pace using the swiss pass. You can visit the Kunsthaus Zurich (Museum of Art), and the Swiss National Museum. Wander through the picturesque neighbourhoods, shop for souvenirs, or relax in one of the city's many parks. Zurich offers a mix of cultural, historical, and natural attractions to suit all interests. Later, head back to your hotel for an overnight stay."
                
                Max="fa-solid fa-utensils"
                MaxAltitude="Meal"
                MaxAlt="Breakfast at Deluxe Hotel in Zurich"
     
            /> 
             
             <Accordion 
                title="DAY 5 : Leisure Day in Zurich"
                content="This day is for you to spend the day at leisure, as you continue exploring Zurich with a visit to the FIFA World Football Museum. This interactive museum celebrates the history of football and showcases a collection of memorabilia, including the FIFA World Cup Trophy. Spend the rest of the day visiting other Zurich attractions, such as the Fraumünster Church, Grossmünster, or the botanical gardens. Later, head back to your hotel for an overnight stay."

                Time="fa-solid fa-utensils"
                TimeDetail="Meal"
                dura="Breakfast at Deluxe Hotel in Zurich"
                
            /> 
            <Accordion 
                title="DAY 6 : Departure Day"
                content="Check out from your hotel, and head to the Zurich Airport using swiss pass for your departure flight, bringing an end to your unforgettable journey through Zurich. ====> Check Out from Deluxe Hotel in Zurich"

                Time="fa-solid fa-utensils"
                TimeDetail="Meal"
                dura="Breakfast at Deluxe Hotel in Zurich"
                
            /> 
           
             <StickyForm 
            title="Glimpse Of Switzerland | FREE FIFA Museum Tickets"
            originalPrice="INR 1,32,900"
            discountedPrice="INR 90,000"
            saleType="Best Offer!!"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Switzerland;