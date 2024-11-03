"use client";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Plus, Users } from 'lucide-react'
import React, { useState } from 'react'

const page = () => {
	const [gameCode, setGameCode] = useState('')
	function createGame(){
		console.log("Create game function is called")
	}
	return (
		<div className="min-h-screen container mx-auto p-4 mt-8 w-1/2">
			<div className="grid grid-cols-1 gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Create Game</CardTitle>
						<CardDescription>Start a new game</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Create a new game and invite your friends to join.
						</p>
					</CardContent>
					<CardFooter>
						<Button className="w-full" onClick={createGame}>
							<Plus className="mr-2 h-4 w-4" />
							Create New Game
						</Button>
					</CardFooter>
				</Card>
				<div className="inline-flex items-center justify-center w-full">
					<hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
						<div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
						OR
						</div>
				</div>


				<Card>
					<CardHeader>
						<CardTitle>Join Game</CardTitle>
						<CardDescription>Enter an existing game</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-col space-y-4">
							<Input
								placeholder="Enter game code"
								value={gameCode}
								onChange={(e) => setGameCode(e.target.value)}
							/>
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full" disabled={!gameCode}>
							<Users className="mr-2 h-4 w-4" />
							Join Game
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}

export default page
