
const headers = {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`
}
const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3
let controller

export async function UseLazyFetch(pathRequest: string, method = 'GET') {
    controller = new AbortController()
    const signal = controller.signal

    const res = await fetch(`${apiUrl}${pathRequest}`, {
        method: method,
        headers: headers,
        signal
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