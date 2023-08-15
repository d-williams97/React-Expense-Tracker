import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  
  const [filterData, setFilterData] = useState("2023");

  const savefilterdata = (filterYear) => {
    setFilterData(filterYear);
  };
  console.log(filterData);



  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterData
  );

  console.log(filteredExpenses)

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onSaveYear={savefilterdata} selected={filterData} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
