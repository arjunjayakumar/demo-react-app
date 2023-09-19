import { Expense } from "../../App";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

export interface ExpenseFormData {
  title: string;
  amount: string;
  date: Date;
}

interface ChildProps {
  onAddExpense: (value: Expense) => void;
}

const NewExpense: React.FC<ChildProps> = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${Math.random()}`,
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
