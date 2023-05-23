import React, { useState, useEffect } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ dataArr, updateData }) => {
  // Create state or ref for the inputs here
  const [text, setText] = useState("")
  const [amount, setAmount] = useState()


  const formData = (e) => {
    e.preventDefault();

    updateData({ text, amount })

    setAmount("")
    setText("")
  }


  return (
    <>
      <form className={styles.form} onSubmit={formData}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>

    </>
  );

}
export default ExpenseForm