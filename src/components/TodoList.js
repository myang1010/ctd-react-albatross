import PropTypes from 'prop-types';
import React from 'react';
import TodoListItem from './TodoListItem'
import styled from 'styled-components';
import { sortBy } from 'lodash';

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;
const StyledColumnItem = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  a {
    color: inherit;
  }
  width: ${(props) => props.width};
  text-align: right;
`;

const StyledColumnButton = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  a {
    color: inherit;
  }
  width: ${(props) => props.width};
  text-align: left;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  
  &:hover {
    background: #171212;
    color: #ffffff;
  }
`;

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
      <StyledItem>
        <StyledColumnItem width='40%'>Sort by:</StyledColumnItem>
        <StyledColumnItem width='10%'> 
          <StyledButton type="button" onClick={()=>handleSort('TASK')}>
            Task
          </StyledButton>
        </StyledColumnItem>
        <StyledColumnItem width='20%'> 
          <StyledButton type="button" onClick={()=>handleSort('CTEATED')}>
            Created Time
          </StyledButton>
        </StyledColumnItem>
      </StyledItem>
      
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