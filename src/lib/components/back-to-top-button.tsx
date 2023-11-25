"use client";

import { CaretUpIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";
import { FC } from "react";

export const BackToTopButton: FC = () => {
    return (
        <div>
            <Tooltip.Provider delayDuration={500}>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <button aria-label="Back to top bg-white rounded-full">
                            <CaretUpIcon className="h-7 w-7 text-zinc-900 md:h-8 md:w-8" />
                        </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            className="select-none rounded-md bg-white px-4 py-3.5 text-md leading-none text-zinc-900 shadow-md will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                            side="left"
                            sideOffset={8}
                        >
                            <span className="font-medium">Back to top</span>
                            <Tooltip.Arrow className="fill-white" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        </div>
    );
};
