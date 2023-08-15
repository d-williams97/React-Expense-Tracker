import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  let [isEditing, setIsEditing] = useState(false);

  let addExpenseButtonHandler = () => {
    setIsEditing((prevSate) => true);
  };

  let cancelEditingHandler = () => {
    setIsEditing((prevSate) => false);
  };

  return (
    <div className="new-expense">
      {!isEditing && 
      (<button onClick={addExpenseButtonHandler}> Add New Expense</button>)}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
