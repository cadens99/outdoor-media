import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
          ? 'bg-[#0f1b14]/90 shadow-md backdrop-blur border-b border-[#1a2a20]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center animate-fade-in">
        {/* <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/images/logo.png"
            alt="Outdoor Reach Media logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-green-400">
             
          </span>
        </Link> */}


        <div className="hidden md:flex space-x-6 text-sm font-serif">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <a href="#gallery" className="hover:text-green-300 transition">Gallery</a>
          <Link to="/contact" className="hover:text-green-300 transition">Contact</Link>
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f1b14] border-t border-[#1a2a20] px-4 pb-4 text-sm space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-green-300">Home</Link>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="block hover:text-green-300">Gallery</a>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-green-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
