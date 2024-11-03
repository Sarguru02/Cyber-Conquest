// @ts-ignore
import prisma from "@/lib/db"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
		})
	],
	secret: process.env.NEXTAUTH_SECRET ?? "secret",
	callbacks: {
		async signIn({ user, account, profile }) {
			try {
				await prisma.user.create({
					data: {
						email: user?.email ?? "",
						provider: "Google",
						name: user?.name ?? ""
					}
				})
			} catch (e) {

			}
			return true
		}
	}
})

export { handler as GET, handler as POST }
