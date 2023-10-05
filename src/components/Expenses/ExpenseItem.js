import './ExpenseItem.css'
import './ExpenseDate'
import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const [title, setTitle] =useState(props.title)

  const clickHandler = () => {
    setTitle('new title')
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>CLICK</button>
    </div>
  );
}

export default ExpenseItem;
