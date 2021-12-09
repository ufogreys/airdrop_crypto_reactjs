import './static/css/App.css'
import Base from './Layout/Base';
import Home from './components/Home/Home';
import About from './components/About/About';
function App() {
  return (
    <div id="CryptoAirdropApp">
      <Base>
        <Home></Home>
        <About></About>
      </Base>
    </div>
  );
}

export default App;
