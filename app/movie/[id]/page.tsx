"use client"

import {getMovieDetail} from "@/api/movies/[id]/route";
import {usePathname} from 'next/navigation'
import {useEffect, useState} from "react";
import {Genres, MovieDetail} from "@/type";
import {Button, Grid, Heading, Inset, Section} from "@radix-ui/themes";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import SkeletonMovieDetail from "@/components/skeleton-movie-detail";

export default function MovieDetailPage() {
    const pathName = usePathname()
    const [data, setData] = useState<MovieDetail>()

    useEffect(() => {
        if (pathName) {
            const segmentId = +pathName.split('/')[2]
            if (!data) {
                getData(segmentId).then()
            }
        }
    }, [data, pathName])

    async function getData(id: number) : Promise<void> {
        try {
            const response = await getMovieDetail(id)
            const result = await response.json()
            setData(result)
        } catch(error) {
            if (error !== undefined) {
                throw new Error("Failed in some way")
            }
        }
    }

    return (
        <Section>
            {!data
                ?
                    <>
                        <SkeletonMovieDetail />
                    </>
                :
                    <>
                        <Grid className="grid md:grid-cols-3 grid-cols-1 gap-5">
                            <div className="md:col-span-1">
                                <Card>
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <Image
                                            alt={`${data?.title}`}
                                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_DOMAIN_ORIGINAL}/${data?.backdropPath}`}
                                            width={960}
                                            height={500}
                                            placeholder={'empty'}
                                            priority
                                            quality={75}
                                            style={{
                                                borderRadius: '2%',
                                                border: '1px solid #fff',
                                                aspectRatio: '3/2',
                                                minHeight: 500,
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </Inset>
                                </Card>
                            </div>
                            <div className="md:col-span-2 h-[500px]">
                                <Card>
                                    <CardHeader>
                                        <Heading as="h1" size="9">{data?.title}</Heading>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col space-y-3">
                                            <Heading as="h3" size="5">Description</Heading>
                                            <p>{data?.overview}</p>
                                            <Heading as="h3" size="5">Genres</Heading>
                                            <div className="inline-flex space-x-1">
                                                {data.genres?.map((genre: Genres, index: number) => (
                                                    <div key={genre.id}>
                                                        {genre.name}
                                                        {index < data.genres.length - 1 && ','}
                                                    </div>
                                                ))}
                                            </div>
                                            <Heading as="h3" size="5">Release date</Heading>
                                            <p className="mr-5">{data?.releaseDate}</p>
                                            <Heading as="h3" size="5">Popularity</Heading>
                                            <p>{`${data?.popularity.toFixed(0)}k`}</p>
                                            <Heading as="h3" size="5">IMDB.COM</Heading>

                                            <Button className="flex w-32">
                                                <Link href={`${process.env.NEXT_PUBLIC_IMDB_URL}/title/${data?.imdb_id}`} target="_blank">
                                                    View imdb
                                                </Link>
                                            </Button>

                                        </div>

                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </>
            }

        </Section>
    )
}