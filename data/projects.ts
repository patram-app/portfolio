export interface Project {
    id: string;
    title: string;
    description: string;
    link?: string;
    developerView: {
        techStack: string[];
        features: string[];
    };
    productView: {
        problem: string;
        solution: string;
        strategy: string[];
    };
}

export const projects: Project[] = [
    {
        id: "directorder",
        title: "DirectOrder",
        description: "A SaaS restaurant ordering platform used by restaurants and cafés.",
        link: "https://directorder.shop/",
        developerView: {
            techStack: ["Next.js", "React", "Mobile-first UI"],
            features: [
                "Fully responsive UI",
                "Clean customer ordering flow",
                "Responsive admin-facing interface",
                "Optimized for performance and fast loading",
                "Clean component structure"
            ]
        },
        productView: {
            problem: "Restaurants need a simple way to take orders without expensive hardware or high commission fees.",
            solution: "A WhatsApp-centric ordering system that leverages existing user behavior.",
            strategy: [
                "Reduced backend complexity by routing orders via WhatsApp",
                "Chose WhatsApp to maximize reliability and adoption",
                "Avoided unnecessary infrastructure costs",
                "Focused on simplicity for café owners and customers",
                "Prioritized real-world usability over over-engineering"
            ]
        }
    },
    {
        id: "patram",
        title: "Patram",
        description: "A public PDF sharing platform with user profiles and document organization.",
        link: "https://patram.app/",
        developerView: {
            techStack: ["Next.js", "React", "Appwrite", "Shadcn/UI"],
            features: [
                "Authentication, database, and file storage via Appwrite",
                "Folder-based organization system",
                "Download tracking",
                "Clean, scalable UI"
            ]
        },
        productView: {
            problem: "Sharing PDFs publically often involves expired links or cluttered drive folders.",
            solution: "A dedicated, clean platform for public document hosting.",
            strategy: [
                "Scoped MVP by excluding likes, comments, and realtime initially",
                "Focused on core value: easy public PDF sharing",
                "Designed data models with future scalability in mind",
                "Balanced feature speed vs maintainability"
            ]
        }
    },
    {
        id: "papergen",
        title: "PaperGen",
        description: "A question paper generator used by teachers.",
        link: "https://papergen.vercel.app/",
        developerView: {
            techStack: ["React", "Next.js", "Client-side Logic"],
            features: [
                "Fully client-side application",
                "Clean UI for structured content creation",
                "Accurate formatting logic"
            ]
        },
        productView: {
            problem: "Formatting question papers in Word is time-consuming and frustrating for teachers.",
            solution: "A purpose-built tool that auto-formats questions instantly.",
            strategy: [
                "Solved a real teacher pain-point better than MS Word",
                "Zero server dependency to keep it fast and reliable",
                "Focused on ease of use for non-technical users"
            ]
        }
    },
    {
        id: "amba",
        title: "Amba Jewellers",
        description: "Business website with CMS-based image management.",
        link: "https://ambajewellershisar.vercel.app/",
        developerView: {
            techStack: ["Next.js", "Sanity CMS"],
            features: [
                "Integrated Sanity CMS",
                "Dynamic category-wise image uploads",
                "Responsive business website"
            ]
        },
        productView: {
            problem: "Client needed a way to update their portfolio without contacting a developer every time.",
            solution: "Headless CMS integration for easy content management.",
            strategy: [
                "Enabled non-developers to manage content easily",
                "Reduced dependency on developer for updates",
                "Simple, maintainable architecture"
            ]
        }
    },
    {
        id: "brandnote-qdor",
        title: "BrandNote & Qdor",
        description: "Static websites / landing pages.",
        link: "https://brandnote.vercel.app/",
        developerView: {
            techStack: ["HTML", "CSS", "Next.js", "Tailwind"],
            features: [
                "Responsive layouts",
                "Clean UI",
                "Performance optimized"
            ]
        },
        productView: {
            problem: "New brands need a digital presence quickly to validate their market.",
            solution: "High-quality, fast-loading landing pages.",
            strategy: [
                "Fast delivery for branding and marketing needs",
                "Lightweight architecture",
                "Focused on clarity and speed"
            ]
        }
    },
    {
        id: "practice-projects",
        title: "Practice & Learning Projects",
        description: "A collection of hands-on practice projects built to strengthen frontend fundamentals, APIs, and modern web patterns.",
        developerView: {
            techStack: ["React", "Next.js", "APIs", "Tailwind CSS", "PWA"],
            features: [
                "Spotify clone with music playback functionality",
                "Instagram & Dribbble UI clones",
                "NASA API integration (moon imagery)",
                "Progressive Web App (PWA) experiments",
                "Todo apps and list-heavy UI practice"
            ]
        },
        productView: {
            problem: "To bridge the gap between theory and execution, I built multiple diverse interfaces to solve specific engineering challenges.",
            solution: "A continuous feedback loop of learning by doing.",
            strategy: [
                "Focus on pixel-perfect UI implementation",
                "Experimenting with complex API integrations",
                "Building reusable components",
                "Strengthening core JavaScript/Frontend fundamentals"
            ]
        }
    }
];
