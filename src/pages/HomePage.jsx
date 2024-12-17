import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalExpenses from "../components/TotalExpenses";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          Welcome to Expense Tracker Pro!
        </h1>
        <p className="text-gray-700 mb-4">
          This is a professional project to manage your expenses efficiently.
        </p>
        <ExpenseForm />
        <ExpenseList />
        <TotalExpenses />
      </div>
    </div>
  );
};

export default HomePage;
