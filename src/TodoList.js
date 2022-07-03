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
        {todoList.map(function(listItem){
          return(
            <TodoListItem
              key={listItem.id}
              id={listItem.id}
              title={listItem.title}
            />
          )})}
      </ul>
    </div>
  );
}

export default TodoList;