import PropTypes from 'prop-types';
import React from 'react';
import {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import '../styling/App.css';
import plusSign from '../img/plus.png'

function AddTodoForm({onAddTodo}){

  const [todoTitle, setTodoTitle] = useState('')

  const handleTitleChange=(event)=>{
    const newTodoTitle = event.target.value
    const capitalizedNewTodoTitle = capitalizeTitle(newTodoTitle);
    setTodoTitle(capitalizedNewTodoTitle)
  }
  
  const handleAddTodo = (event) =>{
    event.preventDefault();
    if (todoTitle === ''){
      alert("Title can't be empty");
      return;
    }
    onAddTodo({title: todoTitle, id: Date.now() }); 
    setTodoTitle('')
  }

  const capitalizeTitle = (title)=>{
    const lowerCaseTitle = title.toLowerCase();
    const firstLetter = lowerCaseTitle.charAt(0).toUpperCase();
    const newTitle = lowerCaseTitle.replace(lowerCaseTitle.charAt(0), firstLetter)
    return newTitle;
  }

  return(
    <form onSubmit={handleAddTodo} className="searchForm">
      <InputWithLabel 
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        <strong className="label">Task: </strong>
      </InputWithLabel>
      <button className="buttonPlus">
        <img src={plusSign} alt="plus sign" width="24px" height="24px"/>
      </button>

    </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
}

export default AddTodoForm;