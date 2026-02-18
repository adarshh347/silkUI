

export function KeyStatsCard() {
    return (
        <div className="p-8 pb-10 rounded-[2.5rem] bg-zinc-100/80 backdrop-blur-sm border border-white/20 shadow-xl shadow-zinc-200/50 w-full max-w-2xl mx-auto space-y-8 font-mono">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-dot tracking-[0.15em] text-zinc-800 uppercase">
                    Key Stats
                </h2>
                <div className="flex bg-zinc-200/50 p-1 rounded-xl">
                    <button className="px-4 py-1.5 text-sm font-medium bg-white rounded-lg shadow-sm text-zinc-900 transition-all hover:bg-white/80">
                        Quarterly
                    </button>
                    <button className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
                        Annually
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="relative h-64 w-full">
                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-zinc-400 font-medium">
                    <span>48B</span>
                    <span>36B</span>
                    <span>24B</span>
                    <span>12B</span>
                    <span>0.0</span>
                </div>

                {/* Chart Area */}
                <div className="ml-12 h-full flex items-end justify-between pb-8 relative pt-4">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 pb-8 flex flex-col justify-between pointer-events-none">
                        <div className="border-t border-dashed border-zinc-200 w-full h-0"></div>
                        <div className="border-t border-dashed border-zinc-200 w-full h-0"></div>
                        <div className="border-t border-dashed border-zinc-200 w-full h-0"></div>
                        <div className="border-t border-dashed border-zinc-200 w-full h-0"></div>
                        <div className="border-b border-zinc-200 w-full h-0"></div>
                    </div>

                    {/* Bars & Points */}
                    {[
                        { label: "Q3'24", rev: 45, net: 20, margin: 85 },
                        { label: "Q4'24", rev: 65, net: 30, margin: 78 },
                        { label: "Q1'25", rev: 75, net: 35, margin: 78 },
                        { label: "Q2'25", rev: 78, net: 38, margin: 82 },
                        { label: "Q3'25", rev: 90, net: 40, margin: 30 },
                    ].map((item, i) => (
                        <div key={i} className="relative group w-full flex flex-col justify-end h-full items-center">
                            {/* Bars Container */}
                            <div className="relative w-12 flex items-end gap-1 h-full">
                                {/* Revenue Bar (Black) */}
                                <div
                                    className="w-8 bg-zinc-900 rounded-t-sm transition-all group-hover:bg-zinc-800"
                                    style={{ height: `${item.rev}%` }}
                                />

                                {/* Net Income Bar (Hashed/Dashed) */}
                                <div
                                    className="absolute left-6 bottom-0 w-8 h-full z-[-1]"
                                    style={{ height: `${item.net}%` }}
                                >
                                    <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1)_100%)] bg-[length:4px_4px] rounded-t-sm opacity-60"></div>
                                </div>
                            </div>

                            {/* Line Point (Orange) - Simplified visualization for the line */}
                            <div
                                className="absolute w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-zinc-100 z-10"
                                style={{
                                    bottom: `${item.margin}%`,
                                    left: '50%',
                                    transform: 'translateX(-50%)'
                                }}
                            />

                            {/* Connector Lines (Rough approx with SVG usually better, but absolute divs ok for simple) */}
                            {/* Omitting complex line connector without SVG library for now, points represent the trend */}

                            {/* X-Axis Label */}
                            <div className="absolute -bottom-8 text-xs text-zinc-500 font-medium">
                                {item.label}
                            </div>
                        </div>
                    ))}

                    {/* SVG Overlay for the Orange Line */}
                    <svg className="absolute inset-0 h-[calc(100%-2rem)] w-full pointer-events-none overflow-visible" style={{ zIndex: 5 }}>
                        <polyline
                            fill="none"
                            stroke="#F97316"
                            strokeWidth="2"
                            points="
                45,35 
                135,50 
                225,50 
                315,40 
                405,160
              "
                        // Note: Points are hardcoded based on the array percentages above roughly. 
                        // Usually calculated dynamically but manual for this static component is fine.
                        />
                    </svg>
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-900" />
                    <span className="text-sm font-medium text-zinc-700">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_25%,rgba(0,0,0,0.2)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.2)_75%,rgba(0,0,0,0.2)_100%)] bg-[length:4px_4px]" />
                    <span className="text-sm font-medium text-zinc-700">Net income</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-sm font-medium text-zinc-700">Net margin %</span>
                </div>
            </div>
        </div>
    );
}
