import { createClient } from '@/utils/supabase/server'
import {NextRequest, NextResponse} from 'next/server'
import { cookies } from 'next/headers'

export async function getExchangeCodeForSession(request: NextRequest) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    if (code) {
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_REDIRECT_TO))
}
