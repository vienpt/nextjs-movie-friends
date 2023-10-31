import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '@radix-ui/themes/styles.css'
import React from "react";
import {Box, Theme } from '@radix-ui/themes'
import SiteHeader from "@/components/site-header";
import {cn} from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieFriends',
  description: 'A dynamic web application for movie enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen mx-auto max-w-screen-xl")}>
        <Theme
            accentColor="mint"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="medium"
        >
          <main className="relative min-h-screen flex flex-col p-4">
            <SiteHeader />
            <Box display="block" className="py-10">{children}</Box>
          </main>
        </Theme>
      </body>
    </html>
  )
}
