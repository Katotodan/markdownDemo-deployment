import React, {useState} from 'react'
import "./markdown.css"

const Markdonw = ({markdown}) => {

    const [markdownText, setMarkdownText] = useState("")
    const handleChange = (e)=>{
        setMarkdownText(e.target.value)
        markdown(e.target.value)
    }
  return (
    <div className='markdown'>
        <textarea name="" id="editor" onChange={handleChange} value={markdownText}></textarea>
      
    </div>
  )
}

export default Markdonw
