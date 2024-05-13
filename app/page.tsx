export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center font-4">
      <h1>Welcome</h1>
      <h3>You can find the component - route mappings below</h3>
      <ol>
        <li>Board - /game</li>
        <li>Participant Entry - /entry</li>
      </ol>
    </main>
  );
}
