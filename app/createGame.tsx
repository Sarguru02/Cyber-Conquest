"use client"
import React from "react";
import "./styles.css"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateGame() {
	const [name, setName] = React.useState('');

	function createGame() {
		console.log('Creating a new game');
		const ws = new WebSocket(`ws://localhost:42069/?type=host&name=${name}`);

		ws.onopen = () => {
			console.log('connected');
		}
		
		ws.onmessage = (e) => {
			console.log(e.data);
		}
	}

	return (
		<div className="flex w-full max-w-sm items-center space-x-2">
			<Input type="text" value={name} onChange={(e) => setName(e.target.value)} className="rounded-md text-xl p-[10px]" placeholder="Enter your name"/>
			<Button onClick={createGame} >Create</Button>
		</div>
	)
}
