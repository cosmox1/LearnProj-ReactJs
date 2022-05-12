import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //used to get data from cheild ExpenseForm
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    //sending to parent the data
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* onsave is here with saveExpenseDataHandler just to make props work in expenseForm */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
