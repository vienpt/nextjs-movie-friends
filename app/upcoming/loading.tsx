import SkeletonLoading from "@/components/skeleton-loading";
import {Grid} from "@radix-ui/themes";

export default function Loading() {

    return (
        <Grid className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {"abcdefghiopasdfghjkl".split('').map(i => (
                <SkeletonLoading key={i} />
            ))}
        </Grid>

    )
}