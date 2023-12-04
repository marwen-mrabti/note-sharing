import { cn } from "@/lib/utils";
import { UserBtn } from "./user-btn";

export default function Navbar() {
	return (
		<header className=" sticky  top-0 z-50 mx-auto flex w-full flex-wrap  items-center justify-between py-4 backdrop-blur-md ">
			<h1 className={cn("text-2xl font-bold hover:text-blue-800", "logo")}>GeniusTalk</h1>
			<UserBtn />
		</header>
	);
}
