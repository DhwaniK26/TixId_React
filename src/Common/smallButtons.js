import React from 'react'
import './style.css'

export default function SmallButtons({text,color,nextpage,size}) {

  const styles = {
    border: "none",
    // backgroundImage : "linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))",
    background: color ,
    borderRadius: "3px",
    padding: "5px 6px",
    fontSize: {size},
    color: "white",
    margin: "0px 8px"
  }
  return (
    <div>
      <buttons style={styles} onClick={nextpage}>{text}</buttons>
    </div>
  )
}
