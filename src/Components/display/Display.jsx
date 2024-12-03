import React from 'react'
import "./display.css"
const Display = ({text}) => {
    if(text){
        document.querySelector("#preview").innerHTML = text

    }
    
  return (
    <div id="preview" >
      
    </div>
  )
}

export default Display
