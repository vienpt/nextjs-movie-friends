import {getUpcoming} from "@/api/upcoming/route";
import {Button, Grid, Heading, Inset} from "@radix-ui/themes";
import {Movie} from "@/type";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchData() {
    const res = await getUpcoming()
    return res.json()
}

export default async function UpcomingPage() {
    const data = await fetchData()
    console.log('data', data)
    return (
        <>
            <div className="flex">
                <Heading className="p-2" as="h5" size="3">
                    From: {data.dates.maximum}
                </Heading>
                <Heading className="p-2" as="h5" size="3">
                    To: {data.dates.minimum}
                </Heading>

            </div>
            <Grid className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {data.parseTrendingData?.map((item: Movie) => (
                    <Card key={item.id} className="flex flex-col justify-between">
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

            </Grid>
        </>

    )
}