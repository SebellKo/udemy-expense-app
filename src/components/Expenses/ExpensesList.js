import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {

  if (props.item.length === 0) {
      return <h2 className='expenses0list__fallback'> Found no epenses.</h2>
  }

  return <ul className='expenses-list'>
      {props.item.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      ></ExpenseItem>))}
  </ul>
};

export default ExpensesList;
