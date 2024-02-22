import {createRouteHandlerClient} from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import {NextResponse} from "next/server" 

export async function GET(req){
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({cookies : () => cookieStore})

    const SearchParams = new URL(req.url)
    const code = SearchParams ('params')

    if(code) {
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(new URL('/watch-list', req.url))
}
