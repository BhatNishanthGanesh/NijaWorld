import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (e, item) => {
    if (item === "Contact") {
      e.preventDefault(); // Prevent default anchor behavior
      scrollToContact(); // Scroll to the Contact section
    } else if (item === "Startup") {
      navigate("/startup"); // Navigate to the Startup page
    }
  };

  return (
    <nav className="bg-[#272757] text-white p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <a href="/">
          <img src="2to10X.png" height={80} width={80} alt="Logo" />
          </a>
        </motion.div>

        {/* Centered Links (Desktop) */}
        <div className="hidden md:flex md:pl-25 space-x-8 flex-grow justify-center">
          {["Startup", "Investor", "Insights", "AboutUs", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-400 transition cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              onClick={(e) => handleNavigation(e, item)}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Login and Get Started (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <motion.a href="#login" className="transition" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button variant="green">Log in</Button>
          </motion.a>
          <motion.a href="#get-started" className="transition" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button variant="darkRed">Get Started</Button>
          </motion.a>
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
          className="md:hidden flex flex-col items-center mt-4 space-y-4"
        >
          {["Startup", "Investor", "Insights", "AboutUs", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-gray-400 transition cursor-pointer"
              onClick={(e) => {
                setIsOpen(false); // Close the mobile menu
                handleNavigation(e, item);
              }}
            >
              {item}
            </a>
          ))}
          {/* Mobile Login and Get Started Buttons */}
          <a href="#login" className="w-full flex justify-center">
            <Button variant="green">Log in</Button>
          </a>
          <a href="#get-started" className="w-full flex justify-center">
            <Button variant="darkRed">Get Started</Button>
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
