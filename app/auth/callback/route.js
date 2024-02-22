// import {createRouteHandlerClient} from "@supabase/auth-helpers-nextjs"
// import { cookies } from "next/headers"
// import {NextResponse} from "next/server" 

// export async function GET(req){
//     const cookieStore = cookies()
//     const supabase = createRouteHandlerClient({cookies : () => cookieStore})

//     const SearchParams = new URL(req.url)
//     const code = SearchParams ('params')

//     if(code) {
//         await supabase.auth.exchangeCodeForSession(code)
//     }

//     return NextResponse.redirect(new URL('/watch-list', req.url))
// }

import {createRouteHandlerClient} from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import {NextResponse} from "next/server" 

export async function GET(req){
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({cookies : () => cookieStore})

    // Correctly parse the URL and extract the 'code' parameter
    const url = new URL(req.url)
    const code = url.searchParams.get('code') // Assuming the parameter is named 'code'

    if(code) {
        await supabase.auth.exchangeCodeForSession(code)
    }

    // Redirect to '/watch-list'
    return NextResponse.redirect(new URL('/watch-list', req.url))
}