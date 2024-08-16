import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Trips from "./routes/Trips";
import Adventure from "./routes/Adventure";
import ContactUs from "./routes/ContactUs";
import Signup from "./components/Signup";
import India from "./components/India";
import International from "./components/International";
import TravelPlan from "./components/TravelPlan";
import Andra from "./components/Andra";
import Arunachal from "./components/Arunachal";
import Assam from "./components/Assam";
import Bihar from "./components/Bihar";
import Chhattisgarh from "./components/Chhattisgarh";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trips />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />{" "}
        <Route path="/India" element={<India />} />
        <Route path="/International" element={<International />} />
        <Route path="/TravelPlan" element={<TravelPlan />} />
        <Route path="/Andra" element={<Andra />} />
        <Route path="/Arunachal" element={<Arunachal />} />
        <Route path="/Assam" element={<Assam />} />
        <Route path="/Bihar" element={<Bihar />} />
        <Route path="/Chhattisgarh" element={<Chhattisgarh />} />
      </Routes>
    </div>
  );
}
