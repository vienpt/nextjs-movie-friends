import {MovieDetail} from "@/type";

export async function getMovieDetail(id : number) : Promise<Response> {
    const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3
    const res = await fetch(`${apiUrl}/movie/${id}?language=en-US`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`
        },
    })
    const data = await res.json()

    if (!data) {
        return new Response(
            JSON.stringify({ message: data.status_message }),
            { status: res.status }
        );
    }
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
}