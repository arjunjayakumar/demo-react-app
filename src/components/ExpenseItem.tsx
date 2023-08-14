import { Expense } from "../App";
import "./ExpenseItem.scss";

class ExpenseProps {
  public expense = new Expense();
}

export default function ExpenseItem({ expense }: ExpenseProps) {
  return (
    // Expense Item Container
    <div className="expense-item">
      {/* Date */}
      <div>{expense.date.toDateString()}</div>

      {/* Description */}
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
}
