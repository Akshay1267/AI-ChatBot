import React, { useState } from "react";

export default function Main() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendToChatGPT = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const aiMessage = { from: "ai", text: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errMessage = {
        from: "ai",
        text: "⚠️ Error communicating with AI",
      };
      setMessages((prev) => [...prev, errMessage]);
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex justify-center items-start mt-50 pt-10">
      <div className="max-w-lg w-full mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
        <h2 className="text-center text-2xl font-semibold mb-3 mt-2">
          Chat with AI 🤖
        </h2>

        <div className="h-117 w-100 overflow-y-auto p-4 border border-gray-300 rounded-lg mb-2 ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.from === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                  msg.from === "user" ? "bg-green-100" : "bg-gray-200"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}

          {loading && (
            <div className="italic text-gray-500">AI is typing...</div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          />

          <button
            onClick={sendToChatGPT}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 signup-btn"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
