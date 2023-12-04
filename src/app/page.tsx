import { Section } from "@/lib/components/layout/section";
import { DateRange } from "@/lib/components/ui/date-range";
import { LinkArrow } from "@/lib/components/ui/link-arrow";
import { SkillsCloud } from "@/lib/components/ui/skill-cloud";
import { Socials } from "@/lib/components/ui/socials";
import { DownloadIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { FC } from "react";

const Page: FC = () => {
    return (
        <main className="mx-auto w-full max-w-3xl flex-1 px-8 pt-16">
            <Section
                heroTitle="Brendan J. Carlson"
                title="Full-Stack Web Developer"
            >
                <p className="-mt-2 text-stone-200/80">designer & educator</p>
                <Socials />
            </Section>
            <Section title="About">
                <div className="space-y-6 text-stone-200/80">
                    <p>
                        In 2022, I decided it was time to take on something new. I took a swing at learning to code and
                        just 3 months in I found myself teaching others how to take on the wild world of development.
                        Fast-forward to today, I have taught hundreds of students to code and have had the privilege of
                        re-imagining the website for the bootcamp who taught me to code in the first place.
                    </p>
                    <p>
                        My main focus these days is designing and building pages for my clients. In my free time I{"'"}
                        ve been working on a real-time collaborative coding challenge platform for learners to level up
                        while seeking help from experienced developers.
                    </p>
                    <p>
                        On the off chance that I{"'"}m not glued to screens, I am either playing with my 3 crazy dogs,
                        cooking something spicy, or exploring nature with my fiancée.
                    </p>
                </div>
            </Section>
            <Section title="Experience">
                <ul className="mb-10 space-y-10">
                    <li>
                        <div>
                            <header>
                                <DateRange
                                    fromMeta="2022-08"
                                    fromMonth="Oct"
                                    fromYear="2022"
                                    toMeta="2023-11"
                                    toMonth="Nov"
                                    toYear="2023"
                                />
                                <h3 className="mb-2 text-lg font-medium">
                                    Developer @{" "}
                                    <LinkArrow
                                        title="Coding Temple"
                                        href="https://codingtemple.com"
                                        target="_blank"
                                    />
                                </h3>
                            </header>
                            <div className="space-y-4">
                                <p className="text-md text-stone-200/80">
                                    Delivered and maintained version 2.0 of the Coding Temple website. Worked closely
                                    with the marketing team to enhance SEO and improve accessibility, performance, and
                                    user experience.
                                </p>
                                <SkillsCloud
                                    skills={[
                                        "PHP",
                                        "WordPress",
                                        "MySQL",
                                        "TypeScript",
                                        "SCSS",
                                        "Figma",
                                        "Adobe Illustrator",
                                    ]}
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <header>
                                <DateRange
                                    fromMeta="2023-01"
                                    fromMonth="Jan"
                                    fromYear="2023"
                                    toMeta="2023-11"
                                    toMonth="Nov"
                                    toYear="2023"
                                />
                                <h3 className="mb-2 text-lg font-medium">
                                    Instructor @{" "}
                                    <LinkArrow
                                        title="Coding Temple"
                                        href="https://codingtemple.com"
                                        target="_blank"
                                    />
                                </h3>
                            </header>
                            <div className="space-y-4">
                                <p className="text-md text-stone-200/80">
                                    Taught students the fundamentals of full-stack web development. Designed and
                                    delivered lectures, assignments and assessments. Provided students with feedback on
                                    their work and helped them prepare for technical interviews.
                                </p>
                                <SkillsCloud
                                    skills={[
                                        "HTML",
                                        "CSS",
                                        "JavaScript",
                                        "TypeScript",
                                        "Python",
                                        "Flask",
                                        "SQL",
                                        "Git",
                                        "React.js",
                                    ]}
                                />
                            </div>
                        </div>
                    </li>
                </ul>
                <a
                    href="/Brendan Carlson - Resume.pdf"
                    download
                    className="group inline-flex items-center gap-x-1 font-medium hover:text-emerald-300"
                >
                    Download full résumé <DownloadIcon className="inline-block h-4 w-4" />
                </a>
            </Section>
            <Section title="Projects">
                <ul className="space-y-10">
                    <li>
                        <div>
                            <header>
                                <h4 className="mb-2 w-fit text-xs uppercase text-stone-400/80">Web Application</h4>
                                <h3 className="mb-2 text-lg font-medium">
                                    <LinkArrow
                                        title="CodeJourney"
                                        href="https://github.com/brendanjcarlson/codejourney"
                                        target="_blank"
                                    />
                                </h3>
                            </header>
                            <div className="space-y-4">
                                <p className="text-md text-stone-200/80">
                                    A gamified learning management system for novice developers to gain the skills
                                    needed to become a professional developer.
                                </p>
                                <Image
                                    src="/pocketpulse.jpg"
                                    alt="PocketPulse thumbnail"
                                    width={180}
                                    height={101}
                                    className="rounded-md border-2 border-stone-200/20"
                                />
                                <SkillsCloud skills={["Next.js", "TypeScript", "TailwindCSS", "Supabase"]} />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <header>
                                <h4 className="mb-2 w-fit text-xs uppercase text-stone-400/80">Web Application</h4>
                                <h3 className="mb-2 text-lg font-medium">
                                    <LinkArrow
                                        title="PokeBattler"
                                        href="https://github.com/brendanjcarlson/pokebattler"
                                        target="_blank"
                                    />
                                </h3>
                            </header>
                            <div className="space-y-4">
                                <p className="text-md text-stone-200/80">
                                    Catch your favorite Pokémon and battle them against other trainers.
                                </p>
                                <Image
                                    src="/pokebattler.jpg"
                                    alt="PokeBattler thumbnail"
                                    width={180}
                                    height={101}
                                    className="rounded-md border-2 border-stone-200/20"
                                />
                                <SkillsCloud skills={["Flask", "Python", "CSS", "PostgreSQL"]} />
                            </div>
                        </div>
                    </li>
                </ul>
            </Section>
            <Section title="Contact">
                <a
                    href="mailto:brendancarlson1125@gmail.com"
                    className="group inline-flex items-center gap-x-2 font-medium hover:text-emerald-300"
                >
                    Say hello! <EnvelopeOpenIcon className="inline-block h-4 w-4" />
                </a>
            </Section>
        </main>
    );
};

export default Page;
