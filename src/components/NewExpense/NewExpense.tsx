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
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${id + 1}`,
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
