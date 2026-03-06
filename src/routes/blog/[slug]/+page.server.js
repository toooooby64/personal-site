import { supabase } from "$lib/supaBaseClient";

export async function load({ params }) {
  const data = await supabase.from("blog-posts").select("content").eq('slug', params.slug).single()
  return {
    content: data?.data?.content
  }
}
