"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { SignInBtn } from "@/components/signIn-btn";
import { useAuthContext } from "@/context/auth-context";
import { useEffect } from "react";

export default function HomePage() {
	const { user } = useAuthContext();

	useEffect(() => {
		if (user) {
			redirect("/notes");
		}
	}, [user]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between px-5 py-10 lg:p-24">
			<div className="flex items-center justify-center overflow-hidden rounded-md ">
				<Image
					src="/logo.png"
					alt="Genius Talks Logo"
					width="300"
					height="200"
					loading="lazy"
					className="h-auto max-w-full scale-100 rounded-md bg-cover bg-no-repeat align-middle transition-all duration-100 hover:scale-110"
				/>
			</div>
			<h1 className="text-2xl font-semibold text-slate-800">
				<span className="text-red-300"> Genius Talks</span> Note Sharing App
			</h1>
			<SignInBtn />
		</main>
	);
}
