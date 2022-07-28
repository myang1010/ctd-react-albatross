import React, { useEffect } from "react";

const InputWithLabel = ({children, todoTitle, handleTitleChange}) => {
  const inputRef = React.useRef();
  
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  
  return(
    <>
      <label htmlFor='todoTitle'>{children}</label>
      <input
        id='todoTitle' 
        ref={inputRef} 
        name='title' 
        value={todoTitle} 
        onChange={handleTitleChange}
      />
    </>
)}

export default InputWithLabel;