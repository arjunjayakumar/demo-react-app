import { Expense } from "../App";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";

export default function ExpenseItem({ expense }: { expense: Expense }) {
  const { title, date, amount } = expense;

  return (
    // Expense Item Container
    <div className="expense-item">
      <ExpenseDate date={date} />

      {/* Description */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
