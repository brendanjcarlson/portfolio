import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { AnchorHTMLAttributes, FC } from "react";

export interface LinkArrowProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const LinkArrow: FC<LinkArrowProps> = ({ href, title, className, ...props }) => {
    return (
        <a
            href={href}
            className={clsx("group inline-flex items-center gap-x-1 hover:text-emerald-300", className)}
            aria-label={title}
            {...props}
        >
            {title}{" "}
            <ArrowTopRightIcon className="mt-1 h-[1em] w-[1em] transition-transform delay-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
    );
};
