import React from "react";
import ImageGallery from "./ImageGallery";
import States from "./States";
import StickyForm from "./StickyForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
const images = [
  {
    src: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/gaya/mahabodhi_temple/buddhist_gaya_category_a_mahabodhi_temple__pic_11.jpg/jcr:content/renditions/cq5dam.web.2000.765.jpeg",
    alt: "mahabodhi temple",
  },
  {
    src: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/nalanda_ka_khandahar/nalanda_khandar_a7306723_edit.jpg/jcr:content/renditions/cq5dam.web.2000.765.jpeg",
    alt: "ruins of nalanda",
  },
  {
    src: "https://media.istockphoto.com/id/1323304797/photo/takhat-sri-harimandir-ji-gurdwara-also-known-as-patna-sahib.jpg?s=612x612&w=0&k=20&c=J-lHM2xc4r7y6dlpIOBh9eAreLJMVhvSuMZgWuLAlWQ=",
    alt: "takhat sri harimandir ji patna sahib",
  },
  {
    src: "https://t4.ftcdn.net/jpg/03/11/91/91/360_F_311919106_NxStt61NvA7SJisgxwJIe3uFT8wtdmmq.jpg",
    alt: "gol ghar",
  },
  {
    src: "https://image-timescontent.timesgroup.com/thumb/263855.webp",
    alt: "buddha smriti park",
  },
  {
    src: "https://static2.tripoto.com/media/filter/tst/img/OgData/1677666601_untitled_design_50.png",
    alt: "kaimur hills",
  },
  {
    src: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_b/aurangabad/daud_khan_fort/DSC_3479.jpg/jcr:content/renditions/cq5dam.web.480.480.jpeg",
    alt: "daud khan fort",
  },
  {
    src: "https://www.shutterstock.com/image-photo/bodh-gaya-bihar-seat-enlightenment-600nw-1570135798.jpg",
    alt: "daud khan fort",
  },
];
const Bihar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <Navbar/>
      <ImageGallery images={images} />
      <div className="App">
        <States
          title="Bihar"
          text="Bihar, a state rich in history and culture, offers a unique blend of ancient traditions and modern attractions. As the birthplace of Buddhism, Bihar is home to some of the most revered religious sites, including Bodh Gaya, where Lord Buddha attained enlightenment. The state is also known for its magnificent temples, vibrant festivals, and historical landmarks like the ancient city of Nalanda and the ruins of the Pataliputra capital. Visitors to Bihar can explore its lush landscapes, traditional villages, and bustling cities, all while experiencing the warmth and hospitality of its people."
          icon="fa-regular fa-calendar-days"
          para="7 Days"
          icon1="fa-regular fa-clock"
          para1="168 hours"
        />
        <StickyForm
          title="Mahabodhi Temple| Ruins of Nalanda - Gol Ghar - Buddha Smriti Park - Kamakhya Temple - Kaimur Hills: Get 26% off!"
          originalPrice="INR 60,000"
          discountedPrice="INR 44,400"
          discountPercentage={26}
          saleType="FREEDOM SALE"
          onSubmit={handleSubmit}
        />
      </div>

      <Footer />
    </>
  );
};
export default Bihar;
