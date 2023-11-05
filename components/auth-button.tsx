import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {Button} from "@radix-ui/themes";

export default async function AuthButton() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const {data: { user }} = await supabase.auth.getUser()

    const signOut = async () => {
        'use server'

        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        await supabase.auth.signOut()
        return redirect('/login')
    }

    return user ? (
        <div className="flex flex-wrap items-center gap-4">
            Hey, {user.email}!
            <form action={signOut}>
                <Button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                    Logout
                </Button>
            </form>
        </div>
    ) : (
        <Link
            href="/login"
            className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
            Login
        </Link>
    )
}
