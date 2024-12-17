import PropTypes from "prop-types"; // PropTypes
import { FaDollarSign } from "react-icons/fa";

const TotalExpenses = ({ total = 0 }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-green-500 shadow-2xl rounded-2xl flex items-center justify-between text-white animate-fadeIn">
      <div className="flex items-center gap-4">
        {/* Icono */}
        <div className="bg-white p-4 rounded-full shadow-lg">
          <FaDollarSign className="text-green-500 text-3xl" />
        </div>

        {/* Texto */}
        <h2 className="text-2xl md:text-3xl font-extrabold drop-shadow-lg">
          Total Expenses
        </h2>
      </div>

      {/* Cantidad Total */}
      <p className="text-4xl font-bold tracking-wider drop-shadow-md">
        ${total}
      </p>
    </div>
  );
};

// Agregar validación de props
TotalExpenses.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalExpenses;
