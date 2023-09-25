import { Expense } from "../../App";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = ({ expenses }: { expenses: Expense[] }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className=" expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense?.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
