"use client";

import { FC, useEffect, useState } from "react";

export const ThemeToggler: FC = () => {
    const [activeTheme, setActiveTheme] = useState<"light" | "dark">(() => {
        if (typeof window === "undefined") return "light";

        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            return "dark";
        }

        return "light";
    });

    useEffect(() => {
        if (activeTheme === "light") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        }
    }, [activeTheme]);

    return (
        <button
            onClick={() =>
                setActiveTheme((prev) => {
                    const next = prev === "light" ? "dark" : "light";
                    localStorage.setItem("theme", next);
                    return next;
                })
            }
            className="after:pointer-events-none after:ml-2 after:inline-block after:content-['←'] hover:after:content-['😎']"
        >
            dark mode fan.
        </button>
    );
};
