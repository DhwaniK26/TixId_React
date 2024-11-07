import React, { FC, useEffect, useRef, useState } from 'react'
import './style.css'
import Navbar from '../Common/Navbar/navbar'
import Download from './components/images/download.png'
import Smallcir from './components/smallcir'
import ReptText from '../Common/TitlesNText/reptText'
import Return from '../ConPayment/component/images/return.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../Common/Footer/footer'
import { useSelector, UseSelector } from 'react-redux'

export default function FinalBill() {
  
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const len = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  
  const moviename = useSelector((state:any)=>state.home.selectedMovie)
  const {date, theatreName, screenName, time, money, year} = useSelector((state : any)=>state.chooseSch)
  const seats = useSelector((state : any)=>state.seats.seats)

  const seatlen = seats.length

   //---------------data------------------------------
   const serData = {service : 3, promo : 70}

   //--------------total payment-----------------
   const totalpay = ((money*seatlen) + (serData.service * seatlen) ) - serData.promo
  

  const updateCircles = () => {
    if (len.current) {
      const length = len.current.clientWidth;
      const numCircles = Math.floor(length / 42); // Adjust based on your circle size
      const arr = [];

      for (let i = 0; i < numCircles; i++) {
        arr.push(<Smallcir key={i} />); // Add unique key
      }

      setCircles(arr);
      console.log("Number of circles:", arr.length);
    }
  };

  useEffect(() => {
    updateCircles(); // Initial update

    window.addEventListener('resize', updateCircles); // Update on resize
    return () => window.removeEventListener('resize', updateCircles); // Clean up on unmount
  }, []);


  return (
    <div>
      <div className='main'>
        <Navbar />
      </div>

      <div className='contain'>
         <div className='inner-contain'  >
            <h2 className='t'>Transaction Details</h2>

            <div className='inner-blue '>
              <h2 className='w-500'>{moviename.name}</h2>

              <div className='blue-grid'>

                <div className='blue-grid-first'>
                  <p className='c-grey'>Location</p>
                  <p>GRAND CSV</p>
                  <br></br>
                  
                  <div className='blue-grid-inner'>
                   <div>
                      <p className='c-grey'>Date</p>
                      <p>{date} , {year}</p>
                   </div>

                   <div>
                      <p className='c-grey'>Time</p>
                      <p>{time}</p>
                   </div>
                  </div>

                </div>

                <div className='blue-grid-sec'>
                  <div>
                    <p className='c-grey'>Class</p>
                    <p>{screenName}</p>
                    <br></br>
                  </div>

                  <div>
                    <p className='c-grey'>Studio</p>
                    <p>Studio 1</p>
                  </div>

                </div>

              </div>
            </div>
            
            {/* YELLOW SEC */}
           <div>
            <div className='inner-yellow' ref={len}>
                <div className='inner-yellow-firstdiv'>
                  <p className='inner-yellow-first'>
                    <p>Booking Code</p><p>{Math.floor(Math.random() * 9000000000000)}</p>
                  </p>
                  <p className='inner-yellow-first'>
                    <p>Password Key</p><p>123343525</p>
                  </p>
                  <p className='inner-yellow-first'>
                    <p>Seats</p><p>{seats}</p>
                  </p>
                </div>
  
                <div className='inner-yellow-sec'>
                  <img src={Download} />
                </div>
                
                <div className='cir-div'>
                  {circles}
                </div>
            </div>
            
          </div>
          
          {/* WHITE SPACE */}

          <div className='white-div'>
            <h2>Purchase Details</h2>

            <div>
              <ReptText seattype={"NO ORDER"} price={"Rs. 70.000"} X={"X3"} fontWeight={400}/>
              <ReptText seattype={"REGULAR SEAT"} price={`Rs. ${money}`} X={`X${seatlen}`} fontWeight={400}/>
              <ReptText seattype={"SERVICE FEE"} price={`Rs. ${serData.service}`}  X={`X${seatlen}`} fontWeight={400}/>
              <ReptText seattype={"PROMO TIX ID"} price={`- Rs. ${serData.promo}`} fontWeight={400}/>

              <hr></hr>

              <ReptText seattype={"TOTAL PAYMENT"} price={`- Rs. ${totalpay}`} fontWeight={600}/>

              <div className='btn-div'onClick={()=>navigate('/ticketList')} >
                <img src={Return}/><p>Return</p>
              </div>

            </div>
          </div>

         </div>
      </div>

    <Footer />
    </div>
  )
}

