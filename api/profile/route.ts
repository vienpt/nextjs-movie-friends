import {Profile} from "@/type";
import {UseLazyFetch} from "@/api";

export async function getProfile() {
    try {
        const data = await UseLazyFetch(`/account/${process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID}`)

        const parseProfileData = {
            id: data.id,
            userName: data.username,
            avatar: data.avatar
        } as Profile

        return Response.json(parseProfileData)
    } catch (err) {
        console.error(err)
        throw new Error('Api call failed')
    }
}