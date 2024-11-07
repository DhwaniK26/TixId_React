import React from 'react'
import '../style.css'
import Ret from '../../Login/components/images/ret.png'
import { useNavigate } from 'react-router-dom'

interface LoginType{
  back:()=>void
  pagetitle?:string,
  phonelabel?:string,
  passlabel?:string,
  phoneholder?: string,
  passholder?:string,
  buttonname?:string,
  buttonname2?:string,
  navto1?:()=>void,
  navto2?:()=>void,
  flag?:boolean,
  show?:boolean
}

export default function LoginGrid({back,pagetitle, phonelabel, passlabel, phoneholder,passholder,buttonname,buttonname2,navto1 ,navto2,flag,show} : LoginType) {
 
  const navigate = useNavigate()

  return (
    <div>
       <div className='inner-login'>

          <div className='ret-div' onClick={back}>
            <img src={Ret}/><span className='ret w-500'>Return</span>
           </div>
          
           <div className='login-col2'>
             <div className='inner-login22'>
                <h2>{pagetitle}</h2>

                <div className='add-pass-div'>
                  <label className='w-400'>{phonelabel}</label>
                  <input type='text' placeholder={phoneholder}/>

                  <br></br><br></br><br></br>

                  <div>
                    {show && (
                      <>
                        <label style={{ display: 'block' }} className='w-400'>{passlabel}</label>
                        <input style={{ display: 'block' }} type='text' placeholder={passholder} />
                      </>
                    )}
                  </div>
                  
                </div>

                <button className='login-btn' style={{background:'#1A2C50', color:'white'}} onClick={navto1} >{buttonname}</button>

                {flag ? <><p className='no-acc'>Don't have an account yet?</p>
                    <button className='login-btn' onClick={navto2} >{buttonname2}</button></>
                    : <></>}
                

                <p className='rights'>2021 TIX ID - PT Nusantara Elang Sejahtera.</p>
              </div>

           </div>
          
          </div>
    </div>
  )
}
