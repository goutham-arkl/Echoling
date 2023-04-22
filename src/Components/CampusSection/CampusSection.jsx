import React from 'react'
import line from '../../images/line.png'
import campus from '../../images/section/campus/campus.png'
import campusBackground from '../../images/section/campus/campus-background.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen,faArrowRight,faChartLine,faGear} from '@fortawesome/free-solid-svg-icons'


import'./CampusSection.css'


const CampusSection = () => {
  return (
    <div className='Campus-section' style={{backgroundImage:`url(${campusBackground})`}}>
    
        <div style={{padding:'20px'}} className='heading'>
            <h2 style={{marginLeft:'23px'}}>Campus Life</h2>
            <img src={line}/>
        </div>
        <div className='Campus-box'>
       
                    

          <div className='points'>
          
              <div className='points-container'>
                <div className='points-image'>
                <FontAwesomeIcon icon={faPen} style={{height:'36px',width:'36px',color: "#00825a",}} />
                <div className='points-desc'>
                <h4>Do More,Stress Less</h4>
                <span>Why I say old chap that is spiffing he legged<br/>
                it in my flat easy peasy.</span>
                </div>
                </div>
                <button><FontAwesomeIcon icon={faArrowRight}/></button>

              </div>

              <div className='points-container'>
              <div className='points-image'>
              <FontAwesomeIcon icon={faChartLine} style={{height:'36px',width:'36px',color: "#00825a",}} />
              <div className='points-desc'>
              <h4>The Business Intelligence</h4>
              <span>Why I say old chap that is spiffing he legged<br/>
              it in my flat easy peasy.</span>
              </div>
              </div>
              <button><FontAwesomeIcon icon={faArrowRight}/></button>

            </div>

            <div className='points-container'>
            <div className='points-image'>
            <FontAwesomeIcon icon={faGear} style={{height:'36px',width:'36px',color: "#00825a",}} />
            <div className='points-desc'>
            <h4>System Administration</h4>
            <span>Why I say old chap that is spiffing he legged<br/>
            it in my flat easy peasy.</span>
            </div>
            </div>
            <button><FontAwesomeIcon icon={faArrowRight}/></button>

          </div>
          </div>

          <div style={{backgroundImage:`url(${campus})`}} className='campus-image'>

          </div>
        </div>
        <button className='pink-button button-config' >More about Campus Life <FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  )
}

export default CampusSection