import React from 'react'
import Navbar from '../Common/Navbar/navbar'
import MovieCarousal from './components/movieCarousal'
import GridTexts from './components/gridTexts'
import SmallMovieBars from '../Common/MovieBar/smallMovieBars'
import BigMovieBar from '../Common/MovieBar/bigMovieBar'
import Footer from '../Common/Footer/footer'
import Advertise from './components/advertise'
import './style.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <div className='main'>
         <Navbar />

         <MovieCarousal/>

         <Advertise />

         <div className='space-div'></div>
         <GridTexts 
         title="TIX ID News"
         subline="The latest news about the world of cinema for you!"
         link="See All" mypath={()=>navigate('/news')}/>
         
         <SmallMovieBars/>
        
         <div style={{height:"60px"}}></div>
         <GridTexts 
         title="Coming soon"
         subline="Wait for its presence in your favorite cinema!"
         link="See All" mypath={()=>navigate('/comingSoon')}/>

         <BigMovieBar />
        </div>

        <Footer/>
       
    </div>
  )
}
