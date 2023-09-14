import React from "react";
import "./ExpenseFilter.scss";

interface ChildProps {
  onChangeFilter: (value: string) => void;
  selectedYear: string;
}

const ExpenseFilter: React.FC<ChildProps> = ({
  onChangeFilter,
  selectedYear,
}) => {
  const onYearChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onYearChangeHandler} value={selectedYear}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
