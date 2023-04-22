import React from 'react'
import './News.css'
import line from '../../images/line.png'
import news1 from '../../images/news/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { newsCards } from '../../Helpers/news'

const News = () => {
  return (
    <div className='news-container'>
        <div style={{padding:'20px'}} className='heading'>
            <h2 style={{marginLeft:'23px'}}>Echooling News and Blogs</h2>
            <img src={line}/>
        </div>
        <div className='news-card-container'>
           {newsCards.map((card)=>{
            return(

               <div key={card.id} className='news-card'>
               <div className='news-img-container'>
               <p>April 18</p>
               <img className='news-img' src={card.img}/>
               </div>
               <div className='news-content'>
               
               <span>Education</span>
               <h3>{card.heading}</h3>
               <p><FontAwesomeIcon icon={faUser}/>  Charlie Doyle</p>
               
               </div>
               </div>
            )
            })}
        
        </div>
    
    </div>
  )
}

export default News