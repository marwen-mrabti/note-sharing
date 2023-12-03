import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { AuthContextProvider } from "@/context/auth-context";

export const metadata: Metadata = {
	title: "note-sharing",
	description: "A note sharing app built with Next.js and Firebase"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} container mx-auto`}>
				<AuthContextProvider>{children}</AuthContextProvider>
			</body>
		</html>
	);
}
