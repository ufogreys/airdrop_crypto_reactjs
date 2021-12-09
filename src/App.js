import "./static/css/App.css";
import Base from "./Layout/Base";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
function App() {
  return (
    <div id="CryptoAirdropApp">
      <Base>
        <Home></Home>
        <div id="AboutAndServices">
          <About></About>
          <Services></Services>
        </div>
      </Base>
    </div>
  );
}

export default App;
