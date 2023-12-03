import { SkillsCloud } from "@/lib//components/skill-cloud";
import { HeadingTwo } from "@/lib/components/typography";
import { DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC } from "react";
import { LinkArrow } from "../link-arrow";
import { DateRange, DateRangeProps } from "../ui/date-range";

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
                    <LinkArrow
                        href={companyUrl}
                        title={companyName}
                    />
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
