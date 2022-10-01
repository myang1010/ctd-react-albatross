import PropTypes from 'prop-types';
import React from 'react';
import {useState} from 'react';
import InputWithLabel from './InputWithLabel';
import '../App.css';

function AddTodoForm({onAddTodo}){

  const [todoTitle, setTodoTitle] = useState('')

  const handleTitleChange=(event)=>{
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }
  
  const handleAddTodo = (event) =>{
    event.preventDefault();
    if (todoTitle == ''){
      alert("Title can't be empty");
      return;
    }
    onAddTodo({title: todoTitle }); //onAddTodo({title: todoTitle, id: Date.now()})
    setTodoTitle('')
  }

  return(
    <form onSubmit={handleAddTodo} className="searchForm">
      <InputWithLabel 
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        <strong className="label">Task: </strong>
      </InputWithLabel>
      <button className="button">Add</button>
    </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
}

export default AddTodoForm;