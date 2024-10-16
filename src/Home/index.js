import React from 'react'
import Navbar from '../Common/navbar'
import MovieCarousal from './components/movieCarousal'
import GridTexts from './components/gridTexts'
import SmallMovieBars from '../Common/smallMovieBars'
import BigMovieBar from '../Common/bigMovieBar'
import Footer from '../Common/footer'
import Advertise from './components/advertise'
import './style.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/schedule'); 
  };

  return (
    <div>
      <div className='main'>
         <Navbar />

         <MovieCarousal nextpage={goToAbout}/>

         <Advertise />

         <div className='space-div'></div>
         <GridTexts 
         title="TIX ID News"
         subline="Berita tentang dunia perfilman terbaru untuk anda!"
         link="Lihat Semua"/>
         
         <SmallMovieBars/>
        
         <div style={{height:"60px"}}></div>
         <GridTexts 
         title="Akan Datang"
         subline="Tunggu kehadirannya di bioskop kesayangan kamu!"
         link="Lihat Semua"/>

         <BigMovieBar />
        </div>

        <Footer/>
       
    </div>
  )
}
