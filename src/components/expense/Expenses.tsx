import { useState } from "react";
import { Expense } from "../../App";
import Card from "../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.scss";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  const [filterYear, setFilterYear] = useState("2023");

  const onFilterChange = (selectedYear: string) => {
    setFilterYear(selectedYear);
  };

  const filteredArray = expensesArray.filter(
    (expense) => expense?.date?.getFullYear()?.toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={onFilterChange}
        selectedYear={filterYear}
      />

      <ExpensesList expenses={filteredArray} />
    </Card>
  );
};

export default Expenses;
