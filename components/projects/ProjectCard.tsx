"use client";


import { Project } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, Lightbulb } from "lucide-react";
import Link from "next/link";


export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="flex flex-col bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden h-full">
            <CardHeader className="pb-4">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                    {project.link && (
                        <Link href={project.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                    )}
                </div>
                <p className="text-sm text-zinc-400 line-clamp-2 min-h-[40px]">{project.description}</p>
            </CardHeader>

            <CardContent className="flex-1 pb-4">
                <Tabs defaultValue="developer" className="w-full">
                    <TabsList className="w-full grid grid-cols-2 bg-black/40 border border-white/5 mb-4">
                        <TabsTrigger value="developer" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-xs">
                            <Code2 className="w-3 h-3 mr-2" /> Developer
                        </TabsTrigger>
                        <TabsTrigger value="product" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-xs">
                            <Lightbulb className="w-3 h-3 mr-2" /> Product
                        </TabsTrigger>
                    </TabsList>

                    <div className="mt-4">
                        <TabsContent value="developer" className="mt-0 space-y-4 animate-in fade-in duration-300">
                            <div>
                                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.developerView.techStack.map((tech) => (
                                        <span key={tech} className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Key Features</h4>
                                <ul className="space-y-1.5">
                                    {project.developerView.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-zinc-300 flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="product" className="mt-0 space-y-4 animate-in fade-in duration-300">
                            <div>
                                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">The Problem</h4>
                                <p className="text-sm text-zinc-300 leading-relaxed bg-red-500/5 border border-red-500/10 p-2 rounded-md">
                                    {project.productView.problem}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Strategic Decisions</h4>
                                <ul className="space-y-1.5">
                                    {project.productView.strategy.map((item, idx) => (
                                        <li key={idx} className="text-sm text-zinc-300 flex items-start gap-2">
                                            <span className="text-purple-500 mt-1">→</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </CardContent>

            <CardFooter className="pt-0">
                {project.link ? (
                    <Button asChild className="w-full bg-white text-black hover:bg-zinc-200" size="sm">
                        <Link href={project.link} target="_blank">
                            Visit Live Site
                        </Link>
                    </Button>
                ) : (
                    <Button disabled className="w-full" size="sm" variant="outline">
                        Local Projects
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
