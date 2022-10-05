import React from 'react';
import '../App.css';
import Navbar from './Navbar';

function About(){
  return (
    <div className="container">
      <Navbar />
      <h1 className="headlinePrimary">About To Do List Project</h1>
      <section>
      <dl>
        <dt><strong>What does this app do?</strong></dt>
        <dd>- This To Do List app allows user to add, delete and sort tasks</dd>
      </dl>
      <p><strong>What will be in this final project?</strong></p>
        <ul>
            <li>2 pages, About and To Do List page </li>
            <li>All the 5 required components, plus About.js and Navbar.js</li>
            <li>CSS module and css file</li>
            <li>Bonus points
                <ul>
                    <li>Use TodoContainer.js</li>
                    <li>Navigation menu</li>
                    <li>Re-sort todo list after adding new todo</li>
                    <li>Load in a font family from Google Fonts</li>
                    <li>Customize style of navigation items</li>
                    <li>Add multi-media usage</li>
                    <li>No warnings!</li>
                </ul>
            </li>
            <li><strong>Some extra effort</strong>
                <ul>
                    <li>Add Hearts loading indicator</li>
                    <li>Add an empty input check</li>
                    <li>Add a duplicate input check</li>
                    <li>Add a task capitalization function</li>
                    <li>Include a simple unit test case</li>
                    <li><a href="https://todolist-8820a.web.app/" target="_blank" rel="noopener noreferrer">Deploy to Firebase</a></li>
                </ul>
            </li>
            <li>Things to do next...
                <ul>
                    <li>UI</li>
                    <li>Edit each task</li>
                    <li>A button to clear whole tasks</li>
                </ul>
            </li>
        </ul>
      </section>
      <p>Thank you CTD, mentors and classmates for the past 4 months!</p>
    </div>
  )
}

export default About;