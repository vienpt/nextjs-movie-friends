import {Popular, Trending} from "@/type";

export async function getPopular() {
    const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3

    try {
        const resPopular = await fetch(`${apiUrl}/movie/popular?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`
            },
        })

        const dataPopular = await resPopular.json()

        if (!dataPopular) {
            return new Response(
                JSON.stringify({ message: dataPopular.status_message }),
                { status: dataPopular.status }
            )
        }

        const parsePopularData = dataPopular?.results?.map((item: any) => {
            return {
                ...item,
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

        return Response.json({ parsePopularData })
    } catch (err) {
        console.error(err)
        throw new Error('Api call failed')
    }

}

export async function getTrending() {
    const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3

    try {
        const resTrending = await fetch(`${apiUrl}/trending/movie/day?language=en-US`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`
            },
        })

        const dataTrending = await resTrending.json()

        if (!dataTrending) {
            return new Response(
                JSON.stringify({ message:  dataTrending.status_message }),
                { status: dataTrending.status }
            )
        }

        const parseTrendingData = dataTrending?.results?.map((item: any) => {
            return {
                ...item,
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

        return Response.json({ parseTrendingData })
    } catch (err) {
        console.error(err)
        throw new Error('Api call failed')
    }

}