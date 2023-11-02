import {Grid, Inset, Section} from "@radix-ui/themes";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";


export default function SkeletonMovieDetail() {
    return (
        <Section>
            <Grid className="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div className="md:col-span-1">
                    <Card>
                        <Inset clip="padding-box" side="top" pb="current">
                            <Skeleton className="w-[500px] h-[350px]" />
                        </Inset>
                    </Card>
                </div>
                <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <Skeleton className="w-[500px] h-[50px]" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col space-y-3">
                                <Skeleton className="w-[200px] h-[30px]" />
                                <Skeleton className="w-[200px] h-[30px]" />
                                <Skeleton className="w-[200px] h-[30px]" />
                                <Skeleton className="w-[200px] h-[30px]" />
                                <Skeleton className="w-[200px] h-[30px]" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Grid>
        </Section>
    )
}