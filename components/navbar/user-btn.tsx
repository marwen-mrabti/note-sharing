"use client";

import { useAuthContext } from "@/context/auth-context";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function UserBtn() {
	const { user, logOut } = useAuthContext();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="cursor-pointer">
				<div className="flex items-center gap-2">
					{user?.photoURL && user?.displayName && (
						<Image
							src={user?.photoURL}
							alt={user?.displayName}
							width="32"
							height="32"
							className="rounded-full"
						/>
					)}
					<span className="text-sm font-semibold">{user?.displayName}</span>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-24">
				<DropdownMenuItem
					className="cursor-pointer disabled:cursor-not-allowed"
					onClick={() => {
						logOut();
						redirect("/");
					}}
				>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
