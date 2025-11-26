import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/auth";
import "../CustomButton.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../contexts/authContext.jsx";

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const userLoggedIn = false; // Replace with: const { user, logout } = useAuth();
  const { currentUser } = useAuth();
  const userLoggedIn = !!currentUser;
  const userName = currentUser?.email || "User";

  // const userName = "John Doe"; // Example user name

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  // const handleLogout = () => {
  //   Add your logout logic here
  //   console.log("Logging out...");
  // };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-white shadow-2xl rounded-2xl backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 "
              style={{ textDecoration: "none" }}
            >
              <img
                src="/ChatBotImage.png"
                alt="ChatBot Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              &nbsp;
              <span>My AI ChatBot</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {userLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300 text-sm">
                    Welcome,{" "}
                    <span className="font-bold text-white">{userName}</span>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-400 text-white rounded-lg font-medium hover:bg-red-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg logout-btn"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleLogin}
                    className="px-5 py-2 border-2 border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white active:scale-95 transition-all duration-200 login-btn"
                  >
                    Login
                  </button>
                  &nbsp;&nbsp;
                  <button
                    onClick={handleSignup}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg signup-btn"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              {userLoggedIn ? (
                <div className="space-y-3">
                  <div className="px-4 py-2 text-gray-300 text-sm">
                    Welcome,{" "}
                    <span className="font-semibold text-white">{userName}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 logout-btn"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={handleLogin}
                    className="w-full px-5 py-2 border-2 border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={handleSignup}
                    className="w-full px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
