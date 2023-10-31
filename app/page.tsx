"use client"
import {Flex, Button} from '@radix-ui/themes'
import {useRouter} from "next/navigation";

export default function Home() {
    const movieId = 1
    const router = useRouter()
  return (
    <Flex direction="column">
      Movies list page
        <Button onClick={() => router.push(`/movie/${movieId}`)}>Movie detail</Button>
    </Flex>
  )
}
