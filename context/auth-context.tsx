"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase/firebase.config";
import {
	GoogleAuthProvider,
	GithubAuthProvider,
	User,
	onAuthStateChanged,
	signInWithPopup,
	signOut
} from "firebase/auth";

type TAuthContext = {
	user: User | null | undefined;
	googleSignIn: () => void;
	githubSignIn: () => void;
	logOut: () => void;
};

export const AuthContext = createContext<TAuthContext | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	const githubSignIn = () => {
		const provider = new GithubAuthProvider();
		signInWithPopup(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ user, googleSignIn, githubSignIn, logOut }}>
			{loading ? (
				<div className="flex min-h-screen w-full items-center justify-center text-3xl">
					Loading <span className="animate-pulse">...</span>
				</div>
			) : (
				children
			)}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (context === null) {
		throw new Error("useAuthContext must be used within AuthContextProvider");
	}

	return context;
};
