import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/provider";
import AppBar from "@/components/AppBar";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
	title: "Cyber Conquest - TALOS",
	description:
		"A custom Monopoly created by Sargurunathan and Naveen Kumar for a National Technical Symposium TALOS of Chennai Institute of Technology",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body className={cn('bg-background')}>
					<Providers>
						<AppBar />
						{children}
					</Providers>
				</body>
			</html>
		</>
	);
}
