import { useState } from "react";

const ExpenseForm = () => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="p-6 bg-white shadow-2xl rounded-2xl transition-all duration-300 hover:shadow-blue-200">
      <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
        Add a New Expense
      </h2>
      <form className="grid gap-6">
        {/* Input: Expense Name */}
        <div className="relative">
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg p-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <label
            className="absolute left-4 top-4 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500 transition-all duration-200"
          >
            Expense Name
          </label>
        </div>

        {/* Input: Amount */}
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=" "
            className="peer w-full border-2 border-gray-300 rounded-lg p-4 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <label
            className="absolute left-4 top-4 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500 transition-all duration-200"
          >
            Amount
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md transition-all duration-300"
        >
          ➕ Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
