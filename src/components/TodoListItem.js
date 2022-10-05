import PropTypes from 'prop-types';
import React from 'react';
import style from './TodoListItem.module.css';
import minusSign from '../img/minus.png'

function TodoListItem({todo, onRemoveTodo}){
  return (
    <li className={style.ListItem}>
      <div className={style.left}>{todo.fields.Title}</div>
      <div className={style.right}>
        <button className="buttonMinus" onClick={()=>onRemoveTodo(todo)}>
          <img src={minusSign} alt="remove sign" width="24px" height="18px"/>
        </button>
      </div>
    </li>
  )
}

TodoListItem.prototype = {
  todo:PropTypes.object,
  onRemoveTodo: PropTypes.func
}
export default TodoListItem;