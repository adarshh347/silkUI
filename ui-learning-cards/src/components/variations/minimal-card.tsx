"use strict";

import React from "react"
import { X, ArrowUpRight, Send, Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function MinimalCard() {
    return (
        <div className="font-sans p-4 flex justify-center items-center min-h-[500px] bg-[#f4f4f5]">
            <Card className="w-[400px] bg-white border border-gray-100 text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between p-5 pb-2 space-y-0">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M16.5 7.5h-9v9h9v-9z" opacity="0.3" />
                                <path d="M9.75 3C8.507 3 7.5 4.007 7.5 5.25v.75H5.25C4.007 6 3 7.007 3 8.25v10.5C3 19.993 4.007 21 5.25 21h10.5c1.243 0 2.25-1.007 2.25-2.25v-.75h2.25c1.243 0 2.25-1.007 2.25-2.25V5.25C22.5 4.007 21.493 3 20.25 3H9.75zM18 16.5h-2.25v2.25c0 .414-.336.75-.75.75H5.25a.75.75 0 01-.75-.75V8.25c0-.414.336-.75.75-.75h2.25V5.25c0-.414.336-.75.75-.75h10.5c.414 0 .75.336.75.75v10.5c0 .414-.336.75-.75.75z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Assistant</h3>
                            <p className="text-xs text-gray-500">Online</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-900 transition-colors p-1 hover:bg-gray-50 rounded-md">
                        <X size={18} />
                    </button>
                </CardHeader>

                {/* Content */}
                <CardContent className="p-5 space-y-6 text-[15px]">
                    {/* AI Message Bubble */}
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center mt-1">
                            <span className="text-xs font-medium text-blue-600">AI</span>
                        </div>
                        <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 text-gray-700 leading-relaxed shadow-sm">
                            I've filtered the investors, see which ones are more suitable for my project.
                        </div>
                    </div>

                    {/* User/Regular Text */}
                    <div className="space-y-4 pl-11">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 shadow-md shadow-blue-200">
                            <p className="leading-relaxed">
                                Yes, of course! Your SaaS project is in the pre-seed stage, which means these 3 investors are suitable for you:
                            </p>
                        </div>

                        <div className="space-y-2 pt-2">
                            {[
                                { name: "Sarah Chen", role: "Angel Investor" },
                                { name: "Marcus Thompson", role: "Seed Fund" },
                                { name: "Emma Wilson", role: "Venture Capital" }
                            ].map((person, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                            {person.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm group-hover:text-blue-700">{person.name}</p>
                                            <p className="text-xs text-gray-500">{person.role}</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>

                {/* Footer / Input */}
                <CardFooter className="p-5 pt-2">
                    <div className="relative w-full flex items-center gap-2">
                        <Input
                            placeholder="Type your message..."
                            className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 pl-4 pr-12 rounded-full focus-visible:ring-2 focus-visible:ring-blue-100 focus-visible:border-blue-400 transition-all shadow-sm"
                        />
                        <button className="absolute right-2 top-2 h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
                            <Send size={14} fill="currentColor" />
                        </button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
