import React, { useState } from "react"
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm"

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredEnpenseData => {
        const expenseData = {
            ...enteredEnpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(true)
    }

    const startAddFormHandle = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return <div className="new-expense">
        {
            !isEditing && <button onClick={startAddFormHandle}>Add new expenses</button>
        }
        {
            isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
        }
    </div>
}

export default NewExpense