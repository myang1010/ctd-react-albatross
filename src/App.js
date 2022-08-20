import React, { useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  
  const [todoList, setTodoList] = React.useState([]);
  
  const [isLoading, setIsLoading] = React.useState(true);
  
  // first way of fetching data, following homework instructions
  // useEffect(()=>{
  //   fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,{
  //     headers:{ 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
  //   })
  //   .then((response)=>response.json())
  //   .then((result)=>{
  //     setTodoList(result.records);
  //     setIsLoading(false)
  //   })
  // },[])

  //second way of fetching data, idea from Frank
  const loadTodos = async() => {
    try{
      const reponse = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,{
        headers:{ 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
      });

      const todoFromAPI = await reponse.json();
      // const todos = todoFromAPI.records.map(todo => todo.fields); //we can also filter the todo list first here
      const todos = todoFromAPI.records;

      setTodoList(todos);
      setIsLoading(false);

    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=> loadTodos,[])
  
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
