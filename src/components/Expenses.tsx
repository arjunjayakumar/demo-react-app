import { Expense } from "../App";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  return (
    <div className="expenses">
      {expensesArray.map((expense) => (
        <ExpenseItem expense={expense} key={expense?.id} />
      ))}
    </div>
  );
};

export default Expenses;
