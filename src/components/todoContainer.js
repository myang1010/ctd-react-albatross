import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import PropTypes from 'prop-types';
import style from './TodoList.module.css';
import '../App.css';
import {Hearts} from 'react-loader-spinner';
import Navbar from './Navbar';

function TodoContainer({tableName}){
  const[todoList, setTodoList] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  const sortByCreatedTime = (records) =>{
    return records.sort((objA, objB)=>{
        if (objA.createdTime < objB.createdTime) {return -1;}
        else if (objA.createdTime > objB.createdTime) {return 1;}
        else { return 0;}
    })
  }

  useEffect(()=>{
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`,{
       headers:{ 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
    })
    .then((response)=>response.json())
    .then((result) =>{
      const sortedTodos = sortByCreatedTime(result.records);
      setTodoList(sortedTodos);
      setIsLoading(false);
    })
  }, );

  const addTodo = async(todo) =>{
    let isExist = todoList.find((existingTodo)=>(existingTodo.fields.Title === todo.title))
    if(isExist) { 
      alert("Task already exists.")
      return;
    }    

    const todoData = {
      fields:{
        Title: todo.title,
      }
    }
    try{
      const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`,
      {
        method: 'POST',  
        headers:{ 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        },
        body: JSON.stringify(todoData)
      });

      console.log("response: ", response)

      const newTodos = sortByCreatedTime([...todoList])

      setTodoList(newTodos);
    
      if(!response.ok){
        const message = `Error has occurred: ${response.status}`;
        throw new Error(message);
    }
    
    }catch(error){
      console.log(error.message);
      return null;
    }
  }  

  const removeTodo = async(id)=>{

    try{
      const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id.id}`,
      {
        method: 'DELETE',  
        headers:{ 
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        },
      });

      if(!response.ok){
        const message = `Error has occurred: ${response.status}`;
        throw new Error(message);
      }
    }catch(error){
      console.log(error.message);
      return null;
    } 
    
    const newTodo = todoList.filter(
      (item) => item.id !== id.id 
    );
    setTodoList(newTodo);
  }

  return(
    <>
      <div className="container">
      <Navbar />
        <h1 className="headlinePrimary">{tableName}</h1>
          <AddTodoForm onAddTodo={addTodo} />
          { isLoading ? (
            <div className={style.loading}> 
              <Hearts 
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="hearts-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
            ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
          )}
      </div>
    </>
  )
}

TodoContainer.prototype = {
    tableName: PropTypes.string,
}
export default TodoContainer;