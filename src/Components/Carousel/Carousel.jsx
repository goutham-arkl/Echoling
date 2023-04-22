import React,{useState} from 'react'
import './Carousel.css'
import Carousel1 from '../../images/Carousel1.jpg'
import Carousel2 from '../../images/Carousel2.jpg'

const Carousel = () => {
    const images = [
        Carousel1,Carousel2,
      ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="slider" style={{backgroundImage:`url(${images[currentImageIndex]})`}}>
        <button onClick={handlePrevious}>Previous</button>
        
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };


export default Carousel