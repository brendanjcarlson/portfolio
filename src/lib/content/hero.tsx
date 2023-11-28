import { Socials } from "@/lib/components/socials";
import { HeadingOne, HeadingTwo, Paragraph } from "@/lib/components/typography";
import { FC } from "react";

export interface HeroSectionProps {
    name: string;
    role: string;
    descriptionItems: [string, string];
    className?: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ name, role, descriptionItems, className }) => {
    return (
        <section className={className}>
            <HeadingOne>{name}</HeadingOne>
            <HeadingTwo>{role}</HeadingTwo>
            <Paragraph
                intent="body"
                className="mb-12 md:mb-16"
            >
                {descriptionItems.join(" & ")}
            </Paragraph>
            <Socials />
        </section>
    );
};
