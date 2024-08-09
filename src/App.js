import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Trips from "./routes/Trips";
import Adventure from "./routes/Adventure";
import ContactUs from "./routes/ContactUs";
import Signup from "./components/Signup";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trips />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />{" "}
        {/* Corrected this line */}
      </Routes>
    </div>
  );
}
