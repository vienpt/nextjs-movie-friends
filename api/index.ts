
const headers = {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`
}

export async function UseLazyFetch(pathRequest: string, method = 'GET') {
    const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3

    const res = await fetch(`${apiUrl}${pathRequest}`, {
        method: method,
        headers: headers
    })

    const data = await res.json()

    if (!data) {
        return new Response(
            JSON.stringify({ message:  data.status_message }),
            { status: res.status }
        )
    }

    return data
}