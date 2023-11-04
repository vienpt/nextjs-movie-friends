import {getPopular, getTrending} from "@/api/popular/route";
import {Grid} from "@radix-ui/themes";
import React, {Suspense} from "react";
import {Popular} from "@/type";
import MovieItem from "@/components/movie-item";
import PopularItem from "@/components/popular-item";
import Loading from "@/app/popular/loading";

async function fetchPopularData() {
    const res = await getPopular()
    return res.json()
}

async function fetchTrendingData() {
    const res = await getTrending()
    return res.json()
}

export default async function PopularPage() {
    const popularData = await fetchPopularData()
    const trendingData = await fetchTrendingData()

    const [popular, trending] = await Promise.all([popularData, trendingData])

    return (
        <Grid columns="undefined" gap="8">
            <PopularItem title="Popular movies">
                <Suspense fallback={<Loading />}>
                    {popular.parsePopularData.map((item: Popular) => (
                        <MovieItem key={item.id} movie={item} className={'w-[350px]'} />
                    ))}
                </Suspense>
            </PopularItem>

            <PopularItem title="Trending movies">
                <Suspense fallback={<Loading />}>
                    {trending.parseTrendingData?.map((item: Popular) => (
                        <MovieItem key={item.id} movie={item} className={'w-[350px]'} />
                    ))}
                </Suspense>
            </PopularItem>
        </Grid>
    )
}