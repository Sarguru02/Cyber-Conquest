import CreateGame from "./createGame";
import JoinGame from "./joinGame";
import "./styles.css"
import TabsDemo from "./test/page";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center w-screen h-screen">
			<h1 className="text-4xl">Welcome</h1>
			<br />
			<h3>You can find the component - route mappings below</h3>
			<br />
			<br />
			<ol>
				<li>Lobby - /lobby ( Supposedly the first page in the game )</li>
				<li>Board - /game</li>
				<li>Participant Entry - /entry</li>
			</ol>
			<TabsDemo />
		</main>
	);
}
