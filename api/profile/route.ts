import {Profile} from "@/type";

export async function getProfile() {
    const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL_VER_3
    const res = await fetch(`${apiUrl}/account/${process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID}`, {
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

    const parseProfileData = {
        id: data.id,
        userName: data.username,
        avatar: data.avatar
    } as Profile

    return Response.json(parseProfileData)
}