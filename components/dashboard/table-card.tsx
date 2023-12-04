import { cn } from "@/lib/utils";
import { TPlayer } from "./active-players";
import Link from "next/link";

export default function TableCard({ activePlayers }: { activePlayers: TPlayer[] }) {
	const averageNote =
		activePlayers.reduce((acc, item) => {
			if (item.note === "?" || item.note === "☕") {
				return acc;
			}
			return acc + parseInt(item.note);
		}, 0) / activePlayers.length;

	return (
		<div className="flex w-full flex-col items-center justify-center  md:h-[30vh] ">
			{activePlayers.length === 1 ? (
				<div className="flex flex-col items-center">
					<span className="text-sm font-medium">feeling lonely?😴 </span>
					<Link href="#" className="text-sm font-medium text-blue-400">
						Invite players{" "}
					</Link>
				</div>
			) : null}
			<div className="h-[25dvh] w-full rounded-[3rem] bg-blue-100 md:w-2/3 ">
				<div className="flex h-full w-full flex-col items-center justify-center gap-3">
					<span className="text-3xl font-bold text-slate-800">Average Note</span>
					<span
						className={cn("text-2xl font-medium text-black", {
							"text-red-500": averageNote < 40,
							"text-blue-500": averageNote >= 40
						})}
					>
						{averageNote}
					</span>
				</div>
			</div>
		</div>
	);
}
