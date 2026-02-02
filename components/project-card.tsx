import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
    return (
        <Card className="flex flex-col h-full bg-zinc-900/50 border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
            <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {title}
                    </CardTitle>
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="w-5 h-5 text-zinc-500 hover:text-white transition-colors" />
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs font-normal border-zinc-700 text-zinc-400 bg-transparent">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
                <CardDescription className="text-zinc-400 text-base leading-relaxed line-clamp-3">
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0 mt-auto">
                <Link href={link} className="w-full">
                    <button className="w-full py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-colors flex items-center justify-center gap-2 border border-white/5">
                        View Project
                    </button>
                </Link>
            </CardFooter>
        </Card>
    );
}
