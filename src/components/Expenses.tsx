import { Expense } from "../App";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  return expensesArray.map((expense) => <ExpenseItem expense={expense} />);
};

export default Expenses;
