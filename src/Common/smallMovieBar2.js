import React from 'react'
import './style.css'
import SMovBrMovies from './sMovBrMovies'
import Post1 from './images/poster3.png'
import Post2 from './images/gucciposter.png'
import Post3 from './images/lastposter.png'

export default function SmallMovieBars2() {
  return (
  
    <div class="three">

      <SMovBrMovies movieposter={Post1} 
      title="Ghostbusters: Afterlife Arrives Featuring New Ghost Variations"
      date="08 Nov 2021 | TIX ID" />

      <SMovBrMovies movieposter={Post2} 
      title="House of Gucci: The Story of Gucci's Sole Heir in 1955."
      date="09 Nov 2021 | TIX ID"/>

      <SMovBrMovies movieposter={Post3} 
      title="Donnie Yen's Action In The Latest Hong Kong Action Movie"
      date="21 Nov 2021 | TIX ID"/>

    </div>
    
  )
}
