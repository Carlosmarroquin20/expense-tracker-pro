const Header = () => {
    return (
      <header className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-6 shadow-lg rounded-b-2xl animate-fadeInDown">
        <div className="container mx-auto text-center">
          {/* Título Principal */}
          <h1
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm tracking-wide 
            hover:text-blue-300 hover:drop-shadow-lg transition-all duration-300"
          >
            Expense Tracker Pro
          </h1>
  
          {/* Línea decorativa */}
          <div className="w-12 h-1 bg-blue-300 mx-auto mt-3 rounded-full"></div>
  
          {/* Subtexto */}
          <p className="mt-3 text-sm md:text-base text-blue-200 font-light">
            Manage your expenses with precision 🚀
          </p>
        </div>
      </header>
    );
  };
  
  export default Header;
  