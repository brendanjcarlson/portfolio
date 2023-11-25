import "@/lib/styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brendan J. Carlson",
    description: "Designer. Developer. Educator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className="min-h-screen overflow-x-hidden scroll-smooth bg-indigo-950 leading-relaxed text-white"
        >
            <body className={`${open_sans.className} flex min-h-screen flex-col overflow-x-hidden`}>{children}</body>
        </html>
    );
}
