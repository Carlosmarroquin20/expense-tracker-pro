import useLocalStorage from "./hooks/useLocalStorage";
import HomePage from "./pages/HomePage";

const App = () => {
  // Usamos useLocalStorage para persistir los gastos
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addExpense = (name, amount) => {
    const newExpense = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
    };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <HomePage
        expenses={expenses}
        addExpense={addExpense}
        deleteExpense={deleteExpense}
        totalExpenses={totalExpenses}
      />
    </div>
  );
};

export default App;
