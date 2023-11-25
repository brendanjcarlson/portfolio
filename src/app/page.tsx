import { AboutSection } from "@/lib/content/about";
import { ExperienceSection } from "@/lib/content/experience";
import { HeroSection } from "@/lib/content/hero";
import { ProjectsSection } from "@/lib/content/projects";

export default function Page(): JSX.Element {
    return (
        <main className="flex-1 px-8">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
        </main>
    );
}
