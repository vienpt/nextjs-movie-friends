import {Grid} from '@radix-ui/themes'
import {getMovie} from "@/api/movies/route";
import {Movie} from "@/type";
import MovieItem from "@/components/movie-item";
import React, {Suspense} from "react";
import Loading from "@/app/loading";

async function fetchData() {
    const res = await getMovie()
    return res.json()
}
export default async function Home() {
    const data = await fetchData()

    return (
        <Suspense fallback={<Loading />}>
            <Grid className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {data.map((item: Movie) => (
                    <MovieItem key={item.id} movie={item} />
                ))}
            </Grid>
        </Suspense>
  )
}
