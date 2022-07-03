import React from 'react';
import TodoListItem from './TodoListItem'

const todoList = [
  {
    id: 1,
    title: 'Complete Assignement',
  },
  { id: 2,
  title: 'Have Fun at Sunday Street',
  },
  {
    id: 3,
    title: 'Finish Importer Result Page',
  },
];

function TodoList(){
  return (
    <div>
      <ul>
        {todoList.map(function(todo){
          return(
            <TodoListItem
              key={todo.id}
              todo={todo}
            />
          )})}
      </ul>
    </div>
  );
}

export default TodoList;