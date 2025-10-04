import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Next.js App",
    description: "처음 만드는 Next.js + TS 프로젝트",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body>{children}</body>
        </html>
    );
}
