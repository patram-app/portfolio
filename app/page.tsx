import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/data/projects";
import { AIWorkflow } from "@/components/sections/ai-workflow";
import { TechStack } from "@/components/sections/tech-stack";
import { ToolsWorkflow } from "@/components/sections/tools-workflow";
import { HeroButtons } from "@/components/hero-buttons";

export default function Home() {
  // Replaced InfiniteMarquee with a clean grid for professional look as per request "No walls of text"



  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navbar is in layout.tsx */}

      <main>
        {/* 1. HERO SECTION */}
        <section id="home" className="relative flex flex-col items-center justify-center min-h-[100vh] w-full px-4 overflow-hidden pt-20">
          {/* Background Effects */}
          <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black -z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

          <div className="container max-w-4xl mx-auto text-center z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to full-time & freelance
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Product-Focused <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                Web Developer.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              I build real web products by balancing engineering, UX, and business trade-offs.
              Seeking full-time roles & exciting projects.
            </p>

            <HeroButtons />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* 2. PROJECTS SECTION */}
        <section id="projects" className="py-32 px-4 bg-black relative border-t border-white/5">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected Projects</h2>
                <p className="text-zinc-400 text-lg max-w-xl">
                  A collection of products I&apos;ve shipped. Toggle between <span className="text-white font-medium">Developer View</span> and <span className="text-white font-medium">Product View</span>.
                </p>
              </div>
            </div>

            <ProjectList projects={projects} />
          </div>
        </section>

        {/* 3. LIBRARIES & TECHNOLOGIES */}
        <TechStack />

        {/* 4. TOOLS & WORKFLOW */}
        <ToolsWorkflow />

        {/* 4. AI WORKFLOW SECTION */}
        <AIWorkflow />

        {/* 5. ABOUT SECTION */}
        <section id="about" className="py-32 px-4 bg-black">
          <div className="container max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Engineering with a <span className="text-zinc-500">Product Mindset.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              I don&apos;t just write code; I ship solutions. My journey as a solo developer has taught me that the best code is the one that delivers value to the user while being maintainable.
              I value <span className="text-white font-medium">clean architecture</span>, <span className="text-white font-medium">thoughtful UX</span>, and <span className="text-white font-medium">speed of iteration</span>.
            </p>
          </div>
        </section>

        {/* 6. CONTACT CTA */}
        <section id="contact" className="py-24 px-4 border-t border-white/5">
          <div className="container max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Ready to work together?
            </h2>
            <p className="text-zinc-400 text-lg">
              I&apos;m currently open to full-time engineering roles, contract work, and consulting.
            </p>
            <a href="mailto:vrunmundeja@gmail.com">
              <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-zinc-200 rounded-full mt-4">
                Get in touch
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
