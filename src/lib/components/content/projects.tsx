import { FC } from "react";
import { Section, SectionContent } from "../layout";
import { LinkArrow } from "../link-arrow";
import { SkillsCloud } from "../skill-cloud";

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
            <p className="mb-2 text-sm uppercase text-stone-400/80">{kind}</p>
            <h4 className="text-lg text-stone-50">
                <LinkArrow
                    href={gitHubUrl}
                    title={title}
                />
            </h4>
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
                        description="A note-taking application with an emphasis on organizing and connecting notes in an intuitive way."
                        imageUrl="https://picsum.photos/300/200"
                        skills={["Next.js", "TypeScript", "TailwindCSS", "Supabase"]}
                    />
                    <ProjectItem
                        kind="Web application"
                        title="PocketPulse"
                        liveUrl="https://pocketpulse.onrender.com"
                        gitHubUrl="https://github.com/brendanjcarlson/pocketpulse"
                        description="A clean and minimalistic budgeting application designed to make managing expenses easy."
                        imageUrl="https://picsum.photos/300/200"
                        skills={["Python", "Flask", "TailwindCSS", "PostgreSQL", "HTMX"]}
                    />
                    <ProjectItem
                        kind="API"
                        title="Shop API"
                        liveUrl="https://shop-api.onrender.com"
                        gitHubUrl="https://github.com/brendanjcarlson/shop-api"
                        description="A free API for developers to use while learning how to build e-commerce applications."
                        imageUrl="https://picsum.photos/300/200"
                        skills={["Golang", "PostgreSQL", "Docker", "AWS"]}
                    />
                </ul>
            </SectionContent>
        </Section>
    );
};
