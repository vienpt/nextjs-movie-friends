import {Button, Inset} from "@radix-ui/themes";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Movie} from "@/type";
import {cn} from "@/lib/utils";

interface Props {
    movie: Movie
    className?: string
}

export default function MovieItem({ movie, className }: Props) {

    return (
        <Card className={cn(className, 'flex flex-col justify-between')}>
            <Inset clip="border-box" side="top" pb="current">
                <Image
                    alt={movie?.title}
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_DOMAIN_ORIGINAL}${movie?.posterPath}`}
                    width={800}
                    height={500}
                    placeholder={'empty'}
                    priority={true}
                    quality={75}
                    style={{
                        borderRadius: '2% 2% 0 0',
                        border: '1px solid #fff',
                        height: 500,
                        aspectRatio: '3/2',
                        objectFit: 'cover'
                    }}
                />
            </Inset>
            <CardContent>
                <div className="pt-6 space-y-3">
                    <CardTitle>{movie?.title}</CardTitle>
                    <CardDescription className="truncate">{movie?.overview.slice(0, 100)}</CardDescription>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href={`/movie/${movie.id}`}>
                    <Button>
                        View Movie
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}