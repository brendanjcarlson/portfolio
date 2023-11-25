import clsx from "clsx";
import { FC, ReactNode } from "react";

export interface SectionProps {
    id: string;
    title: string;
    className?: string;
    children: ReactNode;
}

export const Section: FC<SectionProps> = ({ id, title, className, children }) => {
    return (
        <section
            id={id}
            className={clsx("mb-16", className)}
        >
            <h3 className="mb-12 text-xl font-medium">{title}</h3>
            {children}
        </section>
    );
};

export interface SectionContentProps {
    className?: string;
    children: React.ReactNode;
}

export const SectionContent: FC<SectionContentProps> = ({ className, children }) => {
    return <div className={clsx("space-y-4 text-zinc-200/80", className)}>{children}</div>;
};
