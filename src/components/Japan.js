import React from 'react';
import HeaderSlider from './HeaderSlider';
import InternationalDetails from "./InternationalDetails";
import Accordion from "./Accordion";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

const  Japan = () => {
    const homePageSlides = [
        { 
            id: 1, 
            title: 'Tokyo', 
            image: 'https://media1.thrillophilia.com/filestore/qq9a3vws81v5ui0el5imhia9i9hy_shutterstock_1275619021.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 2, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/pxeybs5c52nfiqhg1x8kwbznp5vh_shutterstock_1555043207.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 3, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/xakmv2b9sy4xjo1kpfdgm7m6t4ds_shutterstock_599343209.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 4, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 5, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 6, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/bod5zc2vlyf6hxsdznlki15x709y_mainR_01.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 7, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/5mdbo6issuau8lpnanxf7d6qhgdi_shutterstock_1208574490.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 8, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 9, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 10, 
            title: 'Osaka', 
            image: 'https://media1.thrillophilia.com/filestore/se7fozuzxltz0frileh5he3jkl4u_shutterstock_2359266537.jpg?h=252&w=auto&dpr=1.4875000715255737' 
        },
        { 
            id: 11, 
            title: 'Tokyo', 
            image: 'https://media1.thrillophilia.com/filestore/a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 12, 
            title: 'Tokyo', 
            image: 'https://media1.thrillophilia.com/filestore/ex1tslqukb3q5nhoyy35nitmlfbw_shutterstock_1322129618%20(1).jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 13, 
            title: 'Tokyo', 
            image: 'https://media1.thrillophilia.com/filestore/i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 14, 
            title: 'Tokyo', 
            image: 'https://media1.thrillophilia.com/filestore/kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
        { 
            id: 15, 
            title: 'Tokyo', 
            image: 'https://media1.thrillophilia.com/filestore/gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg?h=252&w=auto&dpr=1.4875000715255737'
        },
      ];
    
      const homePageSettings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
                heading="Discover Japan | Temples, Technology, and Tradition"
                para="Japan is an island nation in East Asia, known for its rich cultural heritage, advanced technology, and stunning natural landscapes. It blends ancient traditions with modern innovations, evident in its historic temples and cutting-edge cities like Tokyo. The country is renowned for its cuisine, including sushi and ramen, and its cultural exports, such as anime and manga. Japan's seasonal beauty, from cherry blossoms in spring to vibrant autumn foliage, along with its disciplined, respectful society, makes it a unique and fascinating place to explore."
                Tclass="fa-solid fa-car"
                Transfer="Transfer Included"
                Stayclass="fa-solid fa-bed"
                Stay="Stay Included"
                Mealclass="fa-solid fa-utensils"
                Meal="Breakfast Included"
                Sightseeingclass="fa-solid fa-umbrella-beach"
                Sightseeing="Sightseeing Included"
                head="Trip Highlights"
                li1="Explore the timeless charm of Japan, creating a beautiful journey through temples, bustling cities, and breathtaking landscapes."
                li2="Visit Meiji Shrine, an oasis of beauty in Tokyo, where centuries-old rituals and serene forested pathways offer a peaceful retreat from the bustling city."
                li3="Discover the architectural wonder of Kinkaku-ji, a Zen Buddhist temple covered in gold leaf and surrounded by lush greenery and peaceful ponds."
                li4="Experience the vibrant energy of Dotonbori District, a bustling area in Osaka known for its neon lights, and lively atmosphere."
                li5="Enjoy stunning views of the Hakone region and Owakudani Valley from Japan's highest ropeway, offering a memorable experience."
                Itinerary="Outline Itinerary" 
            />
            <Accordion 
                title="DAY 1 : Arrival in Tokyo | Day at Leisure"
                content="Welcome to Japan! Board your flight from Delhi to reach Narita International Airport. Upon arrival, get transferred to the hotel and check in. Today, you can enjoy your day at your leisure. You can witness Japan's rich culture and traditions at Tsukiji Hongan Ji Temple, Samurai Theater, Yoyogi Park, the iconic Shibuya Crossing, and many more such attractions. Then, return to the hotel on your own for an overnight stay."
                Time="fa-solid fa-plane-departure"
                TimeDetail="Flight"
                dura="Flight - Indira Gandhi International Airport to Narita International Airport"
                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Narita International Airport To => Deluxe Hotel in Tokyo"
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Tokyo"
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast included"
            />
              <Accordion 
                title="DAY 2 : Tokyo Sightseeing Tour by Bus"
                content="Get ready to explore Tokyo! Head to the pick-up point, Matsuya Ginza, for the Tokyo sightseeing tour. You will explore the beautiful Meiji Jingu, one of the most iconic Shinto shrines. Then, enjoy a scenic view of the Imperial Palace, Senso Ji Temple, Asakusa, Odaiba District, and many more such attractions. Lastly, visit the Skytree observation deck. Then get transferred to the drop-off point, Matsuya Ginza, to head back to the hotel on your own for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Coach From => Matsuya Ginza To => Full Day Tokyo City Tour by Bus"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Full Day Tokyo City Tour by Bus - From LOVE Statue with Lunch on a Shared basis"

                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Coach From => Full Day Tokyo City Tour by Bus To => Matsuya Ginza"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Tokyo"

            />
             <Accordion 
                title="DAY 3 : Excursion To Mount Fuji and Hakone"
                content="Today, get ready to explore the iconic symbols of Japan, Mt. Fuji, and Hakone. From your hotel, head to Shinjuku Love on your own and board your transfer to Mt. Fuji. Experience the beauty of the World Heritage Site of Mount Fuji, where its graceful conical form adds charm to the landscape. Then, enjoy a thrilling ropeway ride in Hakone and explore Owakudani Valley. Later, get transferred to the drop-off point, Odawara Station. From here, board a bullet train to Tokyo Station."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Coach From => Shinjuku Love Sculpture To => Mount Fuji and Hakone 1 Day Tour From Tokyo"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Mount Fuji and Hakone 1 Day Tour From Tokyo - Return via Bullet Train with Lunch on a Shared basis"

                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Coach From => Mount Fuji and Hakone 1 Day Tour From Tokyo To => Odawara Train Station  =======> Transfer in Bullet Train (Shinkansen) From => Odawara Train Station To => Tokyo Train Station"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Tokyo"

            />
            <Accordion 
                title="DAY 4 : Arrival in Osaka | Day at Leisure"
                content="In the morning, check out of the hotel in Tokyo and head to Tokyo station at your own pace to board the Shinkansen bullet train to Osaka (tickets included). Upon arrival, reach the hotel on your own and check in. Later, you can explore Osaka at your leisure and see places like Osaka Castle, known for its rich Japanese history, or famous shopping spots like Den Den Town and Dotonbori. Later, return to the hotel on your own for an overnight stay. ==========> Check Out from Deluxe Hotel in Tokyo"
                Time="fa-solid fa-car"
                TimeDetail="Shared Transfer"
                dura="Transfer in Bullet Train (Shinkansen) From => Tokyo Station To => Osaka Station"
                
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast Included"
                
                Over="fa-solid fa-bed"
                OverNight="Stay At"
                hotel="Check-in at Deluxe Hotel in Osaka"
            />
            <Accordion 
                title="DAY 5 : Day Trip to Kyoto and Nara"
                content="Head to the pick-up point, Hearton Hotel Nishiumeda, on your own to board your transfer for the day trip to Kyoto and Nara. Upon arrival, you will first visit the Kinkakuji Temple, renowned for its stunning Buddhist architecture. Then, you will head to the Arashiyama District and Nara Park, which is home to hundreds of free-roaming deer. After the tour, get transferred to the drop-off point, the Hearton Hotel Nishiumeda. Then return to the hotel on your own for an overnight stay."
                Max="fa-solid fa-car"
                MaxAltitude="Shared Transfer"
                MaxAlt="Transfer in Coach From => Hearton Hotel Nishiumeda ==> Kyoto and Nara Sightseeing Day Tour From Osaka ==> To => Hearton Hotel Nishiumeda"
                
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Kyoto and Nara Sightseeing Day Tour From Osaka - From Osaka+Pork Shabu-shabu on a Shared basis"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Osaka"
                
            />
            <Accordion 
                title="DAY 6 : Osaka Walking Tour"
                content="In the morning, head to the pick-up point, Hotel Hankyu Respire Osaka, on your own for an exciting walking tour to Osaka. Your tour will begin at Osaka Station City, known for its commercial complex. Next, visit Shinsekai, Hozenji Yokocho, and Dotonbori District to relish the local street food of Osaka. The tour concludes at Ebisu Bridge. After that, you can explore Tennoji Park, the Osaka Science Museum, and much more on your own. Then head to the hotel on your own for an overnight stay."
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Osaka Half-Day Walking Tour"
               
                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Osaka"
            />
             <Accordion 
                title="DAY 7 : Day at Leisure"
                content="Today, you can explore the city at your leisure. You can visit Miraiza Osaka-jo, a commercial complex elegantly built in 1931 as the Fourth Division headquarters of the Imperial Japanese Army. Next, you can experience the beauty of Osaka from Abeno Harukas, a 300-meter-high skyscraper. You can also visit Shinsekai, Hokoku Shrine, and many more places. After exploring the city, return to your hotel on your own for an overnight stay."
                Over="fa-solid fa-mountain-sun"
                OverNight="Activity"
                hotel="Enjoy your time at Leisure"

                meal="fa-solid fa-utensils"
                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Pattaya"
                
            />
             <Accordion 
                title="DAY 8 : Departure Day"
                content="In the morning, pack your bags full of memorable adventures. Check out of the hotel, and get transferred to Osaka International Airport, where your trip comes to an end. =====> Check Out from Deluxe Hotel in Osaka"

                Max="fa-solid fa-car"
                MaxAltitude="Private Transfer"
                MaxAlt="Transfer in Sedan From => Deluxe Hotel in Osaka To => Kansai International Airport"
                meal="fa-solid fa-utensils"
                
                Time="fa-solid fa-plane-departure"
                TimeDetail="Flight"
                dura="Flight - Kansai International Airport to Indira Gandhi International Airport"

                Meal="Meal"
                MealDetail="Breakfast at Deluxe Hotel in Osaka"  
            />
          
            <StickyForm 
            title="Wonders of Thailand | Culture, Corals and Coastlines"
            originalPrice="INR 3,41,748.28"
            discountedPrice="INR  2,56,953.38"
            saleType="SAVE INR  84,794.91"
            onSubmit={handleSubmit}
            />
            <Footer/>
        </>
      );
}
export default Japan;