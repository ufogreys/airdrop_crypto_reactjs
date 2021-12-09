import "./static/css/App.css";
import Base from "./Layout/Base";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import RoadMap from "./components/RoadMap/RoadMap";
import LeftSideNavbar from "./components/LeftSideNavbar/LeftSideNavbar";
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
      </Base>

      {/* Aside fix item */}
      <LeftSideNavbar></LeftSideNavbar>
    </div>
  );
}

export default App;
