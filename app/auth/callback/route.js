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



"use client"

import {Auth} from "@supabase/auth-ui-react"
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

export default function AuthForm() {
    const supabase = createClientComponentClient();

    // Placeholder for potential error state
    // const [error, setError] = useState(null);

    return(
        <Auth
            supabaseClient={supabase}
            showLinks={false}
            view="magic_link"
            providers={[]}
            redirectTo="https://watch-list-inky.vercel.app/auth/callback"
            appearance={{
                theme: 'dark',
                button: {
                    className: 'bg-white/40 text-gray-900 hover:bg-gray-600' // Adjusted for clarity
                },
                input: {
                    className: 'bg-gray-700 border-gray-600 text-white'
                }
            }}
            // onError={(error) => setError(error.message)} // Example error handling
        />
    );
}