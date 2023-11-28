import { SkillsCloud } from "@/lib//components/skill-cloud";
import { HeadingTwo } from "@/lib/components/typography";
import { ArrowTopRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

export interface DateRangeProps {
    fromMeta: string;
    fromMonth: string;
    fromYear: string;
    toMeta: string;
    toMonth: string;
    toYear: string;
    className?: string;
}
export const DateRange: FC<DateRangeProps> = ({
    fromMeta,
    fromMonth,
    fromYear,
    toMeta,
    toMonth,
    toYear,
    className,
}) => {
    return (
        <p
            className={clsx("mb-2 w-fit text-xs uppercase text-stone-400/80", className)}
            aria-label={`${fromMonth} ${fromYear} to ${toMonth} ${toYear}`}
        >
            <time dateTime={fromMeta}>
                {fromMonth} {fromYear}
            </time>
            <span className="px-1">&mdash;</span>
            <time dateTime={toMeta}>
                {toMonth} {toYear}
            </time>
        </p>
    );
};

export interface ExperienceItemProps {
    jobTitle: string;
    companyName: string;
    companyUrl: string;
    dateRange: DateRangeProps;
    description: string;
    skills?: string[];
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
    jobTitle,
    companyName,
    companyUrl,
    dateRange,
    description,
    skills,
}) => {
    return (
        <li className="md:flex md:gap-x-6">
            <DateRange
                {...dateRange}
                className="md:mt-1.5 md:min-w-max"
            />
            <div>
                <h4 className="mb-2 text-lg font-medium">
                    {jobTitle} @{" "}
                    <a
                        href={companyUrl}
                        referrerPolicy="no-referrer"
                        target="_blank"
                        className="group relative pr-1 hover:text-emerald-300"
                        aria-label={companyName}
                    >
                        {companyName}{" "}
                        <ArrowTopRightIcon className="absolute -right-4 bottom-0 h-4 w-4 transition-all group-hover:-right-[1.125rem] group-hover:bottom-0.5 group-hover:text-emerald-300" />
                    </a>
                </h4>
                <div>
                    <p className="mb-4 text-md text-stone-200/80">{description}</p>
                    {skills && <SkillsCloud skills={skills} />}
                </div>
            </div>
        </li>
    );
};

export interface ExperienceSectionProps {
    id: string;
    title: string;
    experienceItems: ExperienceItemProps[];
    className?: string;
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({ id, title, experienceItems, className }) => {
    return (
        <section
            id={id}
            className={className}
        >
            <HeadingTwo className="mb-8">{title}</HeadingTwo>
            <ul className="mb-8 space-y-12">
                {experienceItems &&
                    experienceItems.map((item, idx) => (
                        <ExperienceItem
                            key={idx}
                            {...item}
                        />
                    ))}
            </ul>
            <Link
                href="/resume"
                className="flex items-center gap-2 text-base hover:underline"
            >
                Download full résumé <DownloadIcon className="-mt-1 h-5 w-5" />
            </Link>
        </section>
    );
};
