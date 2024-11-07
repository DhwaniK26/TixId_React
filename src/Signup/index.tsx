import React, { useContext } from 'react'
import './style.css'
import LoginGrid from '../Common/Grid/loginGrid'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
   
  const navigate = useNavigate()

  return (
    <div className='bglogin' style={{height:'inherit'}}>

      <LoginGrid 
      pagetitle={'TIX ID Register'}
      phonelabel={'FULL NAME'}
      phoneholder={'Enter Input'} 
      passlabel={'MOBILE PHONE NUMBER'}
      passholder={'+91 | Mobile Number'}
      buttonname={'Register Now'}
      navto1={()=>navigate('/email')}
      show={true}
      back={()=>navigate('/login')}
      flag={false}/>      
        
    </div>
  )
}
