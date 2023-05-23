import "./App.css";
import React, { useState, useEffect } from "react";
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseInfo from './components/ExpenseInfo/ExpenseInfo'
import ExpenseList from './components/ExpenseList/ExpenseList'
// import { useState } from "react";

const App = () => {
  // Create state for the expenses here
  const [dataArr, setArr] = useState([])


  const updateData = (Data) => {

    setArr([Data, ...dataArr])
    // console.log(dataArr)
  }






  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm updateData={updateData} />
        <div className="expenseContainer">
          {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo dataArr={dataArr} />
          <ExpenseList dataArr={dataArr} />
        </div>
      </div>
    </>
  );

}

export default App