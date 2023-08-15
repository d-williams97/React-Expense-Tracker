import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";



const dummyExpenses = [
  {
    id: "e1",
    title: "Groceries",
    amount: 33.12,
    date: new Date(2023, 8, 14),
  }
  
];


const App = () => {

const [expenseList, setExpenseList] = useState(dummyExpenses);

console.log(expenseList)


  const addExpenseHandler = (expense) => {
    setExpenseList(prevExpenses => {
      console.log([expense,...prevExpenses])
      return [expense,...prevExpenses]
    });

  };



  return (
    <div>
      {/* <condition/> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList}></Expenses>
    </div>
  );
};

export default App;
