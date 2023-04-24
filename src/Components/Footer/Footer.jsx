import React from 'react'
import logo from '../../images/white-logo.png'
import facebook from '../../images/footer/facebook.png'
import twitter from '../../images/footer/twitter.png'
import linkedin from '../../images/footer/linkedin.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faArrowRight, faEnvelope, faPhone,faFacebook } from '@fortawesome/free-solid-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>


            <div className='footer-contact'>
                <img src={logo}/>
                <h5 className='footer-desc'>
                There are course and event custom <br/>
                post types so you can easily create and<br/>
                manage course, events.
                </h5>
                <ul className='footer-ul'>
                <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faPhone} style={{width:'21px',height:'24px'}} />+(402) 762 441 83</li>
                <li><FontAwesomeIcon icon={faEnvelope} style={{width:'21px',height:'24px'}}  /> info@echooling.com</li>
                </ul>
            </div>

            <div className='footer-aboutus'>
             <h3 className='list-head'>About Us</h3>
             <ol>
                <li>About</li>
                <li>Courses</li>
                <li>Events</li>
                <li>Career</li>
                <li>Become a Teacher</li>
                <li>Contact</li>
                
             </ol>
            </div>


            <div className='footer-aboutus'>
            <h3 className='list-head'>Useful Links</h3>
            <ol>
               <li>Browse Library</li>
               <li>Library</li>
               <li>Partners</li>
               <li>News & Blog</li>
               <li>FAQ</li>
               <li>Tutorials</li>
               
            </ol>
           </div>


           <div className='footer-contact'>
           <h3>Newsletter</h3>
           <h5 className='footer-desc'>
           Get the latest Echooling news<br/>
           delivered to you inbox
           </h5>
           <div className='input-div'>
             <input  type={text} placeholder='Enter your email'/>
             <button><FontAwesomeIcon icon={faArrowRight}/></button>
           </div>
       </div>
        </div>


        <div className='footer-copyright'>
        <div className='copyright'>© 2022 <span style={{color:'#d2093c'}}>Echooling</span> All Rights Reserved</div>
        <div className='social-links'>
         <ul>
        <li>Follow us</li>
        <li><button><img  src={facebook}/></button></li>
        <li><button><img  src={twitter}/></button></li>
        <li><button><img  src={linkedin}/></button></li>
        </ul> 
        </div>
        
        
        </div>

    </div>
  )
}

export default Footer