import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import '../style.css'
import SmallBoxes from './smallBoxes'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ScrollBoxes() {

    const divRef = useRef(null);
  
   //GETTING DATE DATA

   const today = new Date() ;
   
   const monthNames = ["Jan", "Feb", "March", "April", "May", "June", 
                       "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
   
   const collectdate = []
   
   const weeknames = ["SUN","MON","TUES","WED","THURS","FRI","SAT"]
   
   const week = []
   
   for (i = 0 ; i<=8; i++){
       const add = today.getDate() + i
       const monthnow = today.getMonth()
       collectdate.push(`${add} ${monthNames[monthnow]}`)
       
       const day = (today.getDay() + i) % 7
       week.push(weeknames[day])
   }
   
   
   const datedata = []
   
   for(var i=0; i<=collectdate.length - 1; i++){
     datedata.push({"date": collectdate[i], "weekday": week[i], "flag": false})
   }
   
   console.log(datedata)

   //--------------------------------------------------------------------------
    
  
   const todaydate = today.getDate()
   const todayweek = weeknames[today.getDay()]
   const todaymonth =  monthNames[today.getMonth()]
   const all = todaydate +' ' + todaymonth

  const result = datedata.map((elem)=>{
    if(elem.date == all && elem.weekday == todayweek){
        elem.flag = true
    }
    return elem
  })
  
  console.log(result)

   //-----------------------------------------------------------------------

   const [start, setStart] = useState(0);
   const [end, setEnd] = useState(5);
   const [show, showfunc] = useState(result.slice(start, end));
 
   const shownext = () => {
       
       if (end < result.length) {// 
       setStart(prev => prev + 1);
       setEnd(prev => prev + 1);
       showfunc(result.slice(start + 1, end + 1));
       }
   };
  
   const showprev = () =>{
      if(start > 0){
        setStart(prev => prev - 1);
        setEnd(prev => prev - 1);
        showfunc(result.slice(start - 1, end - 1))
      }
   }

  return (
    <div className='datebox'>
        
        <button onClick={showprev}>  ❮  </button>
            {show.map((elem)=>  <SmallBoxes date={elem.date} weekday={elem.weekday} 
            style={{ backgroundColor: elem.flag ? "#1A2C50" : "" ,
            color: elem.flag ? "white" : "black"  
             }} /> )}
        <button onClick={shownext}>  ❯ </button>
    
    </div>
  )
}
