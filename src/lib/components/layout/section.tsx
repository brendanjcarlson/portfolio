import { FC, ReactNode } from "react";

export interface SectionProps {
    heroTitle?: string;
    title: string;
    children: ReactNode;
}

export const Section: FC<SectionProps> = ({ heroTitle, title, children }) => {
    return (
        <section
            id={heroTitle ? heroTitle.toLowerCase() : title.toLowerCase()}
            className="pb-24"
        >
            {heroTitle && (
                <h1 className="mb-3 text-4xl font-semibold tracking-tight text-stone-50 md:text-5xl">{heroTitle}</h1>
            )}
            <h2 className="mb-6 text-xl font-medium tracking-tight text-stone-50 md:text-2xl">{title}</h2>
            {children}
        </section>
    );
};
