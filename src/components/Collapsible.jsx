import React, {useState, useRef } from 'react'


function Collapsible(props) {

  const [isOpen, setIsOpen] = useState(false);
  const scrollHeight = document.getElementById("parent").scrollHeight

  return (
    <div className='collapsible'>
        <button className='toggle-collapse' onClick={()=> setIsOpen(!isOpen)}>{props.label}</button>
        <div className='collapseContent-parent'>
            <div className='collapseContent'>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default Collapsible