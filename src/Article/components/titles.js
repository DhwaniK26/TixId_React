import React from 'react'
import '../style.css'

export default function Titles({newsname, newsdate}) {
  return (
    <div className='titles-div'>
      <h2>{newsname}</h2>
      <h4 className='c-dgrey'>{newsdate}</h4>
    </div>
  )
}
