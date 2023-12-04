"use client";

import { useAuthContext } from "@/context/auth-context";
import Image from "next/image";
import React from "react";

type TLoginBtnProps = {
	variant: "google" | "github";
	SignInHandler: () => {};
};

export const SignInBtn = () => {
	const { githubSignIn, googleSignIn } = useAuthContext();

	const handleSignInWithGoogle = async () => {
		try {
			googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignInWithGithub = async () => {
		try {
			githubSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-wrap items-center justify-center gap-4 bg-transparent">
			<LoginBtn variant="google" SignInHandler={handleSignInWithGoogle} />
			<LoginBtn variant="github" SignInHandler={handleSignInWithGithub} />
		</div>
	);
};

const LoginBtn = ({ variant, SignInHandler }: TLoginBtnProps) => {
	return (
		<button
			className="mx-auto flex w-[90%] items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-900 dark:text-white sm:w-fit"
			onClick={SignInHandler}
		>
			{variant === "google" ? (
				<>
					<Image src="/google.svg" alt="google" width={24} height={24} />
					<span>Sign In with Google</span>
				</>
			) : (
				<>
					<Image src="/github.svg" alt="github" width={24} height={24} />
					<span>Sign In with Github</span>
				</>
			)}
		</button>
	);
};
