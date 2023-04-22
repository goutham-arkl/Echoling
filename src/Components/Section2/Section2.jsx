import React from 'react'
import img from '../../images/section/sectionimg1.png'
import badge from '../../images/section/badge.png'

import './Section2.css'
const Section2 = () => {
  return (
    <div className='section-2-conatiner'>
      
     <div style={{backgroundImage:`url(${img})` , backgroundRepeat:'no-repeat'}} className='section-2-image'>
      
      <img src={badge}/>
     </div>

     <div className='section-2-content'>
       <div className='heading-container'>
        <h2 style={{color:'#00306e'}}>Welcome to</h2>
        <h2 style={{color:'#D2093C'}}>Echooling LMS Platform</h2>
       </div>
       <div className='section-2-description'>
        <p>Education is both the act of teaching knowledge to others and
        the act of receiving knowledge from someone else.</p>
        <p>
         Have questions ? <a href='#'>Get Free Guide</a>
        </p>
        </div>
      
         <div style={{border:'none'}} className='section-2-description'>
         <p>Education also refers to the knowledge received through schooling instruction
         and to the institution of teaching as a whole. The main purpose of education
         is the integral development of a person.
         </p>

         <div className='section-2-button-container'>
            <button className='pink-button'> Read More </button>

            </div>
         </div>
         
         </div>

     </div>

    
  )
}

export default Section2