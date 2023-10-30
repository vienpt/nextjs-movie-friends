import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Button>Click me</Button>
        <Link href={'/'}>Home page</Link>
        <Link href={'/movie'}>Movies</Link>
        <Link href={'/popular'}>Popular</Link>
        <Link href={'/upcoming'}>Upcoming</Link>
    </main>
  )
}
