import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:opacity-90 transition-opacity">
        Placement<span className="text-blue-600">Pro</span>
      </Link>
      
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 font-medium text-gray-600 w-full md:w-auto">
        <Link to="/" className="hover:text-blue-600 transition-colors duration-200 w-full md:w-auto text-center py-1 md:py-0">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors duration-200 w-full md:w-auto text-center py-1 md:py-0">
          About
        </Link>
        <Link to="/dashboard" className="hover:text-blue-600 transition-colors duration-200 w-full md:w-auto text-center py-1 md:py-0">
          Dashboard
        </Link>
        <Link to="/login" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 text-center w-full md:w-auto shadow-md shadow-blue-200">
          Login
        </Link>
      </div>
    </nav>
  );
}
