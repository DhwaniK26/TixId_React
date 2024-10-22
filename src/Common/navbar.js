import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './style.css'
import Line from './images/line.png';
import Bell from './images/bell.png'

export default function Navbar() {
  return (
    <div>

    <div class="cont">
       <div class="navbar" >
          <img src="https://s3-alpha-sig.figma.com/img/eb92/4bb8/b34e580acbad4f49c83fed953e18e3cb?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VtptVUEwgYctUbp7FSh4CHV6sTDBann3zwUgvOV3dbBhbGdoyXuc25G5a6kcjaenJLiBMMvnl1YrgzjJ0AHR7fPbp-9nJ~ox0YQxqXetLEgQLEarkfAAmTgiA-Al~yEsEAFm~wcPNxQLJeNEhxU6XJhGjNNeU18AscCP1m43uJMeOFPrqtbRUw-Ep86gIXHw3B8GGR4l50PxTYdYsbh5TUwo2F~PB8OBEeI4bjqE2jFjB9XEm4mBasg2U3r~3bf0PsOpqgJPqLJ9YrQ-QN2vWiUB4hQPxSe62reosnLzVGjeVVpYZqaC38f3MnWHIr78eLLf0accnOsthYHtCs-p1g__"
          class="count"/> 
          <div class="ffh">
            <ul>
              <li>
                <Link to='/'>Home</Link>  
              </li>
              <li>
                <Link to='/about'>Tiket Saya</Link>  
              </li> 
              <li>
                <Link to='/news'>TIX ID News</Link>
              </li>
            </ul>
            <ul>
              <li><img src={Line} height="24px" width="2px" alt="|"/></li>
              <li><img src={Bell} height="30px" width="30px" alt="img"/></li>
              <li>Daftar Akun</li> 
              <li><button>Masuk</button></li>
            </ul>
          </div>
      </div>
    </div>

      <Outlet />
    </div>
  )
}
