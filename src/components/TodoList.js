import PropTypes from 'prop-types';
import React from 'react';
import TodoListItem from './TodoListItem'

function TodoList({todoList, onRemoveTodo}){
  return (
    <div>
      <ul>
        {todoList.map(function(todo){
          return(
            <TodoListItem
              key={todo.id}
              todo={todo}
              onRemoveTodo={onRemoveTodo}
            />
          )})}
      </ul>
    </div>
  );
}

TodoList.prototype = {
  todoList:PropTypes.array,
  onRemoveTodo:PropTypes.func
}
export default TodoList;