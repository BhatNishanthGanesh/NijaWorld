import { Button } from "@/components/ui/button";
import Navbar from "@/usables/navbar";
import React, { useState, useEffect, useRef } from "react"; // Add useRef
import { motion } from "framer-motion";
import { SwipeCarousel } from "@/usables/carousel";
import { DrawCircleText } from "@/usables/DrawCircle";
import NeuButton from "@/usables/buttons";
import FoundersFirst from "@/usables/Founders";
import FoundersVision from "@/usables/FounderVision";
import Footer from "@/usables/Footer";

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contactRef = useRef(null); // Create a ref for the footer section

  // Function to scroll to the contact section
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Set page load complete after 1 second (you can adjust this delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Pass the scrollToContact function to Navbar */}
      <Navbar scrollToContact={scrollToContact} />

      <section className="mt-20 pt-10">
        <div className="grid p-5 md:p-10 grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
            className="space-y-4 md:order-1 order-2"
          >
            <h1 className="text-2xl md:text-5xl  font-extrabold text-[#272757]">
              Transforming Startup Success Through Data-Driven Connections...
            </h1>
            <p className="text-lg  text-black ">
              The path to startup success shouldn’t depend on who you know or
              chance encounters. While capital and expertise are crucial
              ingredients for growth, the traditional networking model leaves
              too much to serendipity—limiting opportunities for exceptional
              founders outside established circles.
            </p>
            <NeuButton text="Get Started" link="/signup" />
          </motion.div>

          {/* Carousel Section */}
          <div className="relative md:order-2 order-1">
            {isLoaded && <SwipeCarousel />}
          </div>
        </div>
      </section>

      <section className="bg-[#272757] pt-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-white text-center"
        >
          Beyond the Traditional Network
        </motion.h1>
        <div className="grid p-10 grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative ">
            {isLoaded && (
              <img
                src="StartUp.png"
                className="object-cover w-[80%] h-[80%] mx-auto"
                alt="StartUp"
              />
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: -75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="md:text-2xl  text-white mb-10 opacity-90">
              Today’s startup ecosystem often resembles an exclusive club, where
              access to capital and resources depends heavily on pre-existing
              connections and chance meetings. We’re dismantling these barriers
              by creating a merit-based environment where potential and
              performance drive opportunities.
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="bg-white pt-5 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl  md:text-5xl mt-4 font-extrabold text-[#272757] text-center"
        >
          Powered by Real-Time Intelligence
        </motion.h1>

        <div className="grid pt-10 grid-cols-1 md:grid-cols-2  items-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="  font-extrabold  text-[#272757] text-center"
          >
            <DrawCircleText />
            <motion.ul
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.3 }}
              viewport={{ once: false }}
              className="text-sm md:text-lg md:order-2 order-1 text-gray-700 space-y-4 text-left mx-auto pl-10 pt-2"
            >
              {[
                "✅ Accurate matching based on current performance metrics.",
                "⚡ Dynamic recommendations that evolve with company growth.",
                "📊 Data-driven insights that highlight promising opportunities.",
                "🚀 Clear visibility into startup trajectory and potential.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="flex justify-start pl-10 pt-4 gap-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <NeuButton text="Get Started" link="/Signup" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <NeuButton text="Learn More" link="/learn-more" />
              </motion.div>
            </motion.div>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className="relative"
          >
            {isLoaded && (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false }}
                src="StartUp2.png"
                className="object-cover md:order-1 order-2 mt-8 w-[90%] h-[90%] mx-auto"
                alt="StartUp"
              />
            )}
          </motion.div>
        </div>
      </section>

      <section className=" bg-[#272757]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl  md:text-5xl mt-4 pt-10 font-extrabold text-white text-center"
        >
          Creating Meaningful Connections
        </motion.h1>
        <FoundersFirst />
      </section>

      <section className="bg-white">
        <FoundersVision />
      </section>

      {/* Add a ref to the footer section */}
      <section ref={contactRef}>
        <Footer />
      </section>
    </>
  );
};

export default Landing;