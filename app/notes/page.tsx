"use client";

import { useAuthContext } from "@/context/auth-context";
import { redirect } from "next/navigation";

export default function NotesPage() {
	const { user } = useAuthContext();

	if (!user) {
		redirect("/");
	}

	return <div>note page</div>;
}
