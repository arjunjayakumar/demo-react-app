import { Expense } from "../App";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.scss";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  return (
    <Card className="expenses">
      {expensesArray.map((expense) => (
        <ExpenseItem expense={expense} key={expense?.id} />
      ))}
    </Card>
  );
};

export default Expenses;
