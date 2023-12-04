"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function RadioCards() {
	const fibonacci = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"];
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<span className="text-sm font-semibold">Choose your card 👇 </span>
			<ul className="flex items-center justify-center gap-2">
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
