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
      title="Spider-Man: No Way Home Rilis Trailer Terbaru."
      date="08 Nov 2021 | TIX ID"/>

      <SMovBrMovies movieposter={Poster2} 
      title="Fakta Film Yowis Ben Finale Yang Perlu Kamu Ketahui Sebelum Nonton!."
      date="09 Nov 2021 | TIX ID"/>

      <SMovBrMovies movieposter={Poster3} 
      title="Ghostbusters: Afterlife Hadir Menampilkan Variasi Hantu Baru"
      date="21 Nov 2021 | TIX ID"/>

    </div>
    
  )
}
