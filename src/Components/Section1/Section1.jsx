import React,{useEffect} from 'react'
import './Section1.css'
import line from '../../images/line.png'
import { cards } from '../../Helpers/academyCardData'
const Section1 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector('.scroll-top');
      if (window.scrollY < window.innerHeight/3) {
        button.style.display = 'none';
      } else {
        button.style.display = 'block';
      }
    };
  
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [window.scrollY])
  return (
    <div className='container'>
    <a className='scroll-top' href='#top'>^</a>
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