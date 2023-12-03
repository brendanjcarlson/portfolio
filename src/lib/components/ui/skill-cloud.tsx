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
                    className="rounded-full bg-emerald-400/20 px-4 py-1.5 text-xs text-emerald-300"
                >
                    {skill}
                </li>
            ))}
        </ul>
    );
};
