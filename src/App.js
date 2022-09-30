import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import "./App.css";

function App() {
  
  const [todoList, setTodoList] = React.useState([]);
  
  const [isLoading, setIsLoading] = React.useState(true);
  
  // first way of fetching data, following homework instructions
  useEffect(()=>{
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,{
      headers:{ 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
    })
    .then((response)=>response.json())
    //Sort with JavaScript
    .then((result) => {
      console.log(result.records)
      const sortedTodos = result.records.sort((objA, objB) =>{
        if (objA.fields.Title < objB.fields.Title) {return -1;}
        else if (objA.fields.Title > objB.fields.Title) {return 1;}
        else { return 1;}
    })
      setTodoList(sortedTodos);
      setIsLoading(false);
   })
  },[])

  // //second way of fetching data, idea from Frank
  // const loadTodos = async() => {
  //   try{
  //     // // Sort by Airtable view order
  //     // const reponse = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`,{
      
  //     // // Sort by Airtable field
  //     // const reponse = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort[0][field]=Title&sort[0][direction]=asc`,{
      
  //     const reponse = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,{
  //       headers:{ 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}
  //     });

  //     const todoFromAPI = await reponse.json();
  //     // const todos = todoFromAPI.records.map(todo => todo.fields); //we can also filter the todo list first here
  //     const todos = todoFromAPI.records;

  //     setTodoList(todos);
  //     setIsLoading(false);

  //   }catch(error){
  //     console.log(error.message)
  //   }
  // }

  // useEffect(()=> loadTodos,[])
  
  useEffect(()=>{
    if(!isLoading){
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }  
  }, [todoList, isLoading])
  
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <div className="container">
            <h1 className="headlinePrimary">Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            { isLoading ? (
              <p className="center">Loading...</p> 
              ) : (
              <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
            )}
            </div>
          </>
        }>

        </Route>
        <Route path='/new' element={
          <h1>New Todo List</h1>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
