import { FC } from "react";
import { Section, SectionContent } from "../components/layout";
import { SkillsCloud } from "../components/skill-cloud";

export interface ProjectItemProps {
    kind: "Web application" | "Mobile application" | "Desktop application" | "Library" | "API" | "Other";
    title: string;
    liveUrl: string;
    gitHubUrl: string;
    description: string;
    imageUrl: string;
    skills?: string[];
}

export const ProjectItem: FC<ProjectItemProps> = ({
    kind,
    title,
    liveUrl,
    gitHubUrl,
    description,
    imageUrl,
    skills,
}) => {
    return (
        <li>
            <p className="mb-2 text-sm uppercase text-zinc-400/80">{kind}</p>
            <a
                href={liveUrl}
                target="_blank"
                className="mb-2 flex items-center gap-2 leading-none text-white hover:underline"
            >
                <h4 className="text-lg ">{title}</h4> <span className="text-md">&#8599;</span>
            </a>
            <p className="mb-4 text-md">{description}</p>
            <img
                src={imageUrl}
                alt={`${title} screenshot`}
                className="mb-4 h-auto w-[170px] rounded-md border-[3px] border-indigo-200/20"
            />
            {skills && <SkillsCloud skills={skills} />}
        </li>
    );
};

export const ProjectsSection: FC = () => {
    return (
        <Section
            id="projects"
            title="Projects"
        >
            <SectionContent>
                <ul className="mb-8 space-y-12">
                    <ProjectItem
                        kind="Web application"
                        title="Meldnotes"
                        liveUrl="https://meldnotes.com"
                        gitHubUrl="https://github.com/brendanjcarlson/meldnotes"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus saepe
                            soluta ab quas, voluptas id eius! Quisquam, sapiente optio."
                        imageUrl="https://picsum.photos/300/200"
                        skills={["Next.js", "TypeScript", "TailwindCSS", "Supabase"]}
                    />
                    <ProjectItem
                        kind="Web application"
                        title="PokéBattle"
                        liveUrl="https://pokebattle.onrender.com"
                        gitHubUrl="https://github.com/brendanjcarlson/pokebattle"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus saepe soluta ab quas, voluptas id eius! Quisquam, sapiente optio."
                        imageUrl="https://picsum.photos/300/200"
                        skills={["Python", "Flask", "SCSS", "PostgreSQL", "HTMX"]}
                    />
                    <ProjectItem
                        kind="API"
                        title="Shop API"
                        liveUrl="https://shop-api.onrender.com"
                        gitHubUrl="https://github.com/brendanjcarlson/shop-api"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus saepe soluta ab quas, voluptas id eius! Quisquam, sapiente optio."
                        imageUrl="https://picsum.photos/300/200"
                        skills={["Golang", "Fiber", "PostgreSQL", "Docker", "Stripe"]}
                    />
                </ul>
            </SectionContent>
        </Section>
    );
};
