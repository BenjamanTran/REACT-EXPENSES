import React from "react";
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

const newExpense = () => {
    return <div className="new-expense">
        <NewExpenseForm/>
    </div>
}

export default newExpense