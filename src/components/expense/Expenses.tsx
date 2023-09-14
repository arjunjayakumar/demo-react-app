import { useState } from "react";
import { Expense } from "../../App";
import Card from "../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  const [filterYear, setFilterYear] = useState("2023");

  const onFilterChange = (selectedYear: string) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={onFilterChange}
        selectedYear={filterYear}
      />
      {expensesArray.map((expense) => (
        <ExpenseItem expense={expense} key={expense?.id} />
      ))}
    </Card>
  );
};

export default Expenses;
