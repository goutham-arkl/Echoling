
import './App.css';
import Section1 from './Components/Section1/Section1';
import Navbar from './Components/Header/Navbar';
import Section2 from './Components/Section2/Section2';
import CampusSection from './Components/CampusSection/CampusSection';
import PopularCourses from './Components/PopularCourses/PopularCourses';
import CountSection from './Components/CountSection/CountSection';
import UpComingEvents from './Components/UpComingEvents/UpComingEvents';
import Footer from './Components/Footer/Footer';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <Section1/>
    <Section2/>
    <CampusSection/>
    <PopularCourses/>
    <CountSection/>
    <UpComingEvents/>
    <Footer/>
    </div>
  );
}

export default App;
