import { AboutSection, AboutSectionProps } from "@/lib/components/content/about";
import { ExperienceSection, ExperienceSectionProps } from "@/lib/components/content/experience";
import { HeroSection, HeroSectionProps } from "@/lib/components/content/hero";
import { ProjectsSection } from "@/lib/components/content/projects";

const heroSectionContent: HeroSectionProps = {
    name: "Brendan J. Carlson",
    role: "Full-Stack Web Developer",
    descriptionItems: ["designer", "educator"],
};

const aboutSectionContent: AboutSectionProps = {
    id: "about",
    title: "About",
    content: [
        "In 2022, I decided it was time to take on something new. I took a swing at learning to code and just 3 months in I found myself teaching others how to take on the wild world of development. Fast-forward to today, I have taught hundreds of students to code and have had the privelege of re-imagining the website for the bootcamp who taught me to code in the first place.",
        "My main focus these days is designing and building pages for my clients. In my free time I've been working on a real-time collaborative coding challenge platform for learners to level up while seeking help from experienced developers.",
        "On the off chance that I'm not glued to screens, I am either playing with my 3 crazy dogs, cooking something spicy, or exploring nature with my fiancée.",
    ],
};

const experienceSectionContent: ExperienceSectionProps = {
    id: "experience",
    title: "Experience",
    experienceItems: [
        {
            companyName: "Coding Temple",
            companyUrl: "https://codingtemple.com",
            dateRange: {
                fromMeta: "2022-08",
                fromMonth: "Oct",
                fromYear: "2022",
                toMeta: "2023-11",
                toMonth: "Nov",
                toYear: "2023",
            },
            jobTitle: "Developer",
            description:
                "Delivered and maintained version 2.0 of the Coding Temple website. Worked closely with the marketing team to enhance SEO and improve accessibility, performance, and user experience.",
            skills: ["PHP", "WordPress", "MySQL", "TypeScript", "SCSS", "Figma", "Adobe Illustrator"],
        },
        {
            companyName: "Coding Temple",
            companyUrl: "https://codingtemple.com",
            dateRange: {
                fromMeta: "2023-01",
                fromMonth: "Jan",
                fromYear: "2023",
                toMeta: "2023-11",
                toMonth: "Nov",
                toYear: "2023",
            },
            jobTitle: "Instructor",
            description:
                "Taught students the fundamentals of full-stack web development. Designed and delivered lectures, assignments and assessments. Provided students with feedback on their work and helped them prepare for technical interviews.",
            skills: ["HTML", "CSS", "JavaScript", "Python", "Flask", "SQL", "Git", "GitHub", "VS Code"],
        },
    ],
};

export default function Page(): JSX.Element {
    return (
        <main className="mx-auto w-full max-w-3xl flex-1 px-8">
            <HeroSection
                {...heroSectionContent}
                className="mb-24 pt-16 md:pt-32"
            />
            <AboutSection
                {...aboutSectionContent}
                className="mb-24"
            />
            <ExperienceSection {...experienceSectionContent} />
            <ProjectsSection />
        </main>
    );
}
