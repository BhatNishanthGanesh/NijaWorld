import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowNavbar(true); // Show navbar when fully scrolled up
      } else {
        setShowNavbar(false); // Hide navbar on scroll down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e, item) => {
    e.preventDefault();
    if (item === "Contact") {
      scrollToContact();
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full bg-white text-black shadow-lg p-4 z-50 transition-all ${
        showNavbar ? "visible" : "invisible"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src="2to10X.png" height={80} width={80} alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Startup", "Investor", "Insights", "AboutUs", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-600 transition cursor-pointer"
              onClick={(e) => handleNavigation(e, item)}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Login & Sign Up */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline" onClick={() => navigate("/login")}>Log in</Button>
          <Button variant="primary" onClick={() => navigate("/signup")}>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-white p-4 shadow-md"
        >
          {["Startup", "Investor", "Insights", "AboutUs", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-blue-600 transition cursor-pointer"
              onClick={(e) => {
                setIsOpen(false);
                handleNavigation(e, item);
              }}
            >
              {item}
            </a>
          ))}
          <Button variant="outline" className="w-full" onClick={() => navigate("/login")}>Log in</Button>
          <Button variant="primary" className="w-full" onClick={() => navigate("/signup")}>Get Started</Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
