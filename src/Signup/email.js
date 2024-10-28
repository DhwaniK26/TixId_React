import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginGrid from '../Common/loginGrid'

export default function Email() {
    
    const navigate = useNavigate()

    return (
        <div className='bglogin' style={{height:'100vh'}}>
    
          <LoginGrid 
          pagetitle={'Register TIX ID'}
          phonelabel={'EMAIL ADDRESS'}
          phoneholder={'Enter Input'} 
          buttonname={'Register Now'}
          navto1 = {()=>navigate('/')}
          back={()=>navigate('/signup')}
          show={false}
          email = {false}
          flag={false}/>      
            
        </div>
      )
}
