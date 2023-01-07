import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setYearSelected] = useState('2023');
  
  const filterChangeHandler = (selectYear) => {
    setYearSelected(selectYear);
    console.log(selectYear)
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </Card>
    </div>
  )
}

export default Expenses;