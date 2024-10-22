import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import Download from './components/images/download.png'
import Smallcir from './components/smallcir'
import ReptText from '../Common/reptText'
import Return from '../ConPayment/component/images/return.png'
import { useNavigate } from 'react-router-dom'
import Footer from '../Common/footer'



export default function FinalBill() {
  
  const [circles, setCircles] = useState([]);
  const len = useRef()
  const navigate = useNavigate()

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
              <h2 className='w-500'>Spiderman : No way home</h2>

              <div className='blue-grid'>

                <div className='blue-grid-first'>
                  <p className='c-grey'>Location</p>
                  <p>Grand Indonesia CGV</p>
                  <br></br>
                  
                  <div className='blue-grid-inner'>
                   <div>
                      <p className='c-grey'>Date</p>
                      <p>16 December 2021</p>
                   </div>

                   <div>
                      <p className='c-grey'>Time</p>
                      <p>14:00</p>
                   </div>
                  </div>

                </div>

                <div className='blue-grid-sec'>
                  <div>
                    <p className='c-grey'>Class</p>
                    <p>Regular 3D</p>
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
                    <p>Seats</p><p>123343525</p>
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
              <ReptText seattype={"NO ORDER"} price={"Rp. 70.000"} X={"X3"} fontWeight={400}/>
              <ReptText seattype={"REGULAR SEAT"} price={"Rp. 70.000"} X={"X3"} fontWeight={400}/>
              <ReptText seattype={"SERVICE FEE"} price={"Rp. 3.000"} X={"X3"} fontWeight={400}/>
              <ReptText seattype={"PROMO TIX ID"} price={"-Rp. 50.000"} fontWeight={400}/>

              <hr></hr>

              <ReptText seattype={"TOTAL PAYMENT"} price={"Rp. 70.000"} fontWeight={600}/>

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

