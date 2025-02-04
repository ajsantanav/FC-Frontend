import React, {useState, useRef } from 'react'


function Collapsible(props) {

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef(null);
  
  return (
    <div className='collapsible'>
        <button className='toggle-collapse' onClick={()=> setIsOpen(!isOpen)}>{props.label}</button>
        <div 
            className='collapseContent-parent' 
            ref={parentRef}
            style={isOpen ? 
                {height: parentRef.current.scrollHeight + "px", } :
                {
                    height: "0px"
                }} 
            >
            <div className='collapseContent'>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default Collapsible