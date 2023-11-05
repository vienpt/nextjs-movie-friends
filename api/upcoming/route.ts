import {Movie, Upcoming} from "@/type";
import {UseLazyFetch} from "@/api";

export async function getUpcoming() {
    try {
        const data = await UseLazyFetch('/movie/upcoming?language=en-US&page=1')

        const dates = data?.dates as Upcoming
        const parseTrendingData = data?.results?.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                overview: item.overview,
                posterPath: item.poster_path,
                backdropPath: item.backdrop_path
            }  as Movie
        })

        return Response.json({ dates, parseTrendingData})
    } catch(err) {
        console.error(err)
        throw new Error('Api call failed')
    }
}