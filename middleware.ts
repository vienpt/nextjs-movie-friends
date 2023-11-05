import {type NextRequest, NextResponse} from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request)

    const { data } = await supabase.auth.getSession()
    if (!data.session?.access_token) {
        const url = request.nextUrl

        url.pathname = '/auth/unauthenticated'
        return NextResponse.rewrite(url)
    }

    return response
}

export const config = {
    matcher: ['/movie/:path*', '/popular/:path*', '/upcoming/:path*'],
}
