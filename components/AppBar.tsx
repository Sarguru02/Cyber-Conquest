'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function AppBar() {
	const [darkMode, setDarkMode] = useState(true)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()
	const session = useSession();

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])

	const navItems = [
		{ name: 'Dashboard', href: '/dashboard' },
		{ name: 'My Games', href: '/my-games' },
		{ name: 'Leaderboard', href: '/leaderboard' },
	]

	return (
		<header className="border-b border-border">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center">
						<span className="text-2xl font-bold text-primary">Cyber Conquest</span>
					</Link>

					{/* Desktop Navigation */}
					{session.data?.user && <nav className="hidden md:flex space-x-4">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'
									}`}
							>
								{item.name}
							</Link>
						))}
					</nav>}

					<div className="flex items-center space-x-4">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setDarkMode(!darkMode)}
							className="text-foreground"
						>
							{darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
							<span className="sr-only">Toggle theme</span>
						</Button>

						{session.data?.user ? <Button variant="ghost" className="text-muted-foreground hidden md:inline-flex" onClick={() => signOut({callbackUrl: "http://localhost:3000/"})}>
							Sign Out
						</Button> :
							<Button variant="ghost" className="text-muted-foreground hidden md:inline-flex" onClick={() => signIn() }>
								Sign In
							</Button>
						}
						{/* Mobile menu button */}
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{session.data?.user && navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
									? 'bg-primary text-primary-foreground'
									: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
									}`}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}

						{session.data?.user ? <Button
							variant="ghost"
							className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
							onClick={() => {
								setIsMenuOpen(false)
								signOut({callbackUrl: "http://localhost:3000/"});
							}}
						>
							Sign Out
						</Button> :
							<Button
								variant="ghost"
								className="w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
								onClick={() => {
									setIsMenuOpen(false)
									signIn();
								}}
							>
								Sign In
							</Button>
						}
					</div>
				</div>
			)}
		</header>
	)
}
