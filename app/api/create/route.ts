import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const session = await getServerSession();
	const user = await prisma.user.findFirst({
		where: {
			email: session?.user?.email ?? "",
		}
	})
	try {
		const gameId = crypto.randomUUID();
		await prisma.game.create({
			data: {
				id: gameId,
				hostId: user?.id ?? "",
			}
		})
		return NextResponse.json({ "message": "Game created successfully" })
	} catch (e) {
		return NextResponse.json({"message": "Nigga do it properly again"}, {status: 400})
	}
}
