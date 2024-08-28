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
import Goa from "./components/Goa";
import Gujarat from "./components/Gujarat";
import Trek from "./components/Trek";
import Haryana from "./components/Haryana";
import Himachal from "./components/Himachal";
import Jharkhand from "./components/Jharkhand";
import Karnataka  from "./components/Karnataka";
import Kerala from "./components/Kerala";
import Madhya from "./components/Madhya";
import Maharashtra from "./components/Maharashtra";
import Annapurana from "./components/Annapurana";
import Manaslu from "./components/Manaslu";
import Langtang from "./components/Langtang";
import Gokyo from "./components/Gokyo";
import Ghorepani from "./components/Ghorepani";
import Everest from "./components/Everest";
import Manipur from "./components/Manipur";
import Meghalaya from "./components/Meghalaya";
import Mizoram from "./components/Mizoram";
import Nagaland from "./components/Nagaland";
import Odisha from "./components/Odisha";
import Punjab from "./components/Punjab";
import Rajasthan from "./components/Rajasthan";
import Sikkim from "./components/Sikkim";
import TamilNadu from "./components/TamilNadu";
import Telangana from "./components/Telangana";
import Tripura from "./components/Tripura";
import UttarPradesh from "./components/UttarPradesh";
import Uttarakhand from "./components/Uttarakhand";
import WestBengal from "./components/WestBengal";
import DadraandNagar from "./components/DadraandNagar";
import Lakshadweep from "./components/Lakshadweep";
import Delhi from "./components/Delhi";
import Puducherry from "./components/Puducherry";
import Ladakh from "./components/Ladakh";
import JammuandKashmir from "./components/JammuandKashmir";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trips" element={<Trips />} />
        <Route path="/Adventure" element={<Adventure />} />
        <Route path="/trek" element={<Trek />} />{" "}
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
        <Route path="/Goa" element={<Goa />} />
        <Route path="/Gujarat" element={<Gujarat />} />
        <Route path="/Haryana" element={<Haryana />} />
        <Route path="/Himachal" element={<Himachal />} />
        <Route path="/Jharkhand" element={<Jharkhand />} />
        <Route path="/Karnataka" element={<Karnataka />}/>
        <Route path="/Kerala" element={<Kerala />}/>
        <Route path="/Annapurana" element={<Annapurana/>}/>
        <Route path="/Manaslu" element={<Manaslu/>}/>
        <Route path="/Langtang" element={<Langtang/>}/>
        <Route path="/Gokyo" element={<Gokyo/>}/>
        <Route path="/Ghorepani" element={<Ghorepani/>}/>
        <Route path="/Everest" element={<Everest/>}/>
        <Route path="/Madhya" element={<Madhya/>}/>
        <Route path="/Manipur" element={<Manipur/>}/>
        <Route path="/Maharashtra" element={<Maharashtra/>}/>
        <Route path="/Meghalaya" element={<Meghalaya/>}/>
        <Route path="/Mizoram" element={<Mizoram/>}/>
        <Route path="/Nagaland" element={<Nagaland/>}/>
        <Route path="/Odisha" element={<Odisha/>}/>
        <Route path="/Punjab" element={<Punjab/>}/>
        <Route path="/Rajasthan" element={<Rajasthan/>}/>
        <Route path="/Sikkim" element={<Sikkim/>}/>
        <Route path="/TamilNadu" element={<TamilNadu/>}/>
        <Route path="/Telangana" element={<Telangana/>}/>
        <Route path="/Tripura" element={<Tripura/>}/>
        <Route path="/UttarPradesh" element={<UttarPradesh/>}/>
        <Route path="/Uttarakhand" element={<Uttarakhand/>}/>
        <Route path="/WestBengal" element={<WestBengal/>}/>
        <Route path="/AndamanandNicobar" element={<AndamanandNicobar/>}/>
        <Route path="/DadraandNagar" element={<DadraandNagar/>}/>
        <Route path="/Lakshadweep" element={<Lakshadweep/>}/>
        <Route path="/Delhi" element={<Delhi/>}/>
        <Route path="/Puducherry" element={<Puducherry/>}/>
        <Route path="/Ladakh" element={<Ladakh/>}/>
        <Route path="/JammuandKashmir" element={<JammuandKashmir/>}/>
      </Routes>
    </div>
  );
}
