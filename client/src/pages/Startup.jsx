import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/usables/navbar";
import Footer from "@/usables/Footer";

const Startup = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#F9FAFB] to-[#EFF6FF] min-h-screen">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-[#272757] mb-6"
          >
            Elevate Your Startup's Investor Magnetism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Craft a compelling profile that showcases your company's unique
            problem-solving approach and potential for success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="darkRed">Get Started</Button>
          </motion.div>
        </section>

        {/* Where Innovation Meets Investment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[#272757] text-center mb-8"
            >
              Where Innovation Meets Investment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
            >
              A dynamic ecosystem connecting unlisted companies, venture
              capitalists, and angel investors to forge strategic partnerships,
              accelerate growth, and transform entrepreneurial potential into
              tangible success.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Accelerate Your Startup's Funding Journey
                </h3>
                <p className="text-gray-600">
                  2To10X: An intelligent investor matchmaking platform that
                  helps founders strategically connect with the right investors,
                  build meaningful relationships, and transform potential into
                  secured capital.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Funding Made Simple
                </h3>
                <p className="text-gray-600">
                  2To10X eliminates fundraising complexity by precisely matching
                  ambitious startups with targeted investors who are actively
                  seeking innovative companies in your industry.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investor Relations, Simplified */}
        <section className="py-20 bg-gradient-to-r from-[#272757] to-[#1E1E3F]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
            >
              Investor Relations, Simplified
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
            >
              Automatically keep your shareholders engaged with seamless,
              visually compelling updates that showcase your startup's progress
              through intuitive KPI tracking and monthly performance summaries.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Accelerate Investor Confidence
                </h3>
                <p className="text-gray-600">
                  Real-time check-ins transform investor relationships by
                  transparently showcasing your startup's momentum.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Your Network, Your Launchpad
                </h3>
                <p className="text-gray-600">
                  Transform your profile into a strategic hub that amplifies your
                  startup's potential.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Investor Network */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[#272757] text-center mb-8"
            >
              Unlock Your Global Investor Potential
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
            >
              Instantly connect with an elite network of venture capitalists,
              angel investors, and strategic innovation partners.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Expand Your Global Innovation Network
                </h3>
                <p className="text-gray-600">
                  Strategically connect with industry leaders, venture
                  capitalists, and potential partners across international
                  innovation ecosystems.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Amplify Your Startup's Visibility
                </h3>
                <p className="text-gray-600">
                  Your comprehensive company dashboard provides powerful,
                  intuitive tools designed to strategically activate and expand
                  your investor network.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Startup;