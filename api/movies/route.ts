import {Movie} from "@/type";
import {UseLazyFetch} from "@/api";

export async function getMovie() {
    try {
        const data = await UseLazyFetch('/movie/now_playing?language=en-US&page=1')

        const parseMovieData = data?.results?.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                overview: item.overview,
                posterPath: item.poster_path,
                backdropPath: item.backdrop_path
            } as Movie
        })

        return Response.json(parseMovieData)
    } catch (err) {
        console.error(err)
        throw new Error("Api call failed")
    }
}