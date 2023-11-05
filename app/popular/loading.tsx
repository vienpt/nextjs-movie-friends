import SkeletonLoading from "@/components/skeleton-loading";
import {Flex, Heading, ScrollArea} from "@radix-ui/themes";
import React from "react";
import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <>
            <ScrollArea type="always" scrollbars="horizontal" style={{ height: 'auto', width: '100%' }}>
                <div>
                    <Heading className="p-2" as="h3" size="6">
                        <Skeleton className="w-[200px] h-[20px]" />
                    </Heading>
                    <Flex display="flex" p="2" pr="8" gap="4">
                        {"abcdefghiopasdfghjkl".split('').map(i => (
                            <SkeletonLoading key={i} />
                        ))}
                    </Flex>
                </div>
            </ScrollArea>

            <ScrollArea type="always" scrollbars="horizontal" style={{ height: 'auto', width: '100%' }}>
                <div>
                    <Heading className="p-2" as="h3" size="6">
                        <Skeleton className="w-[200px] h-[20px]" />
                    </Heading>
                    <Flex display="flex" p="2" pr="8" gap="4">
                        {"abcdefghiopasdfghjkl".split('').map(i => (
                            <SkeletonLoading key={i} />
                        ))}
                    </Flex>
                </div>
            </ScrollArea>
        </>
    )
}