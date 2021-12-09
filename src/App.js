import "./static/css/App.css";
import Base from "./Layout/Base";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import RoadMap from "./components/RoadMap/RoadMap";
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
    </div>
  );
}

export default App;
