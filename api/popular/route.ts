import {Popular, Trending} from "@/type";
import {UseLazyFetch} from "@/api";

export async function getPopular() {
    try {
        const data = await UseLazyFetch('/movie/popular?language=en-US&page=1')

        const parsePopularData = data?.results?.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                overview: item.overview,
                posterPath: item.poster_path,
                backdropPath: item.backdrop_path,
                imdb_id: item.imdb_id,
                genres: item.genres,
                releaseDate: item.release_date,
                popularity: item.popularity,
                voteCount: item.vote_count,
                voteAverage: item.vote_average
            } as Popular
        })

        return Response.json(parsePopularData)
    } catch (err) {
        console.error(err)
        throw new Error('Api call failed')
    }

}

export async function getTrending() {
    try {
        const data = await UseLazyFetch('/trending/movie/day?language=en-US')

        const parseTrendingData = data?.results?.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                overview: item.overview,
                posterPath: item.poster_path,
                backdropPath: item.backdrop_path,
                imdb_id: item.imdb_id,
                genres: item.genres,
                releaseDate: item.release_date,
                popularity: item.popularity,
                voteCount: item.vote_count,
                voteAverage: item.vote_average
            } as Trending
        })

        return Response.json(parseTrendingData)
    } catch (err) {
        console.error(err)
        throw new Error('Api call failed')
    }

}