import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
      <div>
        <p className="text-lg font-medium text-gray-800">{expense.name}</p>
        <p className="text-gray-500">Amount: ${expense.amount}</p>
      </div>
      <button
        onClick={() => onDelete(expense.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

// Validación de props
ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseItem;
