import React from 'react'
import '../style.css'
import Clock from "../../Assets/images/clock.png";
import Arrowup from "../../Assets/images/arrowup.png"
import Droptime from './droptime';
import { useState } from 'react';
import ColorBoxes from './colorBoxes';

export default function Timedrop() {
    const [showdrop, setshowdrop] = useState(false);
  return (
    <div>
      <div className="time-div">
        <div className="clock-div">
            <img src={Clock} />
            <span>14:10</span>
            <img
            src={Arrowup}
            className="arrowdown"
            onClick={() => setshowdrop(!showdrop)}
            />
    
            <div className="inner-clock">
              {showdrop ? (
                  <Droptime show={showdrop} showset={setshowdrop} />
              ) : (
                  ""
              )}
            </div>
       </div>
        
        <div className="color-div">
            <ColorBoxes bgcolor="#1A2C50" border="none" />
            <span>Unavailable</span>
            <ColorBoxes bgcolor="white" border="1px solid grey" />
            <span>Empty Chair</span>
            <ColorBoxes bgcolor="#118EEA" border="none" />
            <span>Chosen</span>
        </div>
        </div>
   </div>
  )
}
