import { FC } from "react";

export interface SkillsCloudProps {
    skills: string[];
}

export const SkillsCloud: FC<SkillsCloudProps> = ({ skills }) => {
    return (
        <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <li
                    key={skill}
                    className="rounded-full bg-indigo-300/20 px-4 py-1 text-sm text-indigo-200/80"
                >
                    {skill}
                </li>
            ))}
        </ul>
    );
};
