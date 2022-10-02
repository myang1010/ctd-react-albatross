import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoContainer from './components/todoContainer';
import About from './components/About';
import "./styling/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <TodoContainer tableName='To Do List'></TodoContainer>
          </>
        }>

        </Route>
        <Route path='/about' element={
          <>
            <About></About>
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
