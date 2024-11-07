import React from 'react'
import '../style.css'
import SmMovBarbtn from '../../Common/Buttons/smMovBarbtn'

interface MovieType{
  colrev?: any
  myimg:string,
  movname:string,
  movinfo:string,
  movdate:string,
  justc?:string,
  mycontent:string
}

export default function MovieGrid({colrev,myimg,movname,movinfo,movdate,justc,mycontent} : MovieType) {
  return (
    <div className='mov-grid' style={{flexDirection:colrev, justifyContent:justc}}>
      <div className='mov-grid-first'>
         <img src={myimg}/>
      </div>
      <div className='mov-grid-sec'>
        <SmMovBarbtn textname={'Spotlight'}   mycontent={mycontent}/>
        <h1>{movname}</h1>
        <p className='c-ddgrey'>{movinfo}</p>
        
        <p className='sec-date c-ddgrey'>{movdate}</p>
      </div>
    </div>
  )
}
