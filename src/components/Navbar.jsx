import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between h-full max-w-6xl px-4 py-4 mx-auto">
        <h1 className="h-full text-2xl font-bold text-blue-500">My Portfolio</h1>
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>
        {                  }
        <div className="hidden space-x-6 lg:flex">
          <Link to="/" className="">Home</Link>
          <Link to="/projects" className="">Projects</Link>
          <Link to="/about" className="">About</Link>
          <Link to="/contact" className="">Contact</Link>
        </div>
      </div>
      {                 }
      {isOpen && (
        <div className="border-2 lg:hidden p-7">
          <ul className="flex flex-col items-center justify-center space-y-4">
            <li>
              <Link to="/" className="">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="">Projects</Link>
            </li>
            <li>
              <Link to="/about" className="">About</Link>
            </li>
            <li>
              <Link to="/contact" className="">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}