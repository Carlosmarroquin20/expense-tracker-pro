const ExpenseForm = () => {
    return (
      <div className="p-4 bg-gray-50 shadow-inner rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Add a New Expense
        </h2>
        <form className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Expense Name"
            className="flex-1 border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-1/4 border rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Add
          </button>
        </form>
      </div>
    );
  };
  
  export default ExpenseForm;
  