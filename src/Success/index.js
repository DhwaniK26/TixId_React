import React from 'react'
import Navbar from '../Common/navbar'
import './style.css'
import Reel from './components/images/reel.png'
import Footer from '../Common/footer'
import TicketList from '../TicketList'
import { useNavigate } from 'react-router-dom'

export default function Success() {
  
  const navigate = useNavigate()

  return (
    <div>
    <div className='main'>
      <Navbar />

      <div className='big-div'>
          <div className='inner-bigdiv'>

            <h1>Payment successfull !</h1>

            <img src={Reel} />
           
            <h4 className='c-grey'>Transaction details have been sent to your email, you can also check 
            other ticket details in my tickets either on the website or your smartphone.</h4>
            
            <button onClick={()=>navigate('/ticketList')}>My Ticket</button>
           
         </div>
       </div>
      </div>
      <Footer />
    </div>
  )
}
