import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {

  const filterChangeHandler = (e) => {
    props.onSaveYear(e.target.value)
  };


  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label form="year">Select Year:</label>
        <select name="years" onChange={filterChangeHandler} value={props.selected}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
