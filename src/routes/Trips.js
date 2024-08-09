import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Trips() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Trip's"
        text="Let explore the World Together..."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />

      <Footer />
    </>
  );
}
export default Trips;
