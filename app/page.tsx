import AppBar from "@/components/AppBar";
import "./styles.css";
import Redirect from "@/components/Redirect";
import LandingPage from "@/components/landing-page";

export default function Home() {
	return (
		<main>
			<Redirect />
			<LandingPage />
		</main>
	);
}
