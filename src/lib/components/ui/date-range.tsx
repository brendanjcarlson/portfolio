import clsx from "clsx";
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
