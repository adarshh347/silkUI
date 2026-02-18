"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function HeatmapCard() {
    const [isExtended, setIsExtended] = useState(false);
    const [offset, setOffset] = useState(0);

    // Animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prev) => (prev + 0.1) % 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const timeLabels = isExtended
        ? ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"]
        : ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

    const yLabels = ["80%", "60%", "40%", "20%", "0%"];

    const rows = 5;
    const standardCols = 13;
    const extendedCols = 20; // More columns when extended
    const currentCols = isExtended ? extendedCols : standardCols;

    // Helper to get dynamic intensity
    const getIntensity = (r: number, c: number) => {
        // Combine row, col and animated offset for noise
        const x = c * 0.5 + offset;
        const y = r * 0.5 + offset * 0.5;

        // Simple Perlin-like noise simulation using sine waves
        const val = (Math.sin(x) * Math.cos(y) + 1) / 2;

        // Add some deterministic high-frequency noise to simulate flicker
        const flicker = (Math.sin(r * 11 + c * 7 + offset * 20) + 1) * 0.05;
        const totalVal = val + flicker;

        if (totalVal > 0.8) return "high";    // Orange
        if (totalVal > 0.55) return "medium"; // Black
        if (totalVal > 0.3) return "low";     // Grey
        return "empty";                       // Light grey
    };

    return (
        <div className={cn(
            "p-8 pb-10 rounded-[2.5rem] bg-zinc-100/80 backdrop-blur-sm border border-white/20 shadow-xl shadow-zinc-200/50 w-full mx-auto space-y-8 font-mono transition-all duration-500 ease-in-out",
            isExtended ? "max-w-4xl" : "max-w-2xl"
        )}>
            {/* Header / Toggle */}
            <div className="flex justify-center items-center gap-4">
                {/* Toggle Button for Extension */}
                <button
                    onClick={() => setIsExtended(!isExtended)}
                    className="p-2 rounded-xl bg-zinc-200/50 hover:bg-zinc-300/50 transition-colors text-zinc-600"
                    title={isExtended ? "Collapse view" : "Extend view"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-transform duration-300", isExtended ? "rotate-180" : "")}>
                        <path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" />
                    </svg>
                </button>

                <div className="flex bg-zinc-200/50 p-1.5 rounded-2xl w-full max-w-lg justify-between overflow-x-auto">
                    {["1d", "1w", "1m", "6m", "1y", "5y", "max"].map((period) => (
                        <button
                            key={period}
                            className={cn(
                                "px-4 py-2 text-sm font-medium rounded-xl transition-all whitespace-nowrap",
                                period === "1d"
                                    ? "bg-white text-zinc-900 shadow-sm"
                                    : "text-zinc-500 hover:text-zinc-900 hover:bg-white/50"
                            )}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            {/* Heatmap Area */}
            <div className="flex items-start gap-4">
                {/* Y-Axis Labels */}
                <div className="flex flex-col justify-between h-64 py-1 text-xs text-zinc-500 font-medium shrink-0">
                    {yLabels.map((label) => (
                        <span key={label}>{label}</span>
                    ))}
                </div>

                {/* Grid */}
                <div className="flex-1 space-y-2 overflow-hidden">
                    <div className="grid grid-rows-5 gap-2 h-64 transition-all duration-500">
                        {Array.from({ length: rows }).map((_, r) => (
                            <div
                                key={r}
                                className="grid gap-2 transition-all duration-500"
                                style={{
                                    gridTemplateColumns: `repeat(${currentCols}, minmax(0, 1fr))`
                                }}
                            >
                                {Array.from({ length: currentCols }).map((_, c) => {
                                    const intensity = getIntensity(r, c);
                                    let colorClass = "bg-zinc-200"; // empty
                                    if (intensity === "high") colorClass = "bg-orange-500";
                                    if (intensity === "medium") colorClass = "bg-zinc-900";
                                    if (intensity === "low") colorClass = "bg-zinc-400";

                                    return (
                                        <div
                                            key={`${r}-${c}`}
                                            className={cn(
                                                "w-full h-full rounded-md transition-colors duration-300 ease-in-out cursor-pointer hover:opacity-80 hover:scale-105 transform",
                                                colorClass
                                            )}
                                            title={`Value: ${intensity}`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* X-Axis Labels */}
                    <div className="flex justify-between px-2 text-xs text-zinc-500 font-medium pt-2 w-full">
                        {timeLabels.map((label, i) => (
                            <span key={i}>{label}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
