import Navbar from "../navbar";
import Sidebar from "../sidebar";

const Header = () => {
  return (
    <header className="fixed">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="block sm:hidden">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
