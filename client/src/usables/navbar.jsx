    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import { Menu, X } from "lucide-react";
    import { Button } from "@/components/ui/button";

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#272757] text-white p-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
            >
            <img src="2to10X.png" height={80} width={80} alt="Logo"/>
            </motion.div>

            {/* Centered Links (Desktop) */}
            <div className="hidden md:flex md:pl-25 space-x-8 flex-grow justify-center">
            {["StartUp", "Investor", "Insights", "AboutUs", "Contact"].map((item, index) => (
                <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-400 transition"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                {item}
                </motion.a>
            ))}
            </div>

            {/* Login and Get Started (Desktop) */}
            <div className="hidden md:flex space-x-4">
            <motion.a 
                href="#login" 
                className="transition"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Button variant="green">
                Log in
                </Button>
            </motion.a>
            <motion.a 
                href="#get-started" 
                className="transition"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Button variant="darkRed">
                Get Started
                </Button>
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
            {["StartUp", "Investor", "Insights", "AboutUs", "Contact"].map((item, index) => (
                <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-gray-400 transition"
                onClick={() => setIsOpen(false)}
                >
                {item}
                </a>
            ))}
            {/* Mobile Login and Get Started Buttons */}
            <a href="#login" className="w-full flex justify-center">
                <Button variant="green">
                Log in
                </Button>
            </a>
            <a href="#get-started" className="w-full flex justify-center">
                <Button variant="darkRed">
                Get Started
                </Button>
            </a>
            </motion.div>
        )}
        </nav>
    );
    };

    export default Navbar;
