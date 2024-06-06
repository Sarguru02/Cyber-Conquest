'use client'

import { useState } from "react";
import Connection from "./Connection";

/**
 * Look and feel like administrator panel
 * Work - to add and manage participants details
 * Must get all required details of participants (name, college, college location, year, ph.no, team name, mailid)
 * Parallel validation of details is necessary
 * Participants must to unique to Game ID
 * Participants data must be persisted somewhere
 *
 */


const Entry = () => {
	const [name, setName] = useState('');
	const [render, setRender] = useState(false);
	return (
		<>
			<input type="text" placeholder="Enter your name" onChange={e => setName(e.target.value)}/>
			<button onClick={() => setRender(true)}>Join</button>
			{render && <Connection name={name} type="Player"/>}
		</>
	)
};

export default Entry;
