import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Input } from '@/components/ui/input'
import {Label} from "@/components/ui/label";
import {Button} from "@radix-ui/themes";

export default function Login({
    searchParams,
}: {
    searchParams: { message: string }
}) {
    const signIn = async (formData: FormData) => {
        'use server'

        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            return redirect('/login?message=Could not authenticate user')
        }

        return redirect('/')
    }

    const signUp = async (formData: FormData) => {
        'use server'

        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${process.env.NEXT_PUBLIC_REDIRECT_TO}/auth/callback`,
            },
        })

        if (error) {
            return redirect('/login?message=Could not authenticate user')
        }

        return redirect('/login?message=Check email to continue sign in process')
    }

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <form
                className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
                action={signIn}
            >
                <Label className="text-md" htmlFor="email">
                    Email
                </Label>
                <Input
                    className="rounded-md px-4 py-2 border mb-6"
                    name="email"
                    placeholder="you@example.com"
                    required
                />
                <Label className="text-md" htmlFor="password">
                    Password
                </Label>
                <Input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                />
                <Button color="mint" size="3" variant="soft">
                    Login
                </Button>
                <Button
                    formAction={signUp}
                    size="3"
                    variant="outline"
                >
                    Sign Up
                </Button>
                {searchParams?.message && (
                    <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                        {searchParams.message}
                    </p>
                )}
            </form>
        </div>
    )
}
