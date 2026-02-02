"use client";

import { motion } from "framer-motion";
import { Zap, Code, Layout, Layers } from "lucide-react";

export function AIWorkflow() {
    const benefits = [
        {
            title: "Architecture & Strategy",
            description: "Using AI to validate schema decisions, verify system design, and spot potential bottlenecks before writing code.",
            icon: <Layers className="w-5 h-5" />,
        },
        {
            title: "Rapid Prototyping",
            description: "Iterating through UI patterns and component structures in minutes rather than hours, maintaining high visual fidelity.",
            icon: <Layout className="w-5 h-5" />,
        },
        {
            title: "Complex Logic Resolution",
            description: "Leveraging LLMs to simplify complex algorithms and write comprehensive test cases for edge scenarios.",
            icon: <Code className="w-5 h-5" />,
        },
    ];

    return (
        <section id="ai-workflow" className="py-24 px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black pointer-events-none" />

            <div className="container max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">

                    {/* Header */}
                    <div className="md:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-zinc-400">
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span>Workflow 2026</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Building Faster with AI <br />
                            <span className="text-zinc-500">(Without Losing Quality)</span>
                        </h2>

                        <p className="text-lg text-zinc-400 leading-relaxed">
                            I treat AI as a junior partner that never sleeps. It handles the repetitive boilerplate and syntax searches, allowing me to focus on <strong className="text-zinc-100">UX, architecture, and business logic</strong>.
                        </p>

                        <p className="text-base text-zinc-500 italic border-l-2 border-zinc-800 pl-4">
                            &quot;I use AI to move faster, but I still think, decide, and own the product.&quot;
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="md:w-1/2 grid gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-white group-hover:scale-110 transition-transform">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{benefit.title}</h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
