"use server"

import {revalidatePath} from "next/cache"
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function addWatch(formData){
    const brand = formData.get('brand')
    const model = formData.get('model')
    const referenceNumber = formData.get('referencenumber')

    const cookieStore = cookies()
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data:{session}} = await supabase.auth.getSession()
    const user = session?.user

    if(!user) {
        console.error('User is not authenticated withing addWatch server action')
    }

    const {data,error} = await supabase 
    .from('watches')
    .insert([
        {
            brand,
            model,
            reference_number: referenceNumber,
            user_id: user.id
        }
    ] 
    )

    if(error) {
        console.error('Error inserting watch',error)
        return
    }

    revalidatePath('/watch-list')

    return {message: 'Successs'}
}