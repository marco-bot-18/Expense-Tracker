import Expense from "./components/ExpenseItemComponent/Expense";
import { expenses } from "./components/ExpenseItemComponent/expensesList";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
