import React from 'react'
import './style.css'
import SmallButtons from './smallButtons'

export default function BigMoviesList({movieimg,moviename}) {
  return (
    <div className='threebig-inner'>
         <img src={movieimg} width="100%" height="520px"/>

         <div class="text-div2">
            <h2>{moviename}</h2>
            <ul>
                <li><SmallButtons text="XXI" color="linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))"/></li>
                <li><SmallButtons text="CGV" color="red" /></li>
                <li><SmallButtons text="CINPOLIS" color="rgb(2, 2, 131)"/></li>
            </ul>
          </div>
    </div>
  )
}
