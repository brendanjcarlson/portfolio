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
            className="min-h-screen overflow-x-hidden scroll-smooth bg-stone-900 leading-relaxed text-stone-100 antialiased"
        >
            <body className={`${open_sans.className} min-h-screen overflow-x-hidden`}>{children}</body>
        </html>
    );
}
