import {getPopular} from "@/api/popular/route";
import {Button, Flex, Grid, Heading, Inset, ScrollArea} from "@radix-ui/themes";
import React from "react";
import {Popular} from "@/type";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import Link from "next/link";

async function fetchData() {
    const res = await getPopular()
    return res.json()
}

export default async function PopularPage() {
    const data = await fetchData()

    return (
        <Grid columns="undefined" gap="8">
            <ScrollArea type="always" scrollbars="horizontal" style={{ height: 'auto', width: '100%' }}>
                <div>
                    <Heading className="p-2" as="h3" size="6">Popular movies</Heading>
                    <Flex display="flex" p="2" pr="8" gap="4">
                        {data.parsePopularData.map((item: Popular) => (
                            <Card key={item.id} className="flex flex-col justify-between w-[350px]">
                                <Inset clip="border-box" side="top" pb="current">
                                    <Image
                                        alt={item.title}
                                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_DOMAIN_ORIGINAL}${item.posterPath}`}
                                        width={800}
                                        height={500}
                                        placeholder={'empty'}
                                        priority={true}
                                        quality={75}
                                        style={{
                                            borderRadius: '2% 2% 0 0',
                                            border: '1px solid #fff',
                                            height: 350,
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Inset>
                                <CardContent>
                                    <div className="pt-6 space-y-3">
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription className="truncate">{item.overview.slice(0, 100)}</CardDescription>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Link href={`/movie/${item.id}`}>
                                        <Button>
                                            View Movie
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </Flex>
                </div>

            </ScrollArea>

            <ScrollArea type="always" scrollbars="horizontal" style={{ height: 'auto', width: '100%' }}>
                <div>
                    <Heading className="p-2" as="h3" size="6">Trending movies</Heading>
                    <Flex display="flex" p="2" pr="8" gap="4">
                        {data.parseTrendingData?.map((item: Popular) => (
                            <Card key={item.id} className="flex flex-col justify-between w-[350px]">
                                <Inset clip="border-box" side="top" pb="current">
                                    <Image
                                        alt={item.title}
                                        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_DOMAIN_ORIGINAL}${item.posterPath}`}
                                        width={800}
                                        height={500}
                                        placeholder={'empty'}
                                        priority={true}
                                        quality={75}
                                        style={{
                                            borderRadius: '2% 2% 0 0',
                                            border: '1px solid #fff',
                                            height: 350,
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Inset>
                                <CardContent>
                                    <div className="pt-6 space-y-3">
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription className="truncate">{item.overview.slice(0, 100)}</CardDescription>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Link href={`/movie/${item.id}`}>
                                        <Button>
                                            View Movie
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </Flex>
                </div>

            </ScrollArea>
        </Grid>
    )
}