import { useState } from "react";
import PropTypes from "prop-types"; //PropTypes

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && amount > 0) {
      addExpense(name, amount);
      setName("");
      setAmount("");
    }
  };

  return (
    <div className="p-6 bg-gray-50 shadow-inner rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Expense</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-1/4 border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

// Agregar validación de props
ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
