import { supabase } from "$lib/supaBaseClient";

export async function load() {
  const { data } = await supabase.from("blog-posts").select();
  return {
    posts: data ?? [],
  }
}
