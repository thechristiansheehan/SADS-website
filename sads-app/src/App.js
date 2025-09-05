import './App.css';
import logo from './assets/images/sads_logo_cropped.png';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <div className="App"  style={{
          fontFamily: '"Riona Sans Black", monospace',
        }}>
          <NavBar />
          <div style={{ margin: "50px 0" }}></div> {/* Temporary margin */}
          <Footer />
    </div>
  );
}

export default App;
