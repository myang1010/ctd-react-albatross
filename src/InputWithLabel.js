import React, { useEffect } from "react";
import "./App.css"

const InputWithLabel = ({children, todoTitle, handleTitleChange}) => {
  const inputRef = React.useRef();

  useEffect(()=>{
    inputRef.current.focus();
  })
  
  return(
    <>
      <label className="label" htmlFor='todoTitle'>{children}</label>
      <input
        id='todoTitle' 
        ref={inputRef} 
        name='title' 
        value={todoTitle} 
        onChange={handleTitleChange}
        className="input"
      />
    </>
)}

export default InputWithLabel;