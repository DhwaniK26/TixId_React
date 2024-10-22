import React from 'react'
import { useState } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import TitleText from '../Common/titleText'
import Arrdown from '../ChooseSch/components/images/arrowdown.png'
import Sorting from './components/sorting'

export default function News() {
  
  const [showsort, setshowsort] = useState(false)
  
  return (
    <div>
        <div className='main'>
          <Navbar />

          <TitleText title={'TIX ID News'} 
          subtitle={'The latest news about the world of cinema for you!'}/>
          
          <div className='mysearch-div'>
            <div className='input-container'>
                  <input type='text'  />
            </div>

            <div className='d-flex sort-drop'  >
                <p onClick={()=>setshowsort(!showsort)}>Sorting</p><span><img src={Arrdown} height={20} width={20}/></span>
                 {showsort ? <Sorting nosort={showsort} setnosort={setshowsort} /> : ""}
            </div>
          </div>
               
        </div>
      
    </div>
  )
}
