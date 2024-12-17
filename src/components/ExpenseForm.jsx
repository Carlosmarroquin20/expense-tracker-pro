import { useState } from "react";
import PropTypes from "prop-types";

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
    <div className="p-8 bg-white rounded-2xl shadow-2xl border-t-4 border-blue-500 transition-all duration-500 hover:shadow-blue-200 animate-fadeIn">
      {/* Encabezado con Icono */}
      <div className="flex items-center mb-6 gap-3">
        <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-md animate-bounce">
        ⭐
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Add a New Expense
        </h2>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-span-1 md:col-span-2 px-4 py-3 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 py-3 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
        />

        <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
        >
          ➕ Add Expense
        </button>
      </form>
    </div>
  );
};

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
