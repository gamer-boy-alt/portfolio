import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600">Ifeabunike Onyedika</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
