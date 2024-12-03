import type { Metadata } from "next";
import "./globals.css";
import { Onest, Unbounded} from "next/font/google"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'


const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
})

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Yap",
  description: "Inspired by the old days of chat rooms, Yap is a modern take on a chat room. It's a place to hang out, chat, and meet new people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} ${unbounded.variable} antialiased h-dvh`}
      >
        <main className="bg-background h-full flex flex-col w-full text-white gap-6 py-4 font-onest"> 
        <section className="flex-1 max-w-7xl mx-auto w-full">
      {/* Update this card */}
    <Card className="w-full mx-auto h-full flex flex-col">
    {children}
    </Card>
  </section>
          
        </main>
      </body>
    </html>
  );
}
