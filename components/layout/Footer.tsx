"use client";

import { Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black pt-20 pb-10 mt-auto overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-row md:flex-row justify-between items-start gap-8 mb-20">

                    {/* Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Connect</h3>
                        <div className="flex items-center gap-6 text-zinc-400">
                            <a href="mailto:vrunmundeja@gmail.com" className="hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/varun-mundeja/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="tel:9817285068" className="hover:text-white transition-colors">
                                <Phone className="w-6 h-6" />
                            </a>
                            <a href="https://wa.me/919817285068" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-zinc-600">
                            © {new Date().getFullYear()} Varun Mundeja. <br /> All rights reserved.
                        </p>
                    </div>
                </div>

                {/* BIG TEXT */}
                <div className="relative w-full border-t border-white/10 pt-10">
                    <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter text-white/90 select-none">
                        VARUN
                    </h1>
                    <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter text-white/90 select-none text-right">
                        MUNDEJA
                    </h1>
                </div>
            </div>
        </footer>
    );
}
