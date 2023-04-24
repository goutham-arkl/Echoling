import React,{useState} from 'react'
import './Carousel.css'
import Carousel1 from '../../images/Carousel1.jpg'
import Carousel2 from '../../images/Carousel2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan,faPlay } from '@fortawesome/free-solid-svg-icons';

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
        <button className='prev' onClick={handlePrevious}><FontAwesomeIcon icon={faLessThan}/></button>

        <div className='carousel-data'>
            <div className='carousel-headings'>
                <span className='social-life'>Great Quality Cocial life</span>
                <h2 className='carousel-title'>Discover the world of possible university</h2>
                <button className='admission-btn'>Admissions</button>
            </div>
            <div className='video-div'>
                <div className='anime'>
                <button className='video-btn'><FontAwesomeIcon icon={faPlay}/></button>
                </div>
                </div>
        </div>
        
        <button className='next' onClick={handleNext}><FontAwesomeIcon icon={faGreaterThan}/></button>
      </div>
    );
  };


export default Carousel