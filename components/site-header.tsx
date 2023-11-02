import {Box, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {getProfile} from "@/api/profile/route";
import {Profile} from "@/type";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";

export async function fetchData() {
    const res = await getProfile()
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function SiteHeader() {
    const data = await fetchData() as Profile
    return (
        <Flex direction="row" justify="between" align="center">
            <Flex display="inline-flex" gap="3">
                <Link href="/">logo here</Link>
                <Link href={'/popular'}>Popular</Link>
                <Link href={'/upcoming'}>Upcoming</Link>
            </Flex>
            <Flex className="inline-flex items-center space-x-3">
                <Popover>
                    <PopoverTrigger>
                        <Avatar>
                            <AvatarImage src={``} alt="profile avatar" />
                            <AvatarFallback>{data.userName?.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-40">
                        <div className="p-0.5">
                            <p>{data.userName}</p>
                        </div>
                    </PopoverContent>
                </Popover>


                <Button>Login</Button>
            </Flex>

        </Flex>
    )
}