import {getPopular} from "@/api/popular/route";
import {Grid} from "@radix-ui/themes";
import React from "react";
import {Popular} from "@/type";
import MovieItem from "@/components/movie-item";
import PopularItem from "@/components/popular-item";

async function fetchData() {
    const res = await getPopular()
    return res.json()
}

export default async function PopularPage() {
    const data = await fetchData()

    return (
        <Grid columns="undefined" gap="8">
            <PopularItem title="Popular movies">
                {data.parsePopularData.map((item: Popular) => (
                    <MovieItem key={item.id} movie={item} className={'w-[350px]'} />
                ))}
            </PopularItem>
            <PopularItem title="Trending movies">
                {data.parseTrendingData?.map((item: Popular) => (
                    <MovieItem key={item.id} movie={item} className={'w-[350px]'} />
                ))}
            </PopularItem>
        </Grid>
    )
}