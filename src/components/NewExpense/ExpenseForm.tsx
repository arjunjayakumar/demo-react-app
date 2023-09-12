import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
    //     setUserInput((prevState) => {
    //       return { ...prevState, enteredTitle: event.target.value };
    //     });
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
    //     setUserInput((prevState) => {
    //       return { ...prevState, enteredAmount: event.target.value };
    //     });
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
    //     setUserInput((prevState) => {
    //       return { ...prevState, enteredDate: event.target.value };
    //     });
  };

  // const inputChangeHandler = (identifier: string, value: string) => {
  //   switch (identifier) {
  //     case "title":
  //       setEnteredTitle(value);
  //       break;
  //     case "amount":
  //       setEnteredAmount(value);
  //       break;
  //     default:
  //       setEnteredDate(value);
  //       break;
  //   }
  // };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// return (
//   <form>
//     <div className="new-expense__controls">
//       <div className="new-expense__control">
//         <label>Title</label>
//         <input
//           type="text"
//           onChange={(event) => {
//             inputChangeHandler("title", event.target.value);
//           }}
//         />
//       </div>

//       <div className="new-expense__control">
//         <label>Amount</label>
//         <input
//           type="number"
//           min="0.01"
//           step="0.01"
//           onChange={(event) => {
//             inputChangeHandler("amount", event.target.value);
//           }}
//         />
//       </div>

//       <div className="new-expense__control">
//         <label>Date</label>
//         <input
//           type="date"
//           min="2020-01-01"
//           max="2023-12-31"
//           onChange={(event) => {
//             inputChangeHandler("date", event.target.value);
//           }}
//         />
//       </div>
//     </div>

//     <div className="new-expense__actions">
//       <button type="submit">Add Expense</button>
//     </div>
//   </form>
// );