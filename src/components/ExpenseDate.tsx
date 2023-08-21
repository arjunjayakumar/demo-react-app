export default function ExpenseDate({ date }: { date: Date }) {
  const month = date.toLocaleString("en-US", { month: "long" }),
    day = date.toLocaleString("en-US", { day: "2-digit" }),
    year = date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}
