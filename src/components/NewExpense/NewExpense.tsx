import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

export interface ExpenseFormData {
  title: string;
  amount: number;
  date: Date;
}

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseFormData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: `e${Math.floor(Math.random())}`,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
