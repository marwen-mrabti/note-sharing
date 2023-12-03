import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
	// console.log(request.cookies);
	if (request.url !== "/") {
		NextResponse.redirect(new URL("/", request.url));
	}
	NextResponse.redirect(new URL("/notes", request.url));
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)", "/", "/notes"]
};
