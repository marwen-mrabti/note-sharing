"use client";

import { useAuthContext } from "@/context/auth-context";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function UserBtn() {
	const { user, logOut } = useAuthContext();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="cursor-pointer">
				{user?.photoURL && user?.displayName && (
					<Image
						src={user?.photoURL}
						alt={user?.displayName}
						width="40"
						height="40"
						className="rounded-full"
					/>
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-48">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem disabled className="cursor-pointer disabled:cursor-not-allowed">
						Profile
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
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
