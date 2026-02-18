"use strict";

import React from "react"
import { X, ArrowUpRight, Send, MessageSquare } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function BrutalistCard() {
    return (
        <div className="font-sans p-4 flex justify-center items-center min-h-[500px] bg-[#fff5eb]">
            <Card className="w-[400px] bg-[#a388ee] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none text-black overflow-hidden transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b-4 border-black bg-white space-y-0">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#ff6b6b] border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <MessageSquare size={18} className="text-white fill-white" />
                        </div>
                        <span className="font-black text-xl uppercase tracking-tighter">AI_BUDDY</span>
                    </div>
                    <button className="bg-black text-white hover:bg-[#ff6b6b] hover:text-black transition-colors p-1 border-2 border-transparent hover:border-black">
                        <X size={20} strokeWidth={3} />
                    </button>
                </CardHeader>

                {/* Content */}
                <CardContent className="p-6 space-y-6 text-base font-bold">
                    {/* AI Message Bubble */}
                    <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                        <div className="absolute -top-3 -left-3 bg-[#4ade80] border-2 border-black px-2 text-xs py-0.5 transform -rotate-2">ASSISTANT</div>
                        I've filtered the investors, see which ones are more suitable.
                    </div>

                    {/* User/Regular Text */}
                    <div className="space-y-4 text-right">
                        <div className="inline-block text-left bg-[#fbbf24] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <p className="leading-snug">
                                Yes! Your SaaS project is in the pre-seed stage. Check these 3 investors:
                            </p>
                        </div>

                        <div className="space-y-3 pt-2 text-left">
                            {[
                                { name: "Sarah Chen", color: "bg-[#ff9f1c]" },
                                { name: "Marcus Thompson", color: "bg-[#2ec4b6]" },
                                { name: "Emma Wilson", color: "bg-[#ff6b6b]" }
                            ].map((person, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white border-4 border-black hover:bg-black hover:text-white transition-all cursor-pointer group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-4 h-4 rounded-none border-2 border-black ${person.color} group-hover:border-white`}></div>
                                        <span className="font-black truncate">{person.name}</span>
                                    </div>
                                    <ArrowUpRight size={20} strokeWidth={3} />
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>

                {/* Footer / Input */}
                <CardFooter className="p-4 border-t-4 border-black bg-white">
                    <div className="relative w-full flex gap-2">
                        <Input
                            placeholder="SAY SOMETHING..."
                            className="bg-white border-4 border-black text-black placeholder:text-black/40 h-12 rounded-none focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold uppercase"
                        />
                        <button className="h-12 w-12 bg-[#4ade80] border-4 border-black flex items-center justify-center text-black hover:bg-[#22c55e] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                            <Send size={20} strokeWidth={3} />
                        </button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
