import "./static/css/App.css";
import Base from "./Layout/Base";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import RoadMap from "./components/RoadMap/RoadMap";
import LeftSideNavbar from "./components/LeftSideNavbar/LeftSideNavbar";
import ICO_update from "./components/ICO_update/ICO_update";
import FAQ from "./components/FAQ/FAQ";
import ICO_distribution from "./components/ICO_distribution/ICO_distribution";
function App() {
  return (
    <div id="CryptoAirdropApp">
      <Base>
        <Home></Home>
        <div id="AboutAndServices">
          <About></About>
          <Services></Services>
        </div>
        <RoadMap></RoadMap>
        <div id="ico_and_faq">
          <ICO_update></ICO_update>
          <FAQ></FAQ>
          <ICO_distribution></ICO_distribution>
        </div>
      </Base>

      {/* Aside fix item */}
      <LeftSideNavbar></LeftSideNavbar>
    </div>
  );
}

export default App;
