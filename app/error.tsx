'use client'

import {Flex, Heading, Theme} from "@radix-ui/themes";
import {Button} from "@/components/ui/button";
import React, {useEffect} from "react";

export default function GlobalError({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html>
            <body>
                <Theme
                    accentColor="mint"
                    grayColor="gray"
                    panelBackground="solid"
                    scaling="100%"
                    radius="medium"
                >
                    <main className="relative min-h-screen flex flex-col p-4">
                        <Flex className="flex flex-col justify-center items-center">
                            <Heading as="h1" className="font-bold text-2xl">Something went wrong!</Heading>
                            <Button
                                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                                onClick={
                                    () => reset()
                                }
                            >
                                Try again
                            </Button>
                        </Flex>
                    </main>
                </Theme>

            </body>
        </html>
    )
}