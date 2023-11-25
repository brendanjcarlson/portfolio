import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { Section } from "../components/layout";
import { SkillsCloud } from "../components/skill-cloud";

export interface DateRangeProps {
    fromMonth?: string;
    fromYear?: string;
    toMonth?: string;
    toYear?: string;
    className?: string;
}
export const DateRange: FC<DateRangeProps> = ({ fromMonth, fromYear, toMonth, toYear, className }) => {
    return (
        <p className={clsx("text-sm uppercase text-zinc-400/80", className)}>
            {fromMonth && <span>{fromMonth} </span>}
            {fromYear && <span>{fromYear} &mdash; </span>}
            {toMonth && <span>{toMonth} </span>}
            {toYear && <span>{toYear}</span>}
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
        <li>
            <div>
                <DateRange
                    {...dateRange}
                    className="mb-2"
                />
                <h4 className="mb-2 text-lg">
                    {jobTitle} @{" "}
                    <a
                        href={companyUrl}
                        referrerPolicy="no-referrer"
                        target="_blank"
                        className="hover:underline"
                    >
                        {companyName} <span className="text-md">&#8599;</span>
                    </a>
                </h4>
                <p className="mb-4 text-md text-zinc-200/80">{description}</p>
                {skills && <SkillsCloud skills={skills} />}
            </div>
        </li>
    );
};

export const ExperienceSection: FC = () => {
    return (
        <Section
            id="experience"
            title="Experience"
        >
            <ul className="mb-8 space-y-12">
                <ExperienceItem
                    companyName="Coding Temple"
                    companyUrl="https://codingtemple.com"
                    dateRange={{ fromMonth: "Oct", fromYear: "2022", toMonth: "Nov", toYear: "2023" }}
                    jobTitle="Developer"
                    description="Delivered and maintained version 2.0 of the Coding Temple website. Worked closely with the marketing team to enhance SEO and improve accessibility, performance, and user experience."
                    skills={["PHP", "WordPress", "MySQL", "TypeScript", "SCSS", "Figma", "Adobe Illustrator"]}
                />
                <ExperienceItem
                    companyName="Coding Temple"
                    companyUrl="https://codingtemple.com"
                    dateRange={{ fromMonth: "Jan", fromYear: "2023", toMonth: "Nov", toYear: "2023" }}
                    jobTitle="Instructor"
                    description="Taught students the fundamentals of full-stack web development. Designed and delivered lectures, assignments, and assessments. Provided students with feedback on their work and helped them prepare for technical interviews."
                    skills={["TypeScript", "React", "CSS", "Python", "Flask", "PostgreSQL", "Figma", "Postman"]}
                />
            </ul>
            <Link
                href="/resume"
                className="text-base hover:underline"
            >
                View full résumé &rarr;
            </Link>
        </Section>
    );
};
