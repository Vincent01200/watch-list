"use server"

import { cookies } from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs"
import {revalidatePath} from "next/cache"

export async function updateWatch(formData) {
    const id = formData.get('id')
    const brand = formData.get('brand')
    const model = formData.get('model')
    const referenceNumber = formData.get('referenceNumber')

    const cookieStore = cookies()
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data: {session}} = await supabase.auth.getSession()
    const user = session?.user

    if(!user){
        console.error('User is not authenticating to watch')
        return;
    }

    const {data,error} = await supabase
    .from('watches')
    .update(
        {
            brand,
            model,
            reference_number: referenceNumber,
        }
    ).match({id, user_id : user.id})

    if(error){
        console.error('error updating watch', error)
        return
    }

    revalidatePath('/watch-list')

    return {message: 'success'}


}