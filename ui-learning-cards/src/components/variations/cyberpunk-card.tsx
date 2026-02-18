"use strict";

import React from "react"
import { X, ArrowUpRight, Send, Cpu, Terminal } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function CyberpunkCard() {
    return (
        <div className="font-mono p-4 flex justify-center items-center min-h-[500px] bg-slate-900 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute inset-0 grid grid-cols-[40px_40px] opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <Card className="relative w-[400px] bg-black border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] rounded-none text-yellow-400 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-transparent before:via-yellow-400 before:to-transparent before:animate-pulse">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b-2 border-yellow-400/50 bg-black space-y-0">
                    <div className="flex items-center gap-2">
                        <Cpu size={18} className="animate-pulse" />
                        <span className="uppercase tracking-widest font-black text-lg glitch-effect">NET_RUNNER_V2</span>
                    </div>
                    <button className="text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors p-1 border border-yellow-400">
                        <X size={18} />
                    </button>
                </CardHeader>

                {/* Content */}
                <CardContent className="p-0 text-sm bg-black relative">
                    <div className="absolute top-0 right-0 p-1 text-[10px] text-yellow-400/50 border-b border-l border-yellow-400/30">SYS_READY</div>

                    <div className="p-6 space-y-6">
                        {/* AI Message Bubble */}
                        <div className="relative border border-cyan-400 p-4 text-cyan-400 leading-relaxed bg-cyan-950/20 clip-path-polygon">
                            <span className="absolute -top-3 left-4 bg-black px-2 text-xs text-cyan-400 font-bold border border-cyan-400">AI_CORE</span>
                            I've filtered the investors. <span className="text-white">Scanning database for matches...</span> 3 entities selected.
                        </div>

                        {/* User/Regular Text */}
                        <div className="space-y-4 text-right">
                            <div className="inline-block text-left bg-yellow-400 text-black p-4 font-bold border-l-4 border-white clip-path-polygon-right">
                                <p className="leading-relaxed">
                                    ACKNOWLEDGED. <br />
                                    Initiate protocol: <span className="bg-black text-yellow-400 px-1">PRE-SEED</span>. Display targets.
                                </p>
                            </div>

                            <div className="space-y-2 pt-2 text-left">
                                {[
                                    { name: "SARAH_CHEN", id: "0x1A" },
                                    { name: "MARCUS_T", id: "0x2B" },
                                    { name: "EMMA_WILSON", id: "0x3C" }
                                ].map((target, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 border border-pink-500 hover:bg-pink-500/10 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-pink-500" />
                                            <div>
                                                <span className="block font-bold text-pink-500 group-hover:text-pink-400 transition-colors tracking-widest">{target.name}</span>
                                                <span className="text-[10px] text-gray-500">ID: {target.id}</span>
                                            </div>
                                        </div>
                                        <ArrowUpRight size={16} className="text-pink-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>

                {/* Footer / Input */}
                <CardFooter className="p-4 border-t-2 border-yellow-400/50 bg-black">
                    <div className="relative w-full flex items-center gap-0">
                        <span className="text-yellow-400 mr-2 animate-pulse">{'>'}</span>
                        <Input
                            placeholder="ENTER_COMMAND..."
                            className="bg-transparent border-none text-yellow-400 placeholder:text-yellow-400/30 h-10 px-0 rounded-none focus-visible:ring-0 focus-visible:bg-yellow-400/5 font-bold tracking-wider"
                        />
                        <button className="h-10 px-4 bg-yellow-400 text-black font-black hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-widest">
                            SEND
                        </button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
