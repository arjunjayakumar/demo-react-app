import { Expense } from "../../App";
import Card from "../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  const onFilterChange = (event: string) => {
    console.log("onFilterChange", event);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={onFilterChange} />
      {expensesArray.map((expense) => (
        <ExpenseItem expense={expense} key={expense?.id} />
      ))}
    </Card>
  );
};

export default Expenses;
