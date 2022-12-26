import "../styles/globals.css";

import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-ubuntu",
});

export default function MyApp({ Component, pageProps }) {
	return (
		<main className={`${ubuntu.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	);
}
