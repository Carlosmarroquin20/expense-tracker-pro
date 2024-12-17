import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalExpenses from "../components/TotalExpenses";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 my-8">
        <ExpenseForm />
        <div className="mt-6">
          <ExpenseList />
        </div>
        <div className="mt-6">
          <TotalExpenses />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
