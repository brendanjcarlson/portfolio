import clsx from "clsx";
import { FC, ReactNode } from "react";

export interface HeadingProps {
    className?: string;
    children: ReactNode;
}

export const HeadingOne: FC<HeadingProps> = ({ className, children }) => {
    return <h1 className={clsx("mb-3 text-4xl font-semibold tracking-tight md:text-5xl", className)}>{children}</h1>;
};

export const HeadingTwo: FC<HeadingProps> = ({ className, children }) => {
    return <h2 className={clsx("mb-4 text-xl font-medium tracking-tight md:text-2xl", className)}>{children}</h2>;
};

export interface ParagraphProps {
    intent?: "body" | "caption";
    className?: string;
    children: ReactNode;
}

export const Paragraph: FC<ParagraphProps> = ({ intent, className, children }) => {
    return (
        <p
            className={clsx(
                !intent && "text-white",
                intent === "body" && "text-stone-200/80",
                intent === "caption" && "text-stone-400/80",
                className,
            )}
        >
            {children}
        </p>
    );
};
