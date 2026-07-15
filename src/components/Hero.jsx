import React, { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <header 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
      
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-white text-7xl font-black mb-6 drop-shadow-lg">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white text-3xl font-bold mb-4 drop-shadow-lg">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-gray-300 text-lg mb-8 drop-shadow-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="px-6 py-4 rounded w-full sm:w-96 text-black font-medium bg-white" />
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded transition">Get Started</button>
        </div>
      </div>
    </header>
  );
}