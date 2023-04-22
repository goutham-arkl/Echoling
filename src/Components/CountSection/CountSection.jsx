import React from 'react'
import './CountSection.css'
const CountSection = () => {
  return (
   <div className='count-section-container'>
        <div className='count-container'>
          <div className='count-box'>
            <p>Successfully <br/>Trained</p>
            <span>1478</span>
            <p>Enrolled Learners</p>
          </div>
          <div className='count-box'>
          <p>Successfully <br/>Trained</p>
          <span>1731</span>
          <p>Enrolled Learners</p>
        </div>
        <div className='count-box'>
        <p>Successfully <br/>Trained</p>
        <span>280</span>
        <p>Enrolled Learners</p>
      </div>
      <div className='count-box'style={{border:'none'}} >
      <p>Successfully <br/>Trained</p>
      <span>1045</span>
      <p>Enrolled Learners</p>
    </div>
        </div>
   </div>
  )
}

export default CountSection