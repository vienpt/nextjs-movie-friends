import {getUpcoming} from "@/api/upcoming/route";
import {Flex, Grid, Heading} from "@radix-ui/themes";
import {Movie} from "@/type";
import React, {Suspense} from "react";
import MovieItem from "@/components/movie-item";
import Loading from "@/app/upcoming/loading";

async function fetchData() {
    const res = await getUpcoming()
    return res.json()
}

export default async function UpcomingPage() {
    const data = await fetchData()

    return (
        <>
            <Flex className="flex">
                <Heading className="p-2" as="h5" size="3">
                    From: {data.dates.minimum}
                </Heading>
                <Heading className="p-2" as="h5" size="3">
                    To: {data.dates.maximum}
                </Heading>
            </Flex>

            <Suspense fallback={<Loading />}>
                <Grid className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {data.parseTrendingData?.map((item: Movie) => (
                        <MovieItem key={item.id} movie={item} />
                    ))}
                </Grid>
            </Suspense>
        </>

    )
}