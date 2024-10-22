import React from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import TitleText from '../Common/titleText'
import BigMovieBar from '../Common/bigMovieBar'
import Footer from '../Common/footer'

export default function ComingSoon() {
  return (
    <div>
        <div className='main'>
          <Navbar />

          <TitleText title={"Coming Soon"} subtitle={"Wait for its presence in your favorite cinema!"}/>

          <BigMovieBar />

        </div> 
        <div className='givespace'></div>
        <Footer/>
    </div>
  )
}
