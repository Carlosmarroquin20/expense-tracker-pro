const ExpenseForm = () => {
    return (
      <div className="p-4 bg-white shadow rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Add a New Expense</h2>
        <form>
          <input
            type="text"
            placeholder="Expense Name"
            className="border rounded p-2 mr-2 w-1/2"
          />
          <input
            type="number"
            placeholder="Amount"
            className="border rounded p-2 mr-2 w-1/4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </form>
      </div>
    );
  };
  
  export default ExpenseForm;
  