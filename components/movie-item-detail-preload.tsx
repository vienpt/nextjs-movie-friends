import {getMovieItemById} from '@/utils/get-item'

export const preloadMovieItemById = (id: number | string) => {
    void getMovieItemById(id)
}
export default async function Item({ id }: { id: number }) {
    return await getMovieItemById(id)
}