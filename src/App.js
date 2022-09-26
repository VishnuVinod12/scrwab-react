import './App.css';
import Header from './Sections/Header';
import Home from './Sections/Home';
import Plans from './Sections/Plans';
import Download from './Sections/Download';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Plans />
      <Download />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
