import { Expense } from "../App";
import "./ExpenseItem.scss";

class ExpenseProps {
  public expense = new Expense();
}

export default function ExpenseItem({ expense }: ExpenseProps) {
  const { title, date, amount } = expense,
    month = date.toLocaleString("en-US", { month: "long" }),
    day = date.toLocaleString("en-US", { day: "2-digit" }),
    year = date.getFullYear();

  return (
    // Expense Item Container
    <div className="expense-item">
      {/* Date */}
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      {/* Description */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
