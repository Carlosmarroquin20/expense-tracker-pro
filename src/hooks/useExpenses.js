import { useState } from "react";

const useExpenses = () => {
  const [expenses, setExpenses] = useState([]); // Inicializado como []

  const addExpense = (name, amount) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Date.now(), name, amount: parseFloat(amount) },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return { expenses, addExpense, deleteExpense, getTotalExpenses };
};

export default useExpenses;
