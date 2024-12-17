import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group animate-fadeIn">
      {/* Información del gasto */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full shadow-inner">
          <span className="text-blue-600 text-xl font-semibold">
            {expense.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">
            {expense.name}
          </p>
          <p className="text-gray-500 text-sm group-hover:text-gray-600 transition duration-300">
            Amount:{" "}
            <span className="text-blue-500 font-semibold">
              ${expense.amount.toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      {/* Botón de eliminar */}
      <button
        onClick={() => onDelete(expense.id)}
        className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md hover:shadow-lg active:scale-95 transition-all duration-300"
        aria-label="Delete expense"
      >
        <FaTrashAlt className="text-xl" />
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
