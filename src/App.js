import "./static/css/App.css";
import Base from "./Layout/Base";
import Home from "./components/Home/Home";
import {About} from "./components/About/About";
import Services from "./components/Services/Services";
import RoadMap from "./components/RoadMap/RoadMap";
import LeftSideNavbar from "./components/LeftSideNavbar/LeftSideNavbar";
import IcoUpdate from "./components/IcoUpdate/IcoUpdate";
import FAQ from "./components/FAQ/FAQ";
import IcoDistribution from "./components/IcoDistribution/IcoDistribution";
import ContactUs from "./components/ContactUs/ContactUs";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Features } from "./components/About/About";
import { RewardBnb } from "./components/About/About";
import WatchModal from "./components/WatchModal/WatchModal";
function App() {
  return (
    <div id="CryptoAirdropApp">
      <BrowserRouter>
        {/* cursor animatation */}
        <AnimatedCursor
          innerSize={12}
          outerSize={20}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          trailingSpeed={15}
        ></AnimatedCursor>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/roadmap" element={<RoadMap />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/feature" element={<Features />} />
            <Route path="/whitepaper" element={<Services />} />
            <Route path="/airdrop" element={<IcoUpdate />} />
            <Route path="/presale" element={<IcoDistribution />} />
            <Route path="/reward_bnb" element={<RewardBnb />} />
          </Routes>
        </Base>

        {/* Aside fix item */}
        <LeftSideNavbar></LeftSideNavbar>
        <WatchModal></WatchModal>
      </BrowserRouter>
    </div>
  );
}

export default App;
