import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Adventure() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Adventure"
        text="Let the Adventure begin!"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Footer />
    </>
  );
}
export default Adventure;
