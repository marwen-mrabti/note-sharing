"use client";

import { db } from "@/lib/firebase/firebase.config";
import { cn } from "@/lib/utils";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export default function RadioCards({
	player
}: {
	player: { username: string | null; note: string; id: string };
}) {
	const fibonacci = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"];
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const handleRadioChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(e.target.value);

		await updateDoc(doc(db, "PokerPlanning", player.id), {
			note: e.target.value
		});
	};

	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<span className="text-sm font-semibold">Choose your card 👇 </span>
			<ul className="flex flex-wrap items-center  justify-start gap-2 md:justify-center">
				{fibonacci.map((item) => (
					<li key={item}>
						<label
							className={cn(
								"flex h-20 w-12 cursor-pointer items-center justify-center rounded-lg border-2 border-blue-900  bg-blue-100 font-bold hover:-translate-y-2 hover:-rotate-3 hover:bg-blue-200",
								{
									"border-blue-900": selectedValue !== item,
									"-translate-y-4 -rotate-6 border-red-500": selectedValue === item
								}
							)}
						>
							<input
								type="radio"
								name="fibonacci"
								value={item}
								onChange={handleRadioChange}
								checked={selectedValue === item}
								className="absolute hidden"
							/>
							{item}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}
