import React, { useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  
  const [todoList, setTodoList] = React.useState([]);
  
  const [isLoading, setIsLoading] = React.useState(true);
  
  useEffect(()=>{
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,{
      headers:{ 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
    })
    .then((response)=>response.json())
    .then((result)=>{
      setTodoList(result.records);
      setIsLoading(false)
    })
  },[])

  useEffect(()=>{
    if(!isLoading){
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }  
  }, [todoList])

  const addTodo=(newTodo)=>{
    setTodoList([...todoList, newTodo])
  }

  const removeTodo=(id)=>{
    const newTodo = todoList.filter(
      (todo)=>todo.id !== id
    )

    setTodoList(newTodo)
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      { isLoading ? (
        <p>Loading...</p> 
        ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
    </>
  );
}

export default App;
