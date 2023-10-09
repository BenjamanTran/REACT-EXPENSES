import './App.css';
import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const addExpenseHandler = (expenseData) =>{
    console.log(expenseData)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense />
    </div>)
}

export default App;
