import PropTypes from 'prop-types';
import React from 'react';
// import style from './TodoListItem.module.css';
import styled from 'styled-components';

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

function TodoListItem({todo, onRemoveTodo}){
  return (
    <>
      <StyledItem>
        <StyledColumnItem width='50%'>{todo.fields.Title}</StyledColumnItem>
        <StyledColumnButton width='10%'> 
          <StyledButton
            type="button" 
            onClick={()=>onRemoveTodo(todo)}
          >
            Remove
          </StyledButton>
        </StyledColumnButton>
      </StyledItem>
    </>
  )
}

TodoListItem.prototype = {
  todo:PropTypes.object,
  onRemoveTodo: PropTypes.func
}
export default TodoListItem;