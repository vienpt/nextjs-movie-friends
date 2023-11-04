import React from "react";
import {Flex, Heading, ScrollArea} from "@radix-ui/themes";

interface Props {
    children: React.ReactNode
    title: string
}
export default function PopularItem({ children, title }: Props) {

    return (
        <ScrollArea type="always" scrollbars="horizontal" style={{ height: 'auto', width: '100%' }}>
            <div>
                <Heading className="p-2" as="h3" size="6">
                    {title}
                </Heading>
                <Flex display="flex" p="2" pr="8" gap="4">
                    {children}
                </Flex>
            </div>
        </ScrollArea>
    )
}