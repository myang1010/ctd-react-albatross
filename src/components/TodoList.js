import PropTypes from 'prop-types';
import React from 'react';
import TodoListItem from './TodoListItem'
import { sortBy } from 'lodash';

const SORTS = {
  NONE: (todoList) => todoList,
  TASK: (todoList) => sortBy(todoList, 'fields.Title'),
  CTEATED: (todoList) => sortBy(todoList, 'createdTime'),
};

function TodoList({todoList, onRemoveTodo}){
  const [sort, setSort] = React.useState({
    sortKey: 'NONE',
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey, isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(todoList).reverse()
    : sortFunction(todoList);

  return (
    <>
      <div>
        <p width='40%'>Sort by:</p>
        <button onClick={()=>handleSort('TASK')}>
          Task
        </button>
        <button onClick={()=>handleSort('CTEATED')}>
          Created Time
        </button>
      </div>
      
      {sortedList.map((todo)=>{
        return(
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
          />
        )})}
    </>
  );
}

TodoList.prototype = {
  todoList:PropTypes.array,
  onRemoveTodo:PropTypes.func
}
export default TodoList;