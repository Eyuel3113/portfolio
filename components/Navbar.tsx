'use client' 
import { useState, useEffect } from "react";

const sections = ["home", "skills", "projects", "contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 10);

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  // Close mobile menu on navigation link click
  const onLinkClick = () => {
    setMobileMenuOpen(false);
  };

 return (
  <nav
    className={`fixed max-w-7xl mx-auto top-0 left-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? "bg-white shadow" : "bg-transparent"
    }`}
  >
    <div className="px-6 md:px-12 py-2 flex justify-between items-center xl:max-w-7xl xl:mx-auto">
      <h1 className="invisible md:visible font-bold text-lg cursor-pointer select-none">
        Eyuel Endale
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`hover:underline ${
                active === id ? "text-yellow-500 font-semibold" : "text-black"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
            mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        />
        <span
          className={`block h-1 w-full bg-black rounded transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
            mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </button>
    </div>

    {/* Mobile Menu */}
    <div
      className={`fixed top-[56px] left-0 w-full bg-white shadow-md md:hidden overflow-hidden transition-max-height duration-300 ${
        mobileMenuOpen ? "max-h-60" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col gap-6 p-6 text-center text-lg font-semibold">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={onLinkClick}
              className={`hover:underline ${
                active === id ? "text-yellow-500" : "text-black"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

}