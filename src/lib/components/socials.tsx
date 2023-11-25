"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FC } from "react";

export type SocialIconLinkItemProps = {
    item: {
        href: string;
        label: string;
        icon: typeof GitHubLogoIcon;
    };
};

const socials = [
    {
        href: "https://www.linkedin.com/in/brendanjcarlson",
        label: "LinkedIn",
        icon: LinkedInLogoIcon,
    },
    {
        href: "https://github.com/brendanjcarlson",
        label: "GitHub",
        icon: GitHubLogoIcon,
    },
];

export const Socials: FC = () => {
    return (
        <div className="">
            <ul className="flex gap-5 md:flex-col">
                {socials.map((item) => (
                    <SocialIconLinkItem
                        key={item.label}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
};

export const SocialIconLinkItem: FC<SocialIconLinkItemProps> = ({ item }) => {
    return (
        <li>
            <Tooltip.Provider delayDuration={500}>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <a href={item.href}>
                            <item.icon className="h-7 w-7 text-zinc-200/80 hover:text-white md:h-8 md:w-8" />
                        </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            className="select-none rounded-md bg-white px-3 py-2 text-md leading-none text-indigo-900 shadow-md will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                            side="bottom"
                            sideOffset={8}
                        >
                            <span className="font-medium">{item.label}</span>
                            <Tooltip.Arrow className="fill-white" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        </li>
    );
};
