import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { AuthContextProvider } from "@/context/auth-context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "note-sharing",
	description: "poker planning app "
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} mx-auto w-screen max-w-7xl overflow-x-hidden `}>
				<AuthContextProvider>
					{children}
					<Toaster
						position="top-center"
						reverseOrder={false}
						gutter={8}
						containerClassName="z-50"
						toastOptions={{
							duration: 3000
						}}
					/>
				</AuthContextProvider>
			</body>
		</html>
	);
}
