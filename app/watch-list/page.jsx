import { cookies } from "next/headers"
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import WatchForm from "../components/WatchForm"
import { deleteWatch } from "../server-actions/deleteWatch"
import EditWatch from "../components/EditWatch"

export default async function  WatchList(){
    const cookieStore = cookies()
    const supabase = createServerComponentClient({cookies: () => cookieStore})

    const {data:{session}} = await supabase.auth.getSession()
    const user = session?.user;

    const {data: watches, error} = await supabase
    .from('watches')
    .select('*')
    .eq('user_id', user.id)
    .order('brand', {ascending:true})

    if(error){
        console.error('Error fetching watches')
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-300">
            <div className="container p-5 mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Welcome To The Watch List
                    </h1>
                    <form action='/auth/signout' method="post">
                        <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-6">
                            Sign Out
                        </button>
                    </form>
                </div>
                <WatchForm/>
                <div className="mt-6">
                    {
                        watches.map((watch) => (
                            <div key={watch.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
                                <h2 className="font-bold text-2xl text-white">{watch.brand} - {watch.model}</h2>
                                <div className="flex">
                                    <form action={deleteWatch}>
                                        <input type="hidden" name="id" value={watch.id} />
                                        <button type="submit" className="bg-red-500  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </form>
                                    <EditWatch watch={watch}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}