import React from 'react'
import './Section1.css'
import line from '../../images/line.png'
import { cards } from '../../Helpers/academyCardData'
const Section1 = () => {
  return (
    <div className='container'>
      <div className='heading'>
        <h2>Academics</h2>
        <img src={line}/>
      </div>
      <div className='cards'>
       {cards.map((card)=>{
         return(
            <div className='card' key={card.id} style={{  backgroundImage:`url(${card.img})`}} >
              <div className='content'>
              <span>{card.title}</span>
              <span>Learn More &#8594;</span>
              </div>

            </div>
         )
       })
     }
      </div>

    </div>
  )
}

export default Section1