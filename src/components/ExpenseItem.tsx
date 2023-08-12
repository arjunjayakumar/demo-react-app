import "./ExpenseItem.scss";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>12th August 2023</div>
      <div className="expense-item__description">
        <h2>Udemy Charges</h2>
        <div className="expense-item__price">$389.99</div>
      </div>
    </div>
  );
}
