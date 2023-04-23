import React from 'react'
import line from '../../images/line.png'
import './Reviews.css'
const Reviews = () => {
    let box =document.querySelector('.review-carousel')

    const handlenext=()=>{
        let width =box.clientWidth;
        box.scrollLeft  = box.scrollLeft + width
        console.log(width)
    }
    const handleprev=()=>{
        let width =box.clientWidth;
        box.scrollLeft = box.scrollLeft - width

    }

  return (
    <div className='reviws-container'>
        <div style={{padding:'20px'}} className='heading'>
            <h2 style={{marginLeft:'23px'}}>What our student saying</h2>
            <img src={line}/>
        </div>
        <div className='review-carousel'>
           <button onClick={handleprev} className='pre-btn'><p>&lt;</p></button>
           
           <div className='review-card'>
           
           1
           
           </div>
           <div className='review-card'>
           2
           
           
           </div>
           <div className='review-card'>3</div>
           <div className='review-card'>4</div>
           <div className='review-card'>5</div>
           <div className='review-card'>6</div>
           <div className='review-card'>7</div>
           <div className='review-card'>9</div>
           <div className='review-card'></div>
           <div className='review-card'></div>

           <div className='review-card'>8</div>
           <button onClick={handlenext} className='next-btn'><p>&gt;</p></button>

        </div>
        


    </div>
  )
}

export default Reviews