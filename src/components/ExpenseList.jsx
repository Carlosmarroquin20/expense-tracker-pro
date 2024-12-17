import PropTypes from "prop-types"; 
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="p-6 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-700 mb-4">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">No expenses added yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={deleteExpense}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

// Validación de props con PropTypes
ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
