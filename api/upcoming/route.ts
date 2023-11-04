import {Movie, Upcoming} from "@/type";

export async function getUpcoming() {
    const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3

    try {
        const res= await fetch(`${apiUrl}/movie/upcoming?language=en-US&page=1`, {
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
            )
        }

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