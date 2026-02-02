"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";

interface ProjectListProps {
    projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
    const [showAll, setShowAll] = useState(false);

    const toggleShowMore = () => setShowAll(!showAll);

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, index) => {
                    const isHiddenOnMobile = index >= 2 && !showAll;

                    return (
                        <div
                            key={project.id}
                            className={isHiddenOnMobile ? "hidden md:block" : "block"}
                        >
                            <ProjectCard project={project} />
                        </div>
                    );
                })}
            </div>

            {projects.length > 2 && !showAll && (
                <Button
                    variant="outline"
                    className="mt-8 md:hidden text-white border-zinc-800 bg-zinc-900/50"
                    onClick={toggleShowMore}
                >
                    Show More Projects
                </Button>
            )}

            {projects.length > 2 && showAll && (
                <Button
                    variant="ghost"
                    className="mt-8 md:hidden text-zinc-400"
                    onClick={toggleShowMore}
                >
                    Show Less
                </Button>
            )}
        </div>
    );
}
