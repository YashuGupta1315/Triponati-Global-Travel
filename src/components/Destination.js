import "./DestinationStyle.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        heading1="Namaste India"
        text1="India, a land of diverse cultures, rich history, and breathtaking landscapes, offers an unparalleled tourism experience. From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, India's geographical diversity is astounding. Visitors can explore ancient temples, vibrant festivals, and bustling markets, each reflecting the country's unique heritage. Iconic landmarks such as the Taj Mahal, Jaipur's palaces, and Varanasi's ghats draw millions of tourists annually. India also boasts vibrant wildlife sanctuaries, pristine beaches, and spiritual retreats. Its culinary diversity, friendly locals, and colorful traditions make India a compelling destination for travelers seeking both adventure and cultural enrichment."
        Explore="Explore.."
        url="/India"
        heading2="International Trips"
        text2="An international trip offers a unique opportunity to explore new cultures, cuisines, and landscapes. It allows travelers to step out of their comfort zones, experience different ways of life, and broaden their perspectives. Whether it's visiting iconic landmarks, enjoying local traditions, or meeting new people, each destination provides a distinct adventure. Planning ahead is crucial, including obtaining necessary travel documents, vaccinations, and understanding local customs to ensure a smooth and enjoyable journey. International travel enriches the soul and creates lasting memories, making it an invaluable experience for anyone seeking to understand the world better."
      />
    </div>
  );
};

export default Destination;
