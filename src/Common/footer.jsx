import React from 'react'
import './style.css'
import Logo from './images/tx.png'
import Fb from './images/fb.png'
import Insta from './images/insta.png'
import Twitter from './images/twitter.png'
import Google from './images/googleplay.png'
import Apple from './images/appleplay.png'


export default function Footer() {
  return (
    <div>
      <hr className='hr-tag'></hr>
   <div class="footer main">

     <div class="footer-col">
       <img src={Logo} />
     </div>

     <div class="footer-col">
      <ul>
          <li>Company</li> 
          <li>Contact Us</li>
          <li>About</li>
          <li>Partner</li>

      </ul>
     </div>

     <div class="footer-col">
      <ul>
        <li>About</li>
        <li>TIX ID News</li>
        <li>Cinema</li>
        <li>My Ticket</li>
        <li>Shipping</li>
        <li>Instalment</li>
      </ul>
     </div>
     
     <div class="footer-col">
      <ul>
        <li>Support</li>
        <li>Help Center</li>
        <li>Privacy Policy</li>
        <li>FAQ</li>
        <li>Terms and Conditions</li>
        <li>Update Covid-19</li>
      </ul> 
     </div>

     <div class="footer-col">
      <div class="last-col">
         <p>First Follow on Instagram</p>
         <div>
          <img src={Insta}/><img src={Twitter}/><img src={Fb}/>
         </div>
         <p>Download the TIX ID Application</p>
         <div>
          <img src={Google} class="playbtn"/><img src={Apple} class="playbtn"/>
         </div>
         <h5>2021 TIX ID - PT Nusantara Elang Sejahtera.</h5>
      </div>
     </div>

   </div>
    </div>
  )
}
