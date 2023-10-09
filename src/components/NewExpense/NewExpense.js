import React from "react";
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

const newExpense = (props) => {
    const saveExpenseDataHandler = enteredEnpenseData => {
        const expenseData ={
            ...enteredEnpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)

    }
    return <div className="new-expense">
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default newExpense