import {Button, Flex, Heading} from "@radix-ui/themes";
import Link from "next/link";
import AuthButton from "@/components/auth-button";

export default function SiteHeader() {
    return (
        <Flex direction="row" justify="between" align="center">
            <Flex className="flex flex-wrap items-center gap-3">
                <Link href="/">
                    <Heading as="h1" size="3" color="mint">Movie Friends</Heading>
                </Link>
                <Link href={'/popular'}>
                    <Heading as="h1" size="3">Popular</Heading>
                </Link>
                <Link href={'/upcoming'}>
                    <Heading as="h1" size="3">Upcoming</Heading>
                </Link>
            </Flex>
            <Flex className="inline-flex items-center space-x-3">
                <AuthButton />
            </Flex>
        </Flex>
    )
}