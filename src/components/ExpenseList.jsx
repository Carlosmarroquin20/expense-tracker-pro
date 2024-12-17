import { FaTrashAlt, FaEdit } from "react-icons/fa";

const ExpenseList = ({ expenses = [] }) => {
  return (
    <div className="p-6 bg-white shadow-2xl rounded-2xl transition-all duration-300 hover:shadow-blue-200">
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Expense List</h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500 text-lg text-center py-6">
          No expenses added yet. Start adding your expenses! 🚀
        </p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-all duration-300"
            >
              <div>
                <p className="text-lg font-medium text-gray-800">
                  {expense.name}
                </p>
                <p className="text-gray-500">Amount: ${expense.amount}</p>
              </div>

              <div className="flex gap-3">
                <button className="text-blue-500 hover:text-blue-700 transition-all duration-300">
                  <FaEdit size={20} />
                </button>
                <button className="text-red-500 hover:text-red-700 transition-all duration-300">
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
