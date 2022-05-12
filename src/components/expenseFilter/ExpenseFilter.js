import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  //this is call when a year is selected that is why we need event
  const dropDownChangeHandler = (event) => {
    // console.log(event.targe.value);
    //sends the data to pareent Expenses via the method embeded in parrent class in hmtl
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* this on change sends an event when a new year is selected from dropdown  */}
        {/* the value= props.selected brings the value from the parent(Expenses) and keeps in on the dropdown  */}
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
