
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopSellingBooks from './components/TopSellingBooks'


function App() {
  return (
  <>
<Navbar></Navbar>
<HeroSection></HeroSection>
<TopSellingBooks></TopSellingBooks>
<Footer></Footer>
  </>
  );
}

export default App;
