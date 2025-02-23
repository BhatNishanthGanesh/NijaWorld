import { useState } from "react";
import { motion } from "framer-motion";

function SignUp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("startup");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setShowOtpInput(true);
    alert(`OTP Sent to your email! (Role: ${role})`);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setShowPasswordInput(true);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Account created successfully as ${role}!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-8 shadow-2xl w-96 border-t-4 border-green-600 transform hover:scale-105 transition duration-300">
        {/* Logo & Login Link */}
        <div className="flex justify-between items-center mb-6">
          <img src="2to10X.png" height={80} width={80} alt="Logo" className="h-12" />
          <a href="/login" className="text-sm text-gray-700 hover:text-green-600 font-semibold">
            Already have an account? <span className="text-green-600">Log In</span>
          </a>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold mb-2 text-center text-blue-700 tracking-wide">Sign Up</h2>
        <p className="text-center text-gray-500 mb-6">Enter your official Email ID.</p>

        {/* Role Selection */}
        <div className="relative bg-gray-200 flex items-center justify-between p-1 mb-6 shadow-inner">
          {["startup", "investor", "incubator"].map((option) => (
            <div key={option} className="relative flex-1 text-center">
              <button
                type="button"
                onClick={() => setRole(option)}
                className={`relative z-10 w-full py-2 text-sm font-semibold transition-all duration-300 ${
                  role === option ? "text-green-600" : "text-gray-600"
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
              {role === option && (
                <motion.div
                  layoutId="role-pill"
                  className="absolute inset-0 bg-green-100"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Email Input */}
        {!showOtpInput && !showPasswordInput && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Send OTP
            </button>
          </form>
        )}

        {/* OTP Input */}
        {showOtpInput && !showPasswordInput && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Verify OTP
            </button>
          </form>
        )}

        {/* Password Input */}
        {showPasswordInput && (
          <form onSubmit={handleSignUpSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 hover:bg-green-700 transition duration-300 transform hover:scale-105"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6 text-sm">© 2025 Nija World. All rights reserved.</p>
      </div>
    </div>
  );
}

export default SignUp;
