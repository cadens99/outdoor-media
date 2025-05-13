import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClass = `hover:text-green-300 transition`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-[#0f1b14]/90 shadow-md backdrop-blur border-b border-[#1a2a20]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center animate-fade-in">
        {/* Logo / Brand */}
        <Link to="/" className="text-lg font-bold font-serif tracking-wide hover:text-green-300 transition">
          Outdoor Reach
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-serif">
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/#gallery" className={navLinkClass}>Gallery</Link>
          <Link to="/contact" className={navLinkClass}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0f1b14] border-t border-[#1a2a20] px-4 pb-4 text-sm font-serif space-y-3">
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/#gallery" className={navLinkClass}>Gallery</Link>
          <Link to="/contact" className={navLinkClass}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
