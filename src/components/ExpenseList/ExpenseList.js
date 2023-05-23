import React, { useState, useEffect } from "react";
import styles from "./ExpenseList.module.css";
import Transaction from '../Transaction/Transaction'
export default function ExpenseList(dataArr) {

  // const [text, setText] = useState("")
  // const [amount, setAmount] = useState();
  // const [index, setIndex] = useState();
  const NewArray = dataArr.dataArr






  if (Array.length !== 0) {
    return (

      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {/* Display transactions here */}
          {/* {<Transaction text={text} amount={amount} index={index} />} */}
          {NewArray.map((data, i) => <Transaction text={data.text} amount={data.amount} index={i} key={i} />)}

        </ul>
      </div>
    );
  }


}
