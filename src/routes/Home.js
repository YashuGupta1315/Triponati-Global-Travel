import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trek from "../components/Trek";
import Footer from "../components/Footer";
import HoneymoonSection from "../components/HoneymoonSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Triponati Global Travel"
        text="We Fulfill Your Adventure Desire.."
        buttonText="Travel Plan"
        url="/TravelPlan"
        btnClass="show"
      />
      <Destination />
      <HoneymoonSection/>
      <Trek />
      <Footer />
    </>
  );
}
export default Home;
