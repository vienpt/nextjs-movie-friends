import {Inset} from "@radix-ui/themes";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function SkeletonLoading() {
    return (
        <Card className="flex flex-col justify-between">
            <Inset clip="border-box" side="top" pb="current">
                <Skeleton className="w-[500px] h-[350px]" />
            </Inset>
            <CardContent>
                <div className="pt-6 space-y-3">
                    <Skeleton className="w-[250px] h-[20px]" />
                    <Skeleton className="w-[350px] h-[40px]" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Skeleton className="w-[150px] h-[20px]" />
            </CardFooter>
        </Card>
    )
}