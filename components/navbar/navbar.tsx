import { cn } from "@/lib/utils";
import { UserBtn } from "./user-btn";

export default function Navbar() {
	return (
		<header className="fixed top-0 z-50 mx-auto flex w-full flex-wrap items-center  justify-between px-6 py-4 backdrop-blur-md md:sticky">
			<h1 className={cn("text-2xl font-bold hover:text-blue-800", "logo")}>GeniusTalk</h1>
			<UserBtn />
		</header>
	);
}
