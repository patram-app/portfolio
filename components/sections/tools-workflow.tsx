"use client";

import {
    Terminal,
    Cpu,
    PenTool,
    Search,
    Github,
    Layout,
    Wrench,
    Monitor
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const tools = [
    {
        name: "Google Antigravity",
        hint: "Advanced Agentic Coding",
        icon: <Cpu className="w-5 h-5" />
    },
    {
        name: "v0 by Vercel",
        hint: "Generative UI Prototyping",
        icon: <PenTool className="w-5 h-5" />
    },
    {
        name: "Google Stitch",
        hint: "Full-Stack Composition",
        icon: <Layout className="w-5 h-5" />
    },
    {
        name: "VS Code",
        hint: "Primary Editor",
        icon: <Terminal className="w-5 h-5" />
    },
    {
        name: "GitHub",
        hint: "Version Control & CI/CD",
        icon: <Github className="w-5 h-5" />
    },
    {
        name: "Canva",
        hint: "Design Assets & Mockups",
        icon: <Wrench className="w-5 h-5" />
    },
    {
        name: "Vercel",
        hint: "Deployments & Analytics",
        icon: <Monitor className="w-5 h-5" />
    },
    {
        name: "DevTools",
        hint: "Performance Profiling",
        icon: <Search className="w-5 h-5" />
    },
];

export function ToolsWorkflow() {
    return (
        <section className="py-24 px-4 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8 px-4">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-4">
                            <span>Workflow</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Tools That Speed Up My Workflow
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Used to move faster without compromising quality. These aren&apos;t crutches; they&apos;re accelerators.
                        </p>
                    </div>
                </div>

                {/* Marquee Container */}
                <div
                    className="scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
                    style={{
                        "--animation-duration": "40s",
                        "--animation-direction": "forwards"
                    } as React.CSSProperties}
                >
                    <div
                        className={cn(
                            "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap animate-scroll",
                            "hover:[animation-play-state:paused]"
                        )}
                    >
                        {[...tools, ...tools].map((tool, index) => (
                            <div
                                key={`${tool.name}-${index}`}
                                className="group relative w-[280px] p-6 rounded-2xl bg-zinc-900/20 border border-white/20 hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-300 flex-shrink-0 cursor-default"
                            >
                                <div className="flex flex-col h-full justify-between gap-6">
                                    <div className="text-zinc-500 group-hover:text-zinc-200 transition-colors">
                                        {tool.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-white font-medium mb-1">{tool.name}</h3>
                                        <p className="text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                                            {tool.hint}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
