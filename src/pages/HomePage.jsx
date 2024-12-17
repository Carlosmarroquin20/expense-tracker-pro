import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalExpenses from "../components/TotalExpenses";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-4xl p-4">
        <ExpenseForm />
        <ExpenseList />
        <TotalExpenses />
      </div>
    </div>
  );
};

export default HomePage;
