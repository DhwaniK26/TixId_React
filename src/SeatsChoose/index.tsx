import React, { useContext, useState } from 'react'
import './style.css'
import Navbar from '../Common/Navbar/navbar'
import TitleText from '../Common/TitlesNText/titleText'
import Clock from './components/images/clock.png'
import Arrowup from './components/images/arrowup.png'
import Droptime from './components/droptime'
import ColorBoxes from './components/colorBoxes'
import SeatCol from './components/seatCol'
import Pricebox from './components/pricebox'
import Footer from '../Common/Footer/footer'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/loginContext'

export default function Seats() {

   const [showdrop, setshowdrop] = useState(false)

   const navigate = useNavigate(); // useNavigate hook for navigation

   const {isAuthenticated} = useContext(AuthContext)

   const goToAbout = () => {
    
     isAuthenticated ?  navigate('/payment') : navigate('/login')

   };


   //getting seat number--------------------------------------------------------
   
   const [chair,setchair] = useState<string | any>([])  //chairs array


  const handlechair = (elem : string) => {
    if (chair.includes(elem)) {
     
      setchair(chair.filter((item : string) => item !== elem));
    } else {
     
      setchair([...chair, elem]);
    }
    console.log(chair); 
  };

   //total price of seats--------------------------------------------------------
   
   //FROM CHOOSE SCHEDULE


  return (
    <div>
        <div className='main'>
          <Navbar/>
          
          <TitleText title="CHOOSE A SEAT" subtitle="Choose the seat you will occupy during the film screening."/>
          
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
                <ColorBoxes bgcolor="#1A2C50" border="none"/><span>Theresa</span>
                <ColorBoxes bgcolor="white" border="1px solid grey"/><span>Empty Chair</span>
                <ColorBoxes bgcolor="#118EEA" border="none"/><span>Chosen</span> 
              </div>

            </div>
            
            {/* SEATS SELECTION */}
           
               <div className='all-seats-grid'>
                 <SeatCol start={1} end={10} handlechair={handlechair} />
                 <SeatCol start={11} end={20} handlechair={handlechair} />
              </div>

          </div>
        </div>
        

        {/* BLUE STRAP */}

        <div className='blue-strap'>
           <p>Cinema Screen Here</p>
        </div>

        {/* PRICE SECTION */}
        <div className='main'>
          <div className='pricedisplay-div'>
            
            <Pricebox title="Total" content="Rp. 150.00" size="1.5rem"/>
            <Pricebox title="Kursi" content={chair.map((ele : string)=>{return ele + " "})} size="1.5rem"/>
            
            <div className='inner-pricedisplay'>
              <button onClick={()=>navigate('/schedule')} className='cc-grey'>Return</button>
              <button onClick={goToAbout}>CONFIRM</button>
            </div>

          </div>
        </div>
        
        <div>
          <Footer />
        </div>
        
    </div>
  )
}