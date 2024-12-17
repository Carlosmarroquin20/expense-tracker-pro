import { useState } from "react";
import PropTypes from "prop-types";

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Expense name is required";
    } else if (name.length < 3) {
      newErrors.name = "Expense name must be at least 3 characters";
    }

    if (!amount) {
      newErrors.amount = "Amount is required";
    } else if (amount <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addExpense(name, Number(amount));
      setName("");
      setAmount("");
      setErrors({});
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
        {/* Expense Name */}
        <div className="col-span-1 md:col-span-2">
          <input
            type="text"
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`px-4 py-3 text-lg rounded-xl border-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            } focus:outline-none focus:ring-4 focus:border-transparent placeholder-gray-400 transition-all duration-300 w-full`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 animate-fadeInLeft">{errors.name}</p>
          )}
        </div>

        {/* Amount */}
        <div>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`px-4 py-3 text-lg rounded-xl border-2 ${
              errors.amount ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            } focus:outline-none focus:ring-4 focus:border-transparent placeholder-gray-400 transition-all duration-300 w-full`}
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1 animate-fadeInLeft">{errors.amount}</p>
          )}
        </div>

        {/* Submit Button */}
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
