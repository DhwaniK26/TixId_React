import React from 'react'
import './style.css'

export default function SmallButtons({text,color,nextpage,size}) {

  const styles = {
    border: "none",
    // backgroundImage : "linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))",
    background: color ,
    borderRadius: "3px",
    padding: "5px 5px",
    fontSize: {size},
    color: "white",
    margin: "0px 1rem 10px 0px"
  }
  return (
    <div>
      <buttons style={styles} onClick={nextpage}>{text}</buttons>
    </div>
  )
}
