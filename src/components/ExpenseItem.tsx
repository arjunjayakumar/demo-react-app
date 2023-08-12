import { ExpenseObject } from "../App";
import "./ExpenseItem.scss";

class Expense {
  public expense = new ExpenseObject();
}

export default function ExpenseItem(props: Expense) {
  return (
    // Expense Item Container
    <div className="expense-item">
      {/* Date */}
      <div>{props.expense.date.toDateString()}</div>

      {/* Description */}
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}
