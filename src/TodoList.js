import React from 'react';

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
            <li key={listItem.id}>{listItem.title}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;