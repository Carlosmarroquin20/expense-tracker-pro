import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";

const TotalExpenses = ({ total = 0 }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-green-400 to-green-600 shadow-2xl rounded-3xl flex items-center justify-between text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Icono */}
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-lg animate-pulse">
          <FaDollarSign className="text-green-500 text-4xl" />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-md">
            Total Expenses
          </h2>
          <p className="text-sm font-light text-white/80">
            Your current total expenses
          </p>
        </div>
      </div>

      {/* Cantidad Total */}
      <div className="text-right">
        <p className="text-5xl font-extrabold tracking-tight drop-shadow-md">
          ${total.toLocaleString()}
        </p>
        <span className="text-sm font-medium text-white/90">
          Updated in real-time
        </span>
      </div>
    </div>
  );
};

TotalExpenses.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalExpenses;
