export type TPlayer = {
	id: string;
	username: string;
	note: string;
};

export default function ActivePlayers({ activePlayers }: { activePlayers: TPlayer[] }) {
	return (
		<ul className="flex flex-wrap items-center justify-start gap-4 md:justify-center">
			{activePlayers.map((item) => (
				<li key={item.id}>
					<PlayerCard player={item.username} note={item.note} />
				</li>
			))}
		</ul>
	);
}

const PlayerCard = ({ player, note }: { player: string; note: string }) => {
	return (
		<div className="flex flex-col items-center justify-around">
			<div className="flex h-24 w-16 flex-col items-center justify-center rounded-lg border-2 border-blue-500  bg-slate-100   ">
				<span className="font-bold">{note}</span>
			</div>
			<span className="font-bold ">{player}</span>
		</div>
	);
};
