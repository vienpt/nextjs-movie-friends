import {MovieDetail} from "@/type";
import {UseLazyFetch} from "@/api";

export async function getMovieDetail(id : number) : Promise<Response> {
    try {
        const data = await UseLazyFetch(`/movie/${id}?language=en-US`)

        const parseMovieDetailData = {
            ...data,
            id: data.id,
            title: data.title,
            overview: data.overview,
            posterPath: data.poster_path,
            backdropPath: data.backdrop_path,
            imdb_id: data.imdb_id,
            genres: data.genres,
            releaseDate: data.release_date,
            popularity: data.popularity
        } as MovieDetail

        return Response.json(parseMovieDetailData)
    } catch (err) {
        console.error(err)
        throw new Error('Api call failed')
    }
}