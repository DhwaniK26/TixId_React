import React from 'react'
import '../style.css'

export default function GridTexts({title, subline, link}) {
  return (
    <div>
      <div class="texts">
      <div>
        <p>{title}</p>
        <p>{subline}</p>
      </div>
      <div>
        <p class="lihut">{link}</p>
      </div>
    </div>
    </div>
  )
}
