import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Hot-Taker',
	description: 'im gonna hot take this'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`} style={{ fontFamily: 'JetBrains Mono' }}>
				<div className="bg-background flex h-screen flex-col items-center justify-center gap-2.5 p-2.5 text-white">
					<div
						className={`flex h-12 w-full flex-row items-center justify-between rounded-3xl border border-gray-500 px-2.5`}
					>
						<h1 className="animate-bounce">i had sex last night 😎</h1>
						<div className="flex flex-row items-center gap-2.5">
							<h1 className="animate-ping">yo hellpo this is the account section</h1>
						</div>
					</div>
					<div className="flex h-full w-full flex-row justify-center gap-2.5">
						<div className={`h-full w-1/4 rounded-3xl border border-gray-500 p-2.5`}>
							<p>home recent idk</p>
						</div>
						<main className={`h-full w-1/4 rounded-3xl border border-gray-500 p-2.5`}>
							{children}
						</main>
						<div className={`h-full w-1/4 rounded-3xl border border-gray-500 p-2.5`}>
							<p>communitiess</p>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
