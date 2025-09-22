'use client'
import {useState} from "react";

const Navbar = ({scroll}) => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
        <nav
        className={` fixed w-full container mx-auto top-0 z-50 transition-all duration-500 flex justify-between items-center px-6  ${
          scroll
            ? "bg-white rounded-[0.8rem] shadow-md py-3"
            : "bg-transparent text-white py-6"
        }`}
      >
          {/* Logo */}
          <a href="#" className="text-white text-3xl font-bold z-20">
            <span className="text-yellow-300">InsideDecor</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10  text-[1rem]">
            <a
              href="#"
              className="hover:text-yellow-300 transition font-medium"
            >
              Destinations
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition font-medium"
            >
              Tours
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition font-medium"
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition font-medium"
            >
              Blog
            </a>
          </div>

          {/* Contact Button */}
          <a
            href="#"
            className="hidden md:block bg-white text-black  font-light text-[1rem] rounded-[.4rem] px-4 py-1 "
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white z-40 p-2 fixed top-6 right-4 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 relative flex justify-center items-center">
              <span
                className={`absolute h-1 w-8 bg-white rounded-full transform transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-1 w-8 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-1 w-8 bg-white rounded-full transform transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center z-30">
              <div className="flex flex-col space-y-2 text-white text-2xl text-center w-full px-6 max-h-screen overflow-y-auto py-12">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 hover:text-yellow-300 transition border-b border-blue-800">
                  Destinations
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 hover:text-yellow-300 transition border-b border-blue-800">
                  Tours
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 hover:text-yellow-300 transition border-b border-blue-800"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 hover:text-yellow-300 transition border-b border-blue-800"
                >
                  Travel Blog
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-black  font-medium text-[1rem] px-8 py-4 rounded-3xl transition mt-6 w-64 mx-auto"
                >
                  Book Now
                </a>
              </div>
            </div>
          )}
        </nav>

    </>
  );
};

export default Navbar;
