import './styles/globals.css';
import PageLoader    from './components/PageLoader';
import CustomCursor  from './components/CustomCursor';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About         from './components/About';
import Services      from './components/Services';
import WhyUs         from './components/WhyUs';
import Careers       from './components/Careers';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

function App() {
  return (
    <div className="App">
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <About />
        <Services />
        <WhyUs />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
