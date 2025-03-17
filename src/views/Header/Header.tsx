import { useState } from "react";
import BeeLogo from "../../assets/bees.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const scrollToSection = (section: string) => {
    navigate("/", { state: { scrollTo: section } });
    setNav(false); // Close mobile menu on navigation
  };

  const [nav, setNav] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center bg-gradient-to-r from-gray-500 to-gray-700 text-blue-50 text-[16px] font-sans tracking-widest font-[300] h-[10vh]">
        <div className="flex space-x-40 mb-8 items-center">
          <button
            className="hover:overline hover:text-yellow-400 mt-9 animate-fade-up hover:cursor-crosshair"
            onClick={() => scrollToSection("section_1")}
          >
            Kofini Honey
          </button>
          <button
            className="hover:overline hover:text-yellow-400 mt-9 animate-fade-up hover:cursor-crosshair"
            onClick={() => scrollToSection("section_2")}
          >
            Ποιοί Είμαστε
          </button>
          <img src={BeeLogo} alt="" className="w-10 h-10 mt-7 object-contain" />
          <button
            className="hover:overline hover:text-yellow-400 mt-9 animate-fade-up hover:cursor-crosshair"
            onClick={() => scrollToSection("section_3")}
          >
            Προιόντα
          </button>
          <button
            className="hover:overline hover:text-yellow-400 mt-9 animate-fade-up hover:cursor-crosshair"
            onClick={() => scrollToSection("section_4")}
          >
            Πού θα μας βρείτε
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-700 text-blue-50">
        <img src={BeeLogo} alt="Bee Logo" className="w-10 h-10" />
        <button
          type="button"
          className="text-gray-50"
          onClick={() => setNav(!nav)}
        >
          {nav ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {nav && (
        <div className="md:hidden bg-gray-700 text-blue-50 flex flex-col items-center space-y-4 py-4">
          <button onClick={() => scrollToSection("section_1")}>
            Kofini Honey
          </button>
          <button onClick={() => scrollToSection("section_2")}>
            Ποιοί Είμαστε
          </button>
          <button onClick={() => scrollToSection("section_3")}>Προιόντα</button>
          <button onClick={() => scrollToSection("section_4")}>
            Πού θα μας βρείτε
          </button>
        </div>
      )}
    </div>
  );
}
