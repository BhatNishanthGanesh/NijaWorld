import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-8 shadow-2xl w-96 border-t-4 border-green-600 transform hover:scale-105 transition duration-300">
        {/* Logo and Sign Up Link */}
        <div className="flex justify-between items-center mb-6">
          <img src="2to10X.png" height={80} width={80} alt="Logo" className="h-12" />
          <a href="signup" className="text-sm text-gray-700 hover:text-green-600 font-semibold">
            Don't have an account? <span className="text-green-600">Sign Up</span>
          </a>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold mb-2 text-center text-blue-700 tracking-wide">Log In</h2>
        <p className="text-center text-gray-500 mb-6">Access your account to explore new opportunities.</p>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6 text-sm">© 2025 Nija World. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Login;
