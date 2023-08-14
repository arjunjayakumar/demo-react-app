import { Expense } from "../App";
import "./ExpenseItem.scss";

class ExpenseProps {
  public expense = new Expense();
}

export default function ExpenseItem({ expense }: ExpenseProps) {
  const { title, date, amount } = expense;
  return (
    // Expense Item Container
    <div className="expense-item">
      {/* Date */}
      <div>{date.toDateString()}</div>

      {/* Description */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
