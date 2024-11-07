import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function FinalShow() {

   //----------showtimes-------------------------------
   const navigate = useNavigate(); // useNavigate hook for navigation

  const { screenName, time, date, weekday,year ,theatrename} = useSelector((state: any) => state.chooseSch);

   const goToAbout = () => {
     navigate('/seats'); 
   };

  return (
    <div className='final-card'>
      <h2>{theatrename}</h2>
      
      <p className='p c-greydark'>{weekday}, {date}, {year} </p>

      <div className='time'>
        <h3>{screenName}</h3>
        <h3>{time}</h3>
      </div>

      <p className='c-grey small-text'>* Seat selection can be done after this</p>

      <button onClick={goToAbout} className='mybutton'>BUY NOW</button>
    </div>
  )
}
