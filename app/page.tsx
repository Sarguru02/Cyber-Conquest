export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1>Welcome</h1>
      <br />
      <h3>You can find the component - route mappings below</h3>
      <br />
      <br />
      <ol>
        <li>Lobby - /lobby ( Supposedly the first page in the game )</li>
        <li>Board - /game</li>
        <li>Participant Entry - /entry</li>
      </ol>
    </main>
  );
}
