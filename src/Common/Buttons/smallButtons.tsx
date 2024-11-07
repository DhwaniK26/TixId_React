import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom';

interface ButtonType{
  text:string,
  color:string,
  size?:string,
  sendfunc?:()=>void
}

export default function SmallButtons({text,color,size,sendfunc} : ButtonType) {

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/schedule'); 
    if (sendfunc) {
      sendfunc();
    }
  };


  const styles = {
    border: "none",
    // backgroundImage : "linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))",
    background: color ,
    borderRadius: "3px",
    padding: "5px 5px",
    fontSize: '12px',
    color: "white",
    margin: "0px 1rem 10px 0px"
  }
  return (
    <div>
      <button style={styles} onClick={goToAbout}>{text}</button>
    </div>
  )
}
