import React from "react";
import "./ExpenseFilter.scss";

interface ChildProps {
  onChangeFilter: (value: string) => void;
}

const ExpenseFilter: React.FC<ChildProps> = ({ onChangeFilter }) => {
  const onYearChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onYearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
