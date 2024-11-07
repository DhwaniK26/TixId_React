import React from 'react'
import './style.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setmoney, setsrcreenname, settheatrename, settime } from '../../../Redux/slice/chooseSchSlice'
import { settime2 } from '../../../Redux/slice/seatsSlice'


// interface TimePrice {
//   time?: string; 
//   screename?: string; 
//   price?: string; 
// }


interface SmType{
  time?: string,
  // handletimePrice?: (data: TimePrice)=>void,
  price?:number,
  screenname?:string
  theatrename?:string
}


export default function SmTimeBox({time,price,screenname,theatrename} : SmType):JSX.Element {

  const dispatch = useDispatch();

  const handleTime = ()=>{
    dispatch(settime(time))
    dispatch(setsrcreenname(screenname))
    dispatch(setmoney(price))
    dispatch(settheatrename(theatrename))


  }

  const [bluecolor,setbluecolor] = useState <any | null>()
  const  [fontcolor,setfontcolor] = useState <any | null>()
  const [flag ,setflag] = useState(true)

  const handlecolor = ()=>{
    setflag(!flag)
    setbluecolor(flag ? " #1A2C50": "white")
    setfontcolor(flag ? 'white' : 'black')
    dispatch(settime2(time))
    handleTime() 
    // handletimePrice?.({"time":time,"screename":screenname,"price":price })
  }

  return (
    <div className='sm-timediv' onClick={handlecolor} style={{"background":bluecolor, "color":fontcolor}}>
      {time}
    </div>
  )
}
