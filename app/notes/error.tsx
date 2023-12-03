"use client";
import { useEffect } from "react";

// Error components must be Client components

function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex h-screen  w-full flex-col  items-center justify-center bg-slate-800 ">
			{/* <Image src={errorImg} alt="error" className="mb-8 w-56" /> */}
			<div
				className="flex w-full flex-col items-center
       justify-center bg-slate-50 px-4 py-2 shadow-md md:w-[30%]"
			>
				<h4 className="text-justify font-medium text-slate-400">
					ooooopps!! Something went wrong!!
				</h4>
				<button
					className="mt-3 min-w-fit rounded bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-700"
					onClick={() => reset()}
				>
					Let&apos;s try again
				</button>
			</div>
		</div>
	);
}
export default Error;
