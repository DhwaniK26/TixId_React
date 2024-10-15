import React from 'react'
import'./style.css'

export default function SMovBrMovies({movieposter, title,date}) {
  return (
   
      <div className='threeBoxdiv'>
         <img src={movieposter} width="100%" height="237px"/>
         <button>Spotlight</button>
         <div>
           <h3>{title}</h3>
           <p>{date}</p>
         </div>
        
      </div>
  
  )
}
