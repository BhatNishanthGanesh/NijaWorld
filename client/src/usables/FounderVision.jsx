import { motion } from "framer-motion";
import { Users, BarChart3, Search } from "lucide-react";

const FoundersVision = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      {/* First Row: Text Content & Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            A <span className="text-[#272757]">Founder-Centric</span> Approach for Real Impact
          </h2>
          <p className="text-lg text-gray-600">
            Every connection made on our platform is built on{" "}
            <motion.span
              className="text-[#272757] font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              genuine potential
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-[#272757] font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              mutual fit
            </motion.span>
            —not just networking luck.
          </p>
          <p className="text-lg text-gray-600">
            We’re building a future where{" "}
            <span className="text-[#272757] font-bold">exceptional founders</span> connect with{" "}
            <span className="text-[#272757] font-bold">visionary investors</span> through{" "}
            <span className="text-[#272757] font-bold">data-driven insights</span>.
          </p>
        </motion.div>

        {/* Right: Feature Cards Layout */}
        <div className="flex flex-col gap-6 w-full">
          {/* Top Feature Card */}
          <FeatureCard
            icon={<Users size={36} />}
            title="Curated Founder-Investor Matches"
            desc="We match founders with investors who align with their vision, beyond just industry interests."
          />

          {/* Bottom Two Cards (Side-by-Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<BarChart3 size={36} />}
              title="Data-Driven Insights"
              desc="We use AI-driven analytics to help investors discover high-potential startups early."
            />
            <FeatureCard
              icon={<Search size={36} />}
              title="Precision & Clarity"
              desc="No more guesswork—just clear signals that guide smart investment decisions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-100 border border-gray-300 text-gray-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
};

export default FoundersVision;
