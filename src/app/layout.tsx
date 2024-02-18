import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Goal, HeartPulse } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-full bg-[#fff]`}>
        <div className="border-r-[1px] border-r-[#d3d3d3] w-[224px] flex-none bg-slate-300">
          <h1 className="text-center py-2">
            <Link href="/">
              <span className="font-bold">Mad About Running</span>
            </Link>
          </h1>
          <nav className="w-full pt-2 border-t px-2">
            <ul className="flex flex-col h-full gap-1">
              <li>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/calendar">
                    <Calendar />
                    <span className="pl-1 mr-auto">캘린더</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="heatlh">
                    <HeartPulse />
                    <span className="pl-1 mr-auto">운동능력</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="w-full">
                  <Link href="/match">
                    <Goal />
                    <span className="pl-1 mr-auto">대회 결과</span>
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <main className="flex w-full min-h-screen flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
