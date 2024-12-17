const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 py-10 shadow-2xl rounded-b-3xl animate-fadeIn">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md tracking-widest">
          Expense Tracker Pro
        </h1>
        <div className="w-1/4 mx-auto mt-4 border-b-4 border-blue-300 rounded-full shadow-md"></div>
        <p className="mt-4 text-lg md:text-xl text-blue-200 font-light">
          Manage your expenses effortlessly and efficiently 🚀
        </p>
      </div>
    </header>
  );
};

export default Header;
