import Header from "../components/Header";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalExpenses from "../components/TotalExpenses";

const HomePage = () => {
    return (
      <div className="min-h-screen w-full bg-gray-100 flex flex-col">
        <Header />
        <div className="flex-grow w-full max-w-7xl mx-auto p-6">
          <ExpenseForm />
          <ExpenseList />
          <TotalExpenses />
        </div>
      </div>
    );
  };
  
  export default HomePage;
