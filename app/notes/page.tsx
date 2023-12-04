"use client";

import ActivePlayers from "@/components/note/active-players";
import RadioCards from "@/components/note/radio-cards";
import TableCard from "@/components/note/table-card";
import { useAuthContext } from "@/context/auth-context";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function NotesPage() {
	const { user } = useAuthContext();

	useEffect(() => {
		if (!user) {
			redirect("/");
		}
	}, [user]);

	const activePlayers = [
		{ id: "1", player: "player1", note: "1" },
		{ id: "2", player: "player2", note: "5" },
		{ id: "3", player: "player3", note: "8" },
		{ id: "4", player: "player4", note: "3" },
		{ id: "5", player: "player5", note: "13" }
	];

	return (
		<div className="container relative flex flex-col gap-6 px-4 py-4 md:min-h-[85dvh] md:items-center md:justify-between md:px-6">
			<div className="flex w-full flex-col items-center justify-around gap-2">
				{activePlayers.length === 1 ? (
					<div className="flex flex-col items-center">
						<span className="text-sm font-medium">feeling lonely?😴 </span>
						<Link href="#" className="text-sm font-medium text-blue-400">
							Invite players{" "}
						</Link>
					</div>
				) : null}
				<TableCard />
				<ActivePlayers activePlayers={activePlayers} />
			</div>

			<RadioCards />
		</div>
	);
}
