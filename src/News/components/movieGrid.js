import React from 'react'
import '../style.css'
import SmMovBarbtn from '../../Common/smMovBarbtn'

export default function MovieGrid({colrev,myimg,movname,movinfo,movdate,justc,mycontent}) {
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
