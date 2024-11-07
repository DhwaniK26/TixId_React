import React, { useState } from 'react'
import '../style.css'
import Arrow from './images/arrow.png'

interface LocationType{
  setfalse: (value: boolean) => void; 
  notshow : boolean
  namepassed : (data : string) => void
}

export default function LocationScroll({setfalse, notshow, namepassed}  : LocationType) {

  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab", "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]

  const [city, setCity] = useState(states)

  const [cityselected, selectedfunc] = useState<any | null>(null)

  {/* NAME PASSING TO PARENT & SETTING SELECTED NAME */}
  const handleselected = (event : any)=>{
     var printcity = (event.target.textContent)
     selectedfunc(printcity)
     namepassed(printcity)
  }
  
  {/* SEARCH CITY INPUT */}
  const search = (event : any) => {
    const value = event.target.value;
    if (value) {
      setCity(states.filter((e) => e.toLowerCase().includes(value.toLowerCase())));
    } else {
      setCity(states); 
    }
  };
  return (
    <div>
      <div className='dropdown'>

        <div className='dropdown-inner'>
          <h2>{cityselected ?? "SELECT"} </h2>
          <button className='arrowbtn' onClick={()=>setfalse(!notshow)}>
            <img src={Arrow} height={7.5} width={15}/>
          </button>
        </div>
        
        <input onChange={search} type='text' placeholder='Search your City'/>

        <div className='cities'>
           <ul>
             {city.map((elem)=>{
                return <li onClick={handleselected}>{elem} </li>
             })}
           </ul>
        </div>

      </div>
    </div>
    
  )
}
