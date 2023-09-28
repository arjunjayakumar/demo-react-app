import { useState } from "react";
import { Expense } from "../../App";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

export interface ExpenseFormData {
  title: string;
  amount: number;
  date: Date;
}

interface ChildProps {
  onAddExpense: (value: Expense) => void;
  id: number;
}

const NewExpense: React.FC<ChildProps> = ({ onAddExpense, id }) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${id + 1}`,
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add new expense</button>}
      {showForm && (
        <ExpenseForm
          onCancel={hideFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
