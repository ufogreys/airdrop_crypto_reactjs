import "./static/css/App.css";
import Base from "./Layout/Base";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import RoadMap from "./components/RoadMap/RoadMap";
import LeftSideNavbar from "./components/LeftSideNavbar/LeftSideNavbar";
import IcoUpdate from "./components/IcoUpdate/IcoUpdate";
import FAQ from "./components/FAQ/FAQ";
import IcoDistribution from "./components/IcoDistribution/IcoDistribution";
import ContactUs from "./components/ContactUs/ContactUs";
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <div id="CryptoAirdropApp">
      {/* cursor animatation */}
      <AnimatedCursor  innerSize={12}
      outerSize={20}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      trailingSpeed={15}></AnimatedCursor>
      <Base>
        <Home></Home>
        <div id="AboutAndServices">
          <About></About>
          <Services></Services>
        </div>
        <RoadMap></RoadMap>
        <div id="ico_and_faq">
          <IcoUpdate></IcoUpdate>
          <FAQ></FAQ>
          <IcoDistribution></IcoDistribution>
          <ContactUs></ContactUs>
        </div>
      </Base>

      {/* Aside fix item */}
      <LeftSideNavbar></LeftSideNavbar>
    </div>
  );
}

export default App;
