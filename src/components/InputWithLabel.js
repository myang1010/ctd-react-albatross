import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import '../App.css';

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

InputWithLabel.prototype = {
  children: PropTypes.element.isRequired,
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
}

export default InputWithLabel;