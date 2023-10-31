import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '@radix-ui/themes/styles.css'
import React from "react";
import {Box, Theme } from '@radix-ui/themes'
import SiteHeader from "@/components/site-header";

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
      <body className={inter.className}>
        <Theme
            accentColor="mint"
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            radius="medium"
        >
          <main className="relative flex flex-col min-h-screen max-w-screen-xl p-4">
            <SiteHeader />
            <Box display="block" className="py-10">{children}</Box>
          </main>
        </Theme>
      </body>
    </html>
  )
}
