import React from 'react'
import'./PopularCourses.css'
import line from '../../images/line.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import { cards } from '../../Helpers/PopularCoursesData'
const PopularCourses = () => {
  return (
    <div className='Campus-section'>
    
    <div style={{padding:'20px'}} className='heading'>
        <h2 style={{marginLeft:'23px'}}>Popular Courses</h2>
        <img src={line}/>
    </div>

    <div className='card-container'>
       {cards.map((card)=>{
        return(
            <div key={card.id} className='single-card'>
              <div className='card-img' style={{backgroundImage:`url(${card.img})`}}></div>
              <div className='cardData'>
               <ul>
                <li className='pink disc'>UX Design</li>
                <li className='blue disc'>4 Lessons</li>
               </ul>
               <a href='' style={{ height:'70px', borderBottom:'1px solid #efefef '}}>{card.heading}</a>

               <div className='number-price'>
                   <ul>
                   <li className='blue' style={{}}><FontAwesomeIcon icon={faUserGroup}/> 56  Students </li>
                   <li className='pink'>$69.00</li>
                   </ul>

               </div>

              </div>

            </div>
        )
       })}
      
    </div>
    
    <button className='pink-button button-config' >View All Courses  <FontAwesomeIcon icon={faArrowRight}/></button>
</div>
  )
}

export default PopularCourses