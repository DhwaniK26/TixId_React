import React, { useState } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import TitleText from '../Common/titleText'
import Clock from './components/images/clock.png'
import Arrowup from './components/images/arrowup.png'
import Droptime from './components/droptime'
import FilledBoxes from './components/filledBoxes'


export default function Seats() {

   const [showdrop, setshowdrop] = useState(false)


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
                <FilledBoxes bgcolor="#1A2C50" border="none"/><span>Tersa</span>
                <FilledBoxes bgcolor="white" border="1px solid grey"/><span>Kursi Kosong</span>
                <FilledBoxes bgcolor="#118EEA" border="none"/><span>Dipilih</span> 
              </div>

            </div>
            
            {/* SEATS SELECTION */}
            <div>
               JJ
            </div>

          </div>
        </div>
        
      
    </div>
  )
}
