"use strict";

import React from "react"
import { X, ArrowUpRight, Send } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function TerminalCard() {
    return (
        <div className="font-mono p-4 flex justify-center items-center min-h-[500px] bg-[#bfbfbf]">
            <Card className="w-[400px] bg-[#1a1a1a] border-none text-[#cccccc] shadow-2xl rounded-3xl overflow-hidden relative">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between border-b border-[#333333] p-4 py-3 space-y-0">
                    <div className="text-lg tracking-widest text-[#eeeeee]">AI ASSISTANT</div>
                    <button className="text-[#666666] hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </CardHeader>

                {/* Content */}
                <CardContent className="p-6 space-y-6 text-sm">
                    {/* AI Message Bubble */}
                    <div className="bg-[#222222] border border-[#333333] rounded-xl p-4 text-[#cccccc] leading-relaxed">
                        I've filtered the investors, see which ones are more suitable for my project and select three who are currently actively investing
                    </div>

                    {/* User/Regular Text */}
                    <div className="space-y-4">
                        <p className="leading-relaxed">
                            Yes, of course! <br />
                            Your SaaS project is in the pre-seed stage, which means these 3 investors are suitable for you:
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Sarah Chen",
                                "Marcus Thompson",
                                "Emma Wilson"
                            ].map((name, i) => (
                                <li key={i} className="flex items-center gap-2 group cursor-pointer">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#666666] group-hover:bg-[#eebb55] transition-colors" />
                                    <span className="text-[#cccccc] group-hover:text-white transition-colors">{name}</span>
                                    <ArrowUpRight size={14} className="text-[#eebb55] opacity-80" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>

                {/* Footer / Input */}
                <CardFooter className="p-4 pt-0">
                    <div className="relative w-full">
                        <Input
                            placeholder="Ask anything"
                            className="bg-[#222222] border-none text-[#eeeeee] placeholder:text-[#555555] h-14 pl-4 pr-14 rounded-xl focus-visible:ring-1 focus-visible:ring-[#444444]"
                        />
                        <button className="absolute right-2 top-2 h-10 w-10 bg-[#eebb55] rounded-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#ffcc66] transition-colors">
                            <Send size={18} fill="currentColor" />
                        </button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
