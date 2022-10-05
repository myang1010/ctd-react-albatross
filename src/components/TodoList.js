import PropTypes from 'prop-types';
import React from 'react';
import TodoListItem from './TodoListItem'
import style from './TodoList.module.css'
import '../App.css'
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
      <div className={style.middle}>
        <strong>Sort by:</strong>
        <button className={`${style.MarginRight} ${style.MarginLeft} button`} onClick={()=>handleSort('TASK')}>
          Task Name
        </button>
        <button className= {`${style.MarginRight} button`} onClick={()=>handleSort('CTEATED')}>
          Created Time
        </button>
      </div>
      <ul>
        {sortedList.map((todo)=>{
          return(
            <TodoListItem
              key={todo.id}
              todo={todo}
              onRemoveTodo={onRemoveTodo}
            />
        )})}
      </ul> 
    </>
  );
}

TodoList.prototype = {
  todoList:PropTypes.array,
  onRemoveTodo:PropTypes.func
}
export default TodoList;