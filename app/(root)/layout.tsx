import '../globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import Topbar from '@/components/shared/Topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PeopleLink',
  description: 'A Next.js 13 Meta PeopleLink App',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
