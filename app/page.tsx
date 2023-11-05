import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export default async function Home() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const user = await supabase.auth.getUser()
    if (user) {
        redirect('/movie')
    }
}
