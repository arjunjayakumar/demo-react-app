import { Expense } from "../App";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

const ExpenseItem = ({ expense }: { expense: Expense }) => {
  const { title, date, amount } = expense;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
