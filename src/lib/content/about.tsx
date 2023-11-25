import { Section, SectionContent } from "@/lib/components/layout";
import { FC } from "react";

export const AboutSection: FC = () => {
    return (
        <Section
            id="about"
            title="About"
        >
            <SectionContent>
                <p>
                    In 2022, I decided it was time to take on something new. I took a swing at learning to code and just
                    3 months in I found myself teaching others how to take on the wild world of development.
                    Fast-forward to today, I have taught hundreds of students to code and have had the privelege of
                    re-imagining the website for the bootcamp who taught me to code in the first place.
                </p>
                <p>
                    My main focus these days is designing and building pages for my clients. In my free time I&apos;ve
                    been working on a real-time collaborative coding challenge platform for learners to level up while
                    seeking help from experienced developers.
                </p>
                <p>
                    On the off chance that I&apos;m not glued to screens, I am either playing with my 3 crazy dogs,
                    cooking something spicy, or exploring nature with my fiancée.
                </p>
            </SectionContent>
        </Section>
    );
};
