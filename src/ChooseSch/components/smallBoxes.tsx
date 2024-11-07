import React from 'react'
import '../style.css'
import { useDispatch } from 'react-redux'
import { setdate, setweekday } from '../../Redux/slice/chooseSchSlice'

interface SmallType{
  date: string,
  weekday: string,
  style: {},
}

export default function SmallBoxes({date, weekday, style} : SmallType) {
  
  // const sendata = ()=>{
  //   handledatedata(date + " " +weekday)
  // }


  const dispatch = useDispatch()

  const handledatedata = ()=>{
     dispatch(setdate(date))
     dispatch(setweekday(weekday))
  }

  return (
    <div className='smallbox' style={style} onClick={handledatedata}>
      <p>{date}</p>
      <h3>{weekday}</h3>

    </div>
  )
}
