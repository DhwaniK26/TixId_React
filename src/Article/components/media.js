import React from 'react'
import '../style.css'
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa"

export default function Media() {
  return (
    <div>
      <div className='media-div'>
          <p>Share this article</p>
          <div className='n'>
           <CiInstagram />
           <FaTwitter />
            <FaFacebook />
          </div>
        </div>
    </div>
  )
}
