"use client";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    alert("Thank you for subscribing! You'll receive updates from norouzi@ecospatialtech.com.");
    setEmail("");
  };
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">Eco Rising Solutions</h1>
      <p className="text-lg mb-8">Geospatial, Environmental, and Climate Intelligence Solutions</p>
      <input
        className="border border-gray-300 p-2 rounded w-1/2"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>
    </div>
  );
}
