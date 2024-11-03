'use client'
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export default function LandingPage() {

	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-foreground p-4">
			<main className="text-center">
				<h1 className="text-4xl font-bold mb-6">Cyber Conquest</h1>
				<p className="text-lg mb-8">A game of strategy and technology</p>
				<Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => signIn()}>
					Sign In
				</Button>
			</main>

			<footer className="absolute bottom-4 text-sm text-muted-foreground">
				Created by students from Chennai Institute of Technology
			</footer>
		</div>
	)
}
