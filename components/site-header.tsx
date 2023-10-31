import {Box, Button, Flex, Grid} from "@radix-ui/themes";
import Link from "next/link";

export default function SiteHeader() {
    return (
        <Flex direction="row" justify="between" align="center">
            <Flex display="inline-flex" gap="3">
                <Link href="/">logo here</Link>
                <Link href={'/popular'}>Popular</Link>
                <Link href={'/upcoming'}>Upcoming</Link>
            </Flex>
            <Box>
                <Button>Login</Button>
            </Box>

        </Flex>
    )
}