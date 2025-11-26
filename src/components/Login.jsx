import React, { useState } from "react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { currentUser, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);

    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (err) {
      setErrorMessage(err.message);
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async () => {
    setIsSigningIn(true);

    try {
      await doSignInWithGoogle();
    } catch (err) {
      setErrorMessage(err.message);
      setIsSigningIn(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  // Redirect after successful login
  if (currentUser) {
    console.log(currentUser)
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mb-">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 signup-btn">
            {isSigningIn ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <button
          onClick={onGoogleSignIn}
          className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg mb-3"
        >
          Sign In with Google
        </button>

        {errorMessage && (
          <p className="text-red-500 text-center mt-3">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
