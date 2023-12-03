"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FC } from "react";

export type SocialIconLinkItemProps = {
    item: {
        href: string;
        title: string;
        icon: typeof GitHubLogoIcon;
    };
};

const socials = [
    {
        href: "https://www.linkedin.com/in/brendanjcarlson",
        title: "LinkedIn",
        icon: LinkedInLogoIcon,
    },
    {
        href: "https://github.com/brendanjcarlson",
        title: "GitHub",
        icon: GitHubLogoIcon,
    },
];

export const Socials: FC = () => {
    return (
        <div className="">
            <ul className="flex gap-5 pt-12">
                {socials.map((item) => (
                    <SocialIconLinkItem
                        key={item.title}
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
                        <a
                            href={item.href}
                            aria-label={item.title}
                            target="_blank"
                        >
                            <item.icon className="h-7 w-7 text-stone-200/80 hover:text-emerald-300 md:h-8 md:w-8" />
                        </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            className="select-none rounded-md bg-stone-100 px-3 py-2 text-md leading-none text-stone-950 shadow-md will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                            side="top"
                            sideOffset={4}
                        >
                            <span className="font-medium">{item.title}</span>
                            <Tooltip.Arrow className="fill-stone-100" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        </li>
    );
};
