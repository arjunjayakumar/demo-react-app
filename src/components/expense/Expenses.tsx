import { useState } from "react";
import { Expense } from "../../App";
import Card from "../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.scss";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expensesArray }: { expensesArray: Expense[] }) => {
  const [filterYear, setFilterYear] = useState("2023");
  const [filteredArray, setFilterArray] = useState(expensesArray);

  const onFilterChange = (selectedYear: string) => {
    setFilterYear(selectedYear);
    setFilterArray(
      expensesArray.filter(
        (expense) => expense?.date?.getFullYear()?.toString() === selectedYear
      )
    );
  };

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
