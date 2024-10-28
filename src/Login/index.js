import React, { useContext } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import LoginGrid from '../Common/loginGrid'
import { AuthContext } from '../loginContext'

export default function Login() {

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  const handleLogin = () => {
    login()
    navigate('/'); 
  };

  return (
    <div className='bglogin'>

      <LoginGrid 
      pagetitle={'Login to TIX ID'}
      phonelabel={'MOBILE PHONE NUMBER'}
      phoneholder={'+91 | Mobile Number'} 
      passlabel={'PASSWORD'}
      passholder={'Enter Password'}
      buttonname={'Sign In Now'}
      buttonname2={'Register Now'}
      navto1={handleLogin}
      navto2={()=>navigate('/signup')}
      back={()=>navigate('/')}
      flag={true}/>      
        
    </div>
  )
}
