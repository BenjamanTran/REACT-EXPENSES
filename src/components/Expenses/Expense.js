
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expense.css'
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterExpenses = props.items.filter(expennse => {
    return expennse.date.getFullYear().toString() === filteredYear
  })
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <div className="expense">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expense={filterExpenses}/>
      <Card>
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
}
export default Expense
