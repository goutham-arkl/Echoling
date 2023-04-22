import React from 'react'
import './UpComingEvents.css'
import line from '../../images/line.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot, faNavicon } from '@fortawesome/free-solid-svg-icons';
const UpComingEvents = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='events-container'>

     <div style={{padding:'20px'}} className='heading'>
       <h2 style={{marginLeft:'23px'}}>Upcoming Events</h2>
       <img src={line}/>
     </div>
     <div className='card-carousel'>
     <Carousel
      dotListClass='custom-dot-list-style'   arrows={false}  showDots={true} responsive={responsive}>
     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>

     <div className='slide-card'>
       <div className='date'>
       <h1>14</h1>
       <span>April,2022</span>
       </div>
       <div className='event-time-name'>
         <p>10:30AM - 12:30PM</p>
         <span>A Better Alternative To Grading Student Writing</span>
       </div>
       <div className='place'>
        <FontAwesomeIcon style={{backgroundColor:'trnsparent'}} icon={faLocationDot}/> New York,USA
       </div>

       <button className='find-btn'>Find Out More</button>
     
     </div>
    
   </Carousel>
     </div>

    
    </div>
  )
}

export default UpComingEvents