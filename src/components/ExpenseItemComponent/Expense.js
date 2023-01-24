import React from "react";
import ExpenseItem from "./ExpenseItem";
import { expenses } from "./expensesList";

export default function Expense() {
  return (
    <div>
      {expenses.map((item, key) => (
        <ExpenseItem
          key={key}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}
