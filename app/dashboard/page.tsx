"use client";

import ActivePlayers, { TPlayer } from "@/components/dashboard/active-players";
import RadioCards from "@/components/dashboard/radio-cards";
import TableCard from "@/components/dashboard/table-card";
import { useAuthContext } from "@/context/auth-context";
import { db } from "@/lib/firebase/firebase.config";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DashboardPage() {
	const { user } = useAuthContext();

	useEffect(() => {
		if (!user) {
			redirect("/");
		}
	}, [user]);

	const [activePlayers, setActivePlayers] = useState([]);
	const [player, setPlayer] = useState({
		username: "",
		note: "",
		id: ""
	});

	const addPlayer = async () => {
		await addDoc(collection(db, "PokerPlanning"), {
			username: user?.displayName,
			note: "0"
		});
	};

	useEffect(() => {
		//listen for updates in the database
		const listenForUpdates = () => {
			const q = query(collection(db, "PokerPlanning"));
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				let playersArr: any = [];

				querySnapshot.forEach((doc) => {
					playersArr.push({ ...doc.data(), id: doc.id });
				});

				setActivePlayers(playersArr);
				const currentPlayer = playersArr.find(
					(item: TPlayer) => item.username === user?.displayName
				);

				if (!currentPlayer) {
					addPlayer();
					return;
				}

				setPlayer(currentPlayer);

				// Show a notification when data is updated
				toast.success("note updated!");
			});

			// Unsubscribe when the component unmounts
			return unsubscribe;
		};

		// Call the listenForUpdates function
		const unsubscribeFromUpdates = listenForUpdates();

		// Unsubscribe when the component unmounts
		return () => unsubscribeFromUpdates();
	}, [user?.displayName]);

	return (
		<div className="container relative mt-24 flex flex-col gap-6 px-4 py-4 md:mt-2 md:min-h-[85dvh] md:items-center md:justify-between md:px-6">
			<div className="flex w-full flex-col items-center justify-around gap-2 ">
				<TableCard activePlayers={activePlayers} />
				<ActivePlayers activePlayers={activePlayers} />
			</div>

			<RadioCards player={player} />
		</div>
	);
}
