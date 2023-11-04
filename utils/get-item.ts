import { cache } from 'react'
import 'server-only'
import {getMovieDetail} from "@/api/movies/[id]/route";

export const getMovieItemById = cache(async (id: number | string) => {
    const res = await getMovieDetail(id as number)
    return res.json()
})