import {Movie} from "@/type";

export async function getMovie() {
    const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3
    const res = await fetch(`${apiUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`
        },
    })
    const data = await res.json()
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
}