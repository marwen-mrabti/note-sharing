import { cn } from "@/lib/utils";
import { UserBtn } from "./user-btn";

export default function Navbar() {
	return (
		<div className="sticky top-0 flex w-full items-center justify-between rounded-sm px-6 py-4 shadow-md">
			<h1 className={cn("text-2xl font-bold hover:text-blue-800", "logo")}>GeniusTalk</h1>
			<UserBtn />
		</div>
	);
}
