import React,{useState} from 'react'
import line from '../../images/line.png'
import './Reviews.css'
import photo from '../../images/review/1.png'
import star from '../../images/review/star.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan, faStar } from '@fortawesome/free-solid-svg-icons'
const Reviews = () => {
    const review = [
        {
            id:1,
            image:photo,
            name:'Justin Case'
        },
        {
            id:2,
            image:photo,
            name:'Ron'
        },
        {
            id:3,
            image:photo,
            name:'Ramon'
        }
      ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? review.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === review.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
    <div className='reviews-container'>
    <div style={{padding:'20px'}} className='heading'>
    <h2 style={{marginLeft:'23px'}}>What our student saying</h2>
    <img src={line}/>
    </div>
    <div className="review-slider">
    <button onClick={handlePrevious}><FontAwesomeIcon icon={faLessThan}/></button>
    <div className='content-div'>
      <div className='review-img'>
        <img src={photo}/>
      </div>

            <div key={review[currentImageIndex].id} className='review-content'>
            
            <span className='name'>{review[currentImageIndex].name}</span>
            <em className='student'>Student</em>
            <p className='opinion'>Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>
            <span className='rating'><span style={{color:'#ffa439'}}><FontAwesomeIcon icon={faStar}/> 
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
                                    </span>  4.9 (14 Reviews)</span>
            
            </div>
          
    </div>
    <button onClick={handleNext}><FontAwesomeIcon icon={faGreaterThan}/></button>
    </div>
    </div>
  )
}

export default Reviews