import clsx from "clsx";
import { FC } from "react";
import { HeadingTwo, Paragraph } from "../components/typography";

export interface AboutSectionProps {
    id: string;
    title: string;
    content: string[];
    className?: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ id, title, content, className }) => {
    return (
        <section
            id={id}
            className={className}
        >
            <HeadingTwo className="mb-8">{title}</HeadingTwo>
            {content &&
                content.map((paragraph, idx) => (
                    <Paragraph
                        key={idx}
                        intent="body"
                        className="mb-6"
                    >
                        {paragraph}
                    </Paragraph>
                ))}
        </section>
    );
};
