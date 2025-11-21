import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white w-full py-1 fixed bottom-0 h-10">
      <div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
        {/* Left: Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/ChatBotImage.png"
            alt="AI Chat Bot Logo"
            className="h-8 w-8 object-contain"
          />
          &nbsp;
          <span className="font-bold text-lg">AI Chat Bot</span>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AI Chat Bot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
