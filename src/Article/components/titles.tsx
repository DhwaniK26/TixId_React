import React from 'react'
import '../style.css'

interface TitleType{
  newsname: string,
  newsdate: string
}

export default function Titles({newsname, newsdate} : TitleType) {
  return (
    <div className='titles-div'>
      <h2>{newsname}</h2>
      <h4 className='c-dgrey'>{newsdate}</h4>
    </div>
  )
}
