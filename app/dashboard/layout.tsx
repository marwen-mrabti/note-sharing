import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "note-sharing | notes"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col gap-6 overflow-x-hidden ">
			<Navbar />
			{children}
		</div>
	);
}
