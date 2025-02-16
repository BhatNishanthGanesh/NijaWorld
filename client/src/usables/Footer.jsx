import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [message, setMessage] = useState('');
  const [acceptBonus, setAcceptBonus] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.footer 
      className="bg-[#272757] text-white p-8 md:p-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Send className="w-8 h-8 text-blue-400" /> Contact us
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <form className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" /> First name
                  </label>
                  <input type="text" placeholder="Enter your first name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" /> Last name
                  </label>
                  <input type="text" placeholder="Enter your last name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </label>
                  <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone number
                  </label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Choose a topic
                </label>
                <select className="w-full p-2 border bg-[#272757] rounded-lg focus:ring-2 focus:ring-blue-500" value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
                  <option>Select one...</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea placeholder="Type your message here..." className="w-full p-2 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              <label className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4" />
                <input type="checkbox" checked={acceptBonus} onChange={(e) => setAcceptBonus(e.target.checked)} className="rounded text-blue-500" />
                <span>I accept the bonus</span>
              </label>
          <Button variant="darkRed">Submit</Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariants}>
            <div className="md:flex md:justify-between">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Email
                </h3>
                <motion.a href="mailto:contact@example.com" className="text-gray-400 transition-colors" whileHover={{ scale: 1.02 }}>
                  contact@example.com
                </motion.a>
              </div>
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Office
                </h3>
                <p>123 Sample Street, Sydney NSW 2000 AU</p>
                <motion.a href="#" className="text-gray-400 transition-colors" whileHover={{ scale: 1.02 }}>
                  Get Directions
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Phone className="w-5 h-5" /> Phone
              </h3>
              <motion.a href="tel:5950000001" className="text-gray-400 transition-colors" whileHover={{ scale: 1.02 }}>
                (595) 000-0001
              </motion.a>
            </div>
          <img src="/2to10X.png" alt="Company Logo" className=" h-24" />
          </motion.div>
        </div>

        <motion.div className="mt-8 pt-8 border-t border-gray-200 text-center" variants={itemVariants}>
          <p className="text-sm text-white mt-4">© 2025 Your Company. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;