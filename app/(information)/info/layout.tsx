import type { Metadata } from 'next';

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
      <body className={`antialiased overflow-hidden`} style={{ fontFamily: 'Inter' }}>
        <div className="bg-background flex h-screen flex-col items-center gap-2.5 p-2.5 text-white">
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}