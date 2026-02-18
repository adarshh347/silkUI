"use client";

import React from "react";

export function AtmosphericCard() {
  return (
    <div
      className="font-sans flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/backgrounds/clouds-blue-pixelate.jpg')" }}
    >
      {/* Card wrapper */}
      <div className="relative w-[520px] h-[360px]">
        {/* Atmospheric blur blobs — dark smudges that bleed through the glass */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Central dark mass */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[280px] h-[220px] bg-black/60 rounded-full blur-[60px]" />
          {/* Vertical streak lines — the "comb" texture */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[160px]">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-[2px] bg-gradient-to-b from-black/80 via-black/30 to-transparent"
                style={{ left: `${(i / 24) * 100}%` }}
              />
            ))}
          </div>
          {/* Bottom streak lines */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px]">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 h-full w-[2px] bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                style={{ left: `${(i / 24) * 100}%` }}
              />
            ))}
          </div>
          {/* Side smudge — left */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-[180px] h-[140px] bg-black/30 rounded-full blur-[50px]" />
          {/* Side smudge — right */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-[180px] h-[140px] bg-black/30 rounded-full blur-[50px]" />
        </div>

        {/* Glass card */}
        <div className="relative z-10 w-full h-full bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center px-12 font-[family-name:var(--font-dot-gothic)]">
          {/* Heading */}
          <h1 className="text-[28px] font-bold tracking-[0.15em] text-zinc-900 uppercase mb-3">
            Join the Waitlist
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-zinc-600 mb-8 text-center">
            Sign up for the waitlist and be first to try our AI travel planner
          </p>

          {/* Email input + button */}
          <div className="flex items-center gap-0 mb-6 w-full max-w-[340px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-11 px-4 text-sm bg-white/70 border border-zinc-300/60 rounded-l-lg placeholder:text-zinc-400 text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 backdrop-blur-sm"
            />
            <button className="h-11 px-5 text-sm font-medium bg-white border border-zinc-300/60 border-l-0 rounded-r-lg text-zinc-800 hover:bg-zinc-100 transition-colors">
              Join
            </button>
          </div>

          {/* Privacy note */}
          <p className="text-xs text-zinc-500">
            By joining the waitlist, you agree to our{" "}
            <a href="#" className="underline underline-offset-2 hover:text-zinc-700 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
