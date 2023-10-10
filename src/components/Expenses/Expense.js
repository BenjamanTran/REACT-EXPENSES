
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter'

function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    // let filterInfoText = '2019, 2021 & 2022'

    // if (filteredYear === '2019') {
    //     filterInfoText = '2020, 2021 & 2022'
    // }
    // else if (filteredYear === '2020') {
    //     filterInfoText = '2019, 2021 & 2022'
    // }
    // else {
    //     filterInfoText = '2019, 2020 & 2021'
    // }

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <div className="expense">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <Card>
                {props.items.map((item) => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />)}
            </Card>
        </div>
    );
}

export default Expense