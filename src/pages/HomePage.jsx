import PropTypes from "prop-types";
import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalExpenses from "../components/TotalExpenses";

const HomePage = ({ expenses, addExpense, deleteExpense, totalExpenses }) => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      <Header />
      <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <TotalExpenses total={totalExpenses} />
      </div>
    </div>
  );
};

// PropTypes para validar las props recibidas
HomePage.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  addExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default HomePage;
