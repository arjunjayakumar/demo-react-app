import "./App.scss";
import ExpenseItem from "./components/ExpenseItem";

export class Expense {
  public id: string = "";
  public title: string = "";
  public amount: number = 0;
  public date: Date = new Date();
}

function App() {
  const expenses: Expense[] = [
    {
      id: "e1",
      title: "Health Insurance",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Home Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Investment",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </>
  );
}

export default App;
