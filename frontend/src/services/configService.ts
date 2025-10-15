import { createClient } from "@supabase/supabase-js"

const supaUrl = "https://gdrnntpreclbzticikug.supabase.co"
const supaKey = "sb_publishable_GC9PIFj_6a7QZKprRSzElA__iG5wucb"


export const client = createClient(supaUrl,supaKey);

