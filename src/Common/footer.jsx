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
      
   <div class="footer">

     <div class="footer-col">
       <img src={Logo} />
     </div>

     <div class="footer-col">
      <ul>
        <li>Perusahaan</li> 
          <li>Kontak Kami</li>
          <li>Tentang</li>
          <li>Partner</li>

      </ul>
     </div>

     <div class="footer-col">
      <ul>
        <li>Seputar</li>
        <li>TIX ID News</li>
        <li>Bioskop</li>
        <li>Tiket Saya</li>
        <li>Pembrayaran</li>
        <li>Cicilan</li>
      </ul>
     </div>
     
     <div class="footer-col">
      <ul>
        <li>Dukungan</li>
        <li>Pusat Bantuan</li>
        <li>Kebijakan Privasi</li>
        <li>FAQ</li>
        <li>Syarat dan Kententuan</li>
        <li>Update Covid-19</li>
      </ul> 
     </div>

     <div class="footer-col">
      <div class="last-col">
         <p>First Follow on Instagram</p>
         <div>
          <img src={Insta}/><img src={Twitter}/><img src={Fb}/>
         </div>
         <p>Download Aplikasi TIX ID</p>
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
