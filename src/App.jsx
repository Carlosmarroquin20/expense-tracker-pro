import useExpenses from "./hooks/useExpenses";
import HomePage from "./pages/HomePage";

const App = () => {
  const { expenses, addExpense, deleteExpense, getTotalExpenses } = useExpenses();

  return (
    <HomePage
      expenses={expenses}
      addExpense={addExpense}
      deleteExpense={deleteExpense}
      totalExpenses={getTotalExpenses()}
    />
  );
};

export default App;
