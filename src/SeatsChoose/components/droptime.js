import React from 'react'
import '../style.css'
import Arrowup from './images/arrowup.png'
import Clock from './images/clock.png'
import SmTimeBox from '../../ChooseSch/components/Column1Movie/smTimeBox'

export default function Droptime({show,showset}) {
  return (
    <div className='droptime-div'>
       <div className='inner-dropdown' >
          <img src={Clock}/>
          <span>14:10</span>
          <img src={Arrowup} height={13} width={26} onClick={()=>showset(!show)}/> 
        </div>

        <div className='inner-timedrop'>
            <SmTimeBox time="2:00" />
            <SmTimeBox time="2:00" />
            <SmTimeBox time="2:00" />
            <SmTimeBox time="2:00" />
            <SmTimeBox time="2:00" />
            <SmTimeBox time="2:00" />
        </div>

    </div>
  )
}
