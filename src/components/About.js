import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/App.css';
import style from '../styling/Navbar.module.css';

function About(){
  return (
    <div className="container">
      <nav>
        <Link to="/about" className={style.bg}>About</Link>
        <span className={style.bg}>|</span> 
        <Link to="/" className={style.bg}>Todo List</Link>
      </nav>
      <h1 className="headlinePrimary">About Todo List Project</h1>
      <section>
      <dl>
        <dt>What does this app do?</dt>
        <dd>- This Todo List app allows user to add, delete and sort tasks</dd>
      </dl>
      <p>Highlights</p>
        <ul>
            <li>2 pages
                <ul>
                    <li>About page</li>
                    <li>Todo List page</li>
                </ul>
            </li>
            <li>6 components
                <ol>
                    <li>About.js</li>
                    <li>todoContainer.js</li>
                    <li>AddTodoForm.js</li>
                    <li>InputWithLabel.js</li>
                    <li>TodoList.js</li>
                    <li>TodoListItem.js</li>
                </ol>
            </li>
            <li>User both CSS module and css file
                <ul>
                    <li>App.css</li>
                    <li>Navbar.module.css</li>
                    <li>TodoList.module.css</li>
                    <li>TodoListItem.module.css</li>
                </ul>
            </li>
            <li><strong>Extra effort</strong>
                <ul>
                    <li>Add an empty input check</li>
                    <li>Add a duplicate input check</li>
                </ul>
            </li>
        </ul>
      </section>
      <p>Thank you CTD, mentors and classmates for the past 2 months!</p>
    </div>
  )
}

export default About;