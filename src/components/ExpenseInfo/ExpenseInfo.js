import React, { useState, useEffect } from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo(dataArray) {
  const [total, setTotal] = useState(undefined)
  const [profit, setProfit] = useState(undefined)
  const [expense, setExpense] = useState(undefined)


  useEffect(() => {
    let Array = dataArray.dataArr
    if (Array.length !== 0) {
      let sum = 0
      let pos = 0
      let neg = 0
      Array.map((data) => {
        let num = +data.amount
        sum = sum + num
        if (num > 0) {
          pos = pos + num;
        } else {
          neg = neg + num
        }
      })
      setTotal(sum)
      setProfit(pos)
      setExpense(neg)
    }

  })


  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
}
