import React, { useState } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import TitleText from '../Common/titleText'
import Clock from './components/images/clock.png'
import Arrowup from './components/images/arrowup.png'
import Droptime from './components/droptime'
import ColorBoxes from './components/colorBoxes'
import SeatCol from './components/seatCol'
import Pricebox from './components/pricebox'
import Footer from '../Common/footer'
import { useNavigate } from 'react-router-dom'

export default function Seats() {

   const [showdrop, setshowdrop] = useState(false)

   const navigate = useNavigate(); // useNavigate hook for navigation

   const goToAbout = () => {
     navigate('/payment'); 
   };
 
  return (
    <div>
        <div className='main'>
          <Navbar/>
          
          <TitleText title="PILIH KURSI" subtitle="Pilih kursi yang akan kamu tempati selama pemutaran film"/>
          
          <div className='seats-div'>

            <div className='time-div'>

               <div className='clock-div'  >
                  <img src={Clock}/>
                  <span>14:10</span>
                  <img src={Arrowup}  className='arrowdown' onClick={()=>setshowdrop(!showdrop)}/>

                  <div className='inner-clock'>
                     {showdrop ? <Droptime show={showdrop} showset={setshowdrop} /> : ""}
                  </div>
               </div>

              <div className='color-div'>
                <ColorBoxes bgcolor="#1A2C50" border="none"/><span>Tersa</span>
                <ColorBoxes bgcolor="white" border="1px solid grey"/><span>Kursi Kosong</span>
                <ColorBoxes bgcolor="#118EEA" border="none"/><span>Dipilih</span> 
              </div>

            </div>
            
            {/* SEATS SELECTION */}
           
               <div className='all-seats-grid'>
                 <SeatCol start={1} end={10}/>
                 <SeatCol start={11} end={20}/>
              </div>

          </div>
        </div>
        

        {/* BLUE STRAP */}

        <div className='blue-strap'>
           <p>Layar Bioskop Disini</p>
        </div>

        {/* PRICE SECTION */}
        <div className='main'>
          <div className='pricedisplay-div'>
            
            <Pricebox title="Total" content="Rp. 150.00" size="1.5rem"/>
            <Pricebox title="Kursi" content="C1,C2,C3" size="1.5rem"/>
            
            <div className='inner-pricedisplay'>
              <button onClick={()=>navigate('/schedule')} className='c-grey'>Kembali</button>
              <button onClick={goToAbout}>KONFIRMASI</button>
            </div>

          </div>
        </div>
        
        <div>
          <Footer />
        </div>
        
        
        
    </div>
  )
}
