"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroButtons() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Button
                size="lg"
                className="h-12 px-8 text-base bg-white text-black hover:bg-zinc-200 gap-2 font-medium rounded-full transition-transform hover:scale-105"
                onClick={() => scrollToSection("projects")}
            >
                View Projects <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-zinc-800 bg-transparent text-white hover:bg-zinc-900 rounded-full"
                onClick={() => scrollToSection("contact")}
            >
                Contact Me
            </Button>
        </div>
    );
}
