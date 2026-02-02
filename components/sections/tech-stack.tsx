"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Palette,
    Database,
    Layout,
    FileType,
    Server,
    Box,
    Zap,
    Globe,
    FileText,
    ShoppingBag
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const techCategories = [
    {
        title: "Frontend Core",
        icon: <Code2 className="w-4 h-4 text-emerald-400" />,
        items: [
            { name: "HTML5", icon: <FileType className="w-4 h-4" /> },
            { name: "CSS3", icon: <Palette className="w-4 h-4" /> },
            { name: "JavaScript (ES6+)", icon: <Code2 className="w-4 h-4" /> },
            { name: "React", icon: <Box className="w-4 h-4" /> },
            { name: "Next.js", icon: <Globe className="w-4 h-4" /> },
        ]
    },
    {
        title: "UI & Styling",
        icon: <Layout className="w-4 h-4 text-purple-400" />,
        items: [
            { name: "Tailwind CSS", icon: <Zap className="w-4 h-4" /> },
            { name: "shadcn/ui", icon: <Layout className="w-4 h-4" /> },
            { name: "Magic UI", icon: <Zap className="w-4 h-4" /> },
            { name: "Framer Motion", icon: <Box className="w-4 h-4" /> },
            { name: "Lucide Icons", icon: <FileType className="w-4 h-4" /> },
        ]
    },
    {
        title: "Backend & Services",
        icon: <Server className="w-4 h-4 text-blue-400" />,
        items: [
            { name: "Appwrite", icon: <Database className="w-4 h-4" /> },
            { name: "Sanity.io CMS", icon: <FileText className="w-4 h-4" /> },
            { name: "Vercel", icon: <Globe className="w-4 h-4" /> },
            { name: "Google Analytics", icon: <Zap className="w-4 h-4" /> },
            { name: "Shopify", icon: <ShoppingBag className="w-4 h-4" /> },
        ]
    }
];

export function TechStack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.clientWidth * 0.85; // Approximate width of a card (85vw)
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(Math.min(Math.max(index, 0), techCategories.length - 1));
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="tech-stack" className="py-24 px-4 bg-black relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />

            <div className="container max-w-5xl mx-auto relative z-10">
                <div className="mb-16 text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Libraries & Technologies
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                        A curated stack of tools I use to build robust, scalable applications.
                    </p>
                </div>

                {/* Mobile: Horizontal Scroll with Peek | Desktop: Grid */}
                <div
                    ref={scrollContainerRef}
                    className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:mx-auto md:px-0 md:overflow-visible snap-x snap-mandatory md:snap-none"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {techCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="min-w-[85vw] md:min-w-0 snap-center md:snap-align-none space-y-6"
                        >
                            {/* Card Container for Mobile Grouping */}
                            <div className="bg-zinc-900/10 border border-white/5 rounded-2xl p-6 h-full md:bg-transparent md:border-none md:p-0 md:rounded-none">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-zinc-200">{category.title}</h3>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            whileHover={{ x: 4, backgroundColor: "rgba(39, 39, 42, 0.4)" }}
                                            className="group flex items-center gap-4 p-3 rounded-lg border border-white/5 bg-zinc-900/20 md:bg-zinc-900/10 hover:border-white/10 transition-colors cursor-default"
                                        >
                                            <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                                {item.icon}
                                            </div>
                                            <span className="text-zinc-400 group-hover:text-white font-medium transition-colors">
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scroll Hints for Mobile */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    {techCategories.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${idx === activeIndex ? "bg-white scale-125" : "bg-zinc-800"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
