"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", link: "/" }, // Usually maps to top or #home
    { name: "Projects", link: "#projects" },
    { name: "Tech & Tools", link: "#tech-stack" },
    { name: "AI Workflow", link: "#ai-workflow" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Simple active section detection based on scroll position
            const sections = navItems.map(item => item.link.replace("/", "").replace("#", "") || "home");

            // "home" is special case for top
            if (window.scrollY < 100) {
                setActiveSection("Home");
                return;
            }

            for (const section of sections) {
                if (section === "home") continue;
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(navItems.find(item => item.link.includes(section))?.name || "Home");
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        if (link.startsWith("#")) {
            e.preventDefault();
            const id = link.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
            }
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300",
                scrolled ? "pt-4" : "pt-6"
            )}
        >
            <div className={cn(
                "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 border border-transparent",
                scrolled
                    ? "bg-black/60 backdrop-blur-md border-white/10 shadow-lg w-full max-w-2xl py-3"
                    : "bg-transparent w-full max-w-6xl py-4"
            )}>
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="relative z-10 text-xl font-bold tracking-tight text-white mix-blend-difference"
                >
                    Varun<span className="text-zinc-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-black/50 p-1 rounded-full border border-white/5 backdrop-blur-sm">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={(e) => scrollToSection(e, item.link)}
                            className={cn(
                                "relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full z-10",
                                activeSection === item.name ? "text-white" : "text-zinc-400 hover:text-white"
                            )}
                        >
                            {activeSection === item.name && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={(e) => scrollToSection(e, item.link)}
                                className={cn(
                                    "px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                                    activeSection === item.name ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
