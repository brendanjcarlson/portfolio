import { FC } from "react";
import { Socials } from "../components/socials";

export const HeroSection: FC = () => {
    return (
        <section className="mx-auto mb-24 max-w-4xl pt-16">
            <h1 className="mb-5 text-4xl font-semibold tracking-tight md:text-5xl">Brendan J. Carlson</h1>
            <h2 className="mb-1 text-xl">Full-stack developer</h2>
            <p className="mb-6 text-zinc-200/80">designer &amp; educator</p>
            <Socials />
        </section>
    );
};
