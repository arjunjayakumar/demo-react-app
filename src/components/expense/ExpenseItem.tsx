import { Expense } from "../../App";
import ExpenseDate from "./ExpenseDate";
import Card from "../shared/Card";
import "./ExpenseItem.scss";

const ExpenseItem = ({ expense }: { expense: Expense }) => {
  const { title, date, amount } = expense;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
