import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoContainer from './components/todoContainer';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <TodoContainer tableName='Todo List'></TodoContainer>
          </>
        }>

        </Route>
        <Route path='/about' element={
          <h1>About Todo List App</h1>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
