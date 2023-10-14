import './NewExpenseForm.css';
import React, { useState } from 'react';

const NewExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    // const titleChangeHandler = (event) => {
    //     setUserInput(prevState => {
    //        return { ...prevState, enteredTitle: event.target.value}
    //     })
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput(prevState => {
    //        return { ...prevState, enteredAmount: event.target.value}
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput(prevState => {
    //        return { ...prevState, enteredDate: event.target.value}
    //     })
    // }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData)

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

    }

    const inputChangeHandler = (nameInput, value) => {
        if (nameInput === 'title') {
            setUserInput(prevState => {
                return { ...prevState, enteredTitle: value }
            })
        } else if (nameInput === 'amount') {
            setUserInput(prevState => {
                return { ...prevState, enteredAmount: value }
            })
        } else {
            setUserInput(prevState => {
                return { ...prevState, enteredDate: value }
            })
        }
    }

    return <form onSubmit={formSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle} onChange={event => inputChangeHandler('title', event.target.value)} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={event => inputChangeHandler('amount', event.target.value)} />
            </div>
            <div className='new-expense__control' >
                <label>Date</label>
                <input type='date' value={userInput.enteredDate} onChange={event => inputChangeHandler('date', event.target.value)} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button>Add Expense</button>
        </div>
    </form>

}

export default NewExpenseForm