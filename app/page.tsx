import {Button, Grid, Inset} from '@radix-ui/themes'
import {getMovie} from "@/api/movies/route";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import {Movie} from "@/type";
import Image from "next/image";

async function fetchData() {
    const res = await getMovie()
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function Home() {
    const data = await fetchData()

    return (
        <Grid className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {data.map((item: Movie) => (
                <Card key={item.id} className="flex flex-col justify-between">
                    <Inset clip="border-box" side="top" pb="current">
                        <Image
                            alt={item.title}
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_DOMAIN_ORIGINAL}${item.posterPath}`}
                            width={800}
                            height={500}
                            placeholder={'empty'}
                            priority={true}
                            quality={75}
                            style={{
                                borderRadius: '2% 2% 0 0',
                                border: '1px solid #fff',
                                height: 350,
                                objectFit: 'cover'
                            }}
                        />
                    </Inset>
                    <CardContent>
                        <div className="pt-6 space-y-3">
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription className="truncate">{item.overview.slice(0, 100)}</CardDescription>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Link href={`/movie/${item.id}`}>
                            <Button>
                                View Movie
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}

        </Grid>
  )
}
