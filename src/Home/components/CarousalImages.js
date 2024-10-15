import React from 'react';
import '../style.css';
import SmallButtons from '../../Common/smallButtons';

export default function CarousalImages({image,moviename,nextpage}) {

  return (
    <div>
      <div className="card">
          <img src={image}  className='myimg'/>
          <div class="text-div">
            <h2>{moviename}</h2>
            <ul>
                <li><SmallButtons text="XXI" color="linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))" size="11px" nextpage={nextpage}/></li>
                <li><SmallButtons text="CGV" color="red" nextpage={nextpage} size="11px"/></li>
                <li><SmallButtons text="CINPOLIS" color="rgb(2, 2, 131)" nextpage={nextpage} size="11px"/></li>
            </ul>
         </div>
        </div>
    </div>
  )
}
