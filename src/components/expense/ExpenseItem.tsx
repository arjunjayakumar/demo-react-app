import { Expense } from "../../App";
import ExpenseDate from "./ExpenseDate";
import Card from "../shared/Card";
import "./ExpenseItem.scss";
import { useState } from "react";

const ExpenseItem = ({ expense }: { expense: Expense }) => {
  const { date, amount } = expense,
    [title, setTitle] = useState(expense.title);

  const clickHander = () => {
    setTitle("Updated Title!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHander}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
