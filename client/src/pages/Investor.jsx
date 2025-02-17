import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/usables/navbar";
import Footer from "@/usables/Footer";

const Investor = () => {
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
            Connect with Tomorrow's Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Discover and engage with promising startups actively seeking strategic
            partnerships.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="darkRed">Explore Startups</Button>
          </motion.div>
        </section>

        {/* Streamlined Deal Flow Management */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[#272757] text-center mb-8"
            >
              Streamlined Deal Flow Management
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
            >
              Access a curated pipeline of innovative companies, each vetted to
              match your investment criteria.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Engage Directly with Founders
                </h3>
                <p className="text-gray-600">
                  Review detailed pitch materials and collaborate with fellow
                  investors to explore co-investment opportunities.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Stay Informed and Involved
                </h3>
                <p className="text-gray-600">
                  Track your portfolio companies' growth through standardized
                  progress reports and key performance metrics.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Active Value Creation */}
        <section className="py-20 bg-gradient-to-r from-[#272757] to-[#1E1E3F]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
            >
              Active Value Creation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
            >
              Go beyond capital investment. Our platform facilitates active
              involvement in your portfolio companies.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Strategic advisory sessions",
                "Mentor-matching programs",
                "Industry networking events",
                "Resource sharing capabilities",
                "Direct collaboration tools",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold text-[#272757] mb-4">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Build Stronger Investment Partnerships */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-[#272757] text-center mb-8"
            >
              Build Stronger Investment Partnerships
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
            >
              Connect with like-minded investors to share insights, form
              syndicates, and scale impact across portfolios.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Share Due Diligence Insights
                </h3>
                <p className="text-gray-600">
                  Collaborate with fellow investors to evaluate opportunities
                  thoroughly.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#F9FAFB] p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Form Investment Syndicates
                </h3>
                <p className="text-gray-600">
                  Leverage complementary strengths and scale impact across
                  portfolios.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Future of Startup Networking */}
        <section className="py-20 bg-gradient-to-r from-[#272757] to-[#1E1E3F]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
            >
              The Future of Startup Networking
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
            >
              We're building more than a platform---we're creating an ecosystem
              where founders and investors can collaborate seamlessly.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Smart Matchmaking
                </h3>
                <p className="text-gray-600">
                  Proprietary algorithms match startups with the right investors
                  based on sector, stage, and strategic fit.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#272757] mb-4">
                  Real-Time Traction Signals
                </h3>
                <p className="text-gray-600">
                  Identify promising opportunities early with data-driven
                  insights.
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

export default Investor;