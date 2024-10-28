import React from 'react'
import '../style.css'
import Titles from './titles'
import Media from './media'

export default function MainVideo() {
  return (
    <div>
      <div className='mainart-div'>
        <Titles newsname={'Second Trailer for Spiderman: No Way Home'}
        newsdate={'17 Nov 2021 | TIX ID'}/>

        <div className='video-div'>
           <video  controls>
           <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
           Your browser does not support the video tag.
         </video>
        </div>

        <p>Source: Marvel Entertainment | YouTube</p>

        <Media />

        <h3 className='center'>See Other Videos</h3>

      </div> 
    </div>
  )
}
