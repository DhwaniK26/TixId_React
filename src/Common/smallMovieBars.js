import React from 'react'
import './style.css'
import SMovBrMovies from './sMovBrMovies'
import Poster1 from './images/poster1.png'
import Poster2 from './images/poster2.png'
import Poster3 from './images/poster3.png'

export default function SmallMovieBars() {
  return (
  
    <div class="three">

      <SMovBrMovies movieposter={Poster1} 
      title="Spider-Man: No Way Home Releases New Trailer."
      date="08 Nov 2021 | TIX ID"/>

      <SMovBrMovies movieposter={Poster2} 
      title="Facts About the Movie Yowis Ben Finale That You Need to Know Before Watching!"
      date="09 Nov 2021 | TIX ID"/>

      <SMovBrMovies movieposter={Poster3} 
      itle="Ghostbusters: Afterlife Arrives Featuring New Ghost Variations"
      date="21 Nov 2021 | TIX ID"/>

    </div>
    
  )
}
