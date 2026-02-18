"use strict";

import React from "react"
import { X, ArrowUpRight, Send, Sparkles } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function GlassCard() {
    return (
        <div className="font-sans p-4 flex justify-center items-center min-h-[500px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                <Card className="relative w-[400px] bg-white/10 backdrop-blur-xl border-white/20 text-white shadow-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
                    {/* Header */}
                    <CardHeader className="flex flex-row items-center justify-between p-5 border-b border-white/10 space-y-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md shadow-inner border border-white/20">
                                <Sparkles size={18} className="text-pink-200" />
                            </div>
                            <span className="font-medium tracking-wide text-white/90">Aura AI</span>
                        </div>
                        <button className="text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
                            <X size={20} />
                        </button>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="p-6 space-y-6 text-sm">
                        {/* AI Message Bubble */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl rounded-tl-none p-4 text-white/90 leading-relaxed shadow-lg">
                            I've filtered the investors, see which ones are more suitable for my project.
                        </div>

                        {/* User/Regular Text */}
                        <div className="space-y-4 pl-8">
                            <div className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 backdrop-blur-md border border-white/20 rounded-2xl rounded-tr-none p-4 text-white shadow-lg">
                                <p className="leading-relaxed">
                                    Yes, of course! Your SaaS project is in the pre-seed stage, which means these 3 investors are suitable for you:
                                </p>
                            </div>

                            <div className="space-y-3 pt-2">
                                {[
                                    "Sarah Chen",
                                    "Marcus Thompson",
                                    "Emma Wilson"
                                ].map((name, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all cursor-pointer group backdrop-blur-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-pink-400 group-hover:shadow-[0_0_8px_rgba(244,114,182,0.8)] transition-all"></div>
                                            <span className="font-medium text-white/80 group-hover:text-white transition-colors">{name}</span>
                                        </div>
                                        <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>

                    {/* Footer / Input */}
                    <CardFooter className="p-5 pt-0">
                        <div className="relative w-full">
                            <Input
                                placeholder="Ask anything..."
                                className="bg-black/20 border-white/10 text-white placeholder:text-white/40 h-12 pl-4 pr-12 rounded-xl focus-visible:ring-1 focus-visible:ring-white/30 focus-visible:bg-black/30 transition-all backdrop-blur-md"
                            />
                            <button className="absolute right-2 top-2 h-8 w-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white border border-white/10 transition-colors backdrop-blur-sm">
                                <Send size={14} fill="currentColor" />
                            </button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
