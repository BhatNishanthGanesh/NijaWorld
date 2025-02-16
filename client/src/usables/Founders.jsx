import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, LineChart, Clock, Link } from "lucide-react";

const insights = [
  { icon: Lightbulb, title: "Founder-Investor Synergy", subtitle: "Understand what drives long-term relationships that yield success." },
  { icon: LineChart, title: "Growth Indicators", subtitle: "Identify key metrics that signal startup potential and scalability." },
  { icon: Clock, title: "Fundraising Timing", subtitle: "Pinpoint the critical stages to seek investment for maximum impact." },
  { icon: Link, title: "Strategic Alignment", subtitle: "Ensure founders and investors share a common vision and goals." },
];

const FoundersFirst = () => {
  return (
    <section className="bg-[#272757] text-white py-16 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-1xl md:text-2xl font-extrabold text-start pl-10 mb-10"
      >
        By Putting Founders First, We Gain Deep Insights
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {insights.map((item, index) => (
          <Card key={index} title={item.title} subtitle={item.subtitle} Icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full p-6 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-[#272757] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-3xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default FoundersFirst;