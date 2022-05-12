import React, { Component, useState } from "react";
import ExpensesFilter from "./expenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  //saving the data from EpenseFilter in a state
  const [filteredYear, setYear] = useState("2020");
  //this metod is just from getting data from kid component ExpensesFilter
  const filterChangeHandler = (selectedYear) => {
    //changing the year
    setYear(selectedYear);
  };
  //this metod is used to filter the list on year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // this is a simple and better method for contidional content
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <div className="expenses">
        {/* metod in here is called in kid componend via props for sending data to parent */}
        {/* the "selected method" is used to send the year back to the child component FilterExpenses  */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* returning conditional content with the the secoud better way */}

        {expensesContent}
        {/* outputing Conditional Content pt year  */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found!</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* we use this .map and this {} for putting real value and not hardcoded in the list */}
        {/* the below code says i want to map every expense in my expenses array in to an ExpenseItem Jsx element !!!!!!!!!!!!! */}
        {/* {props.items ==== this will be replaced by filteredExpenses cuz we filter after year ==== */}
        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            // key is a prop you can add to help react identify individual items and you can put it in any component
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* the list is hardcoded for now as u can see below */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </div>
    </div>
  );
}

export default Expenses;
