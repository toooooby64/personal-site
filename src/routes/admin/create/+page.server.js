/** @satisfies {import('./$types').Actions} */
import { redirect, fail } from '@sveltejs/kit'

export const load = async (event) => {
  const { session } = await event.locals.safeGetSession()

  if (!session) {
    redirect(303, '/admin/login')
  }
}

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData()
    const date = Date.now()
    const data = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      excerpt: formData.get('excerpt'),
      cover_image: formData.get('cover_image'),
      content: formData.get('content'),
      published: formData.get('published') === 'on'
    }

    const file = data.cover_image
    const buffer = new Uint8Array(await file.arrayBuffer())
    const filename = `${date}-${file.name}`

    const { error: uploadError } = await event.locals.supabase.storage
      .from('cover-images')
      .upload(filename, buffer, { contentType: file.type })

    if (uploadError) {
      return fail(500, { success: false, message: `Image upload failed: ${uploadError.message}` })
    }

    const { data: { publicUrl } } = event.locals.supabase.storage
      .from('cover-images')
      .getPublicUrl(filename)

    const { error: insertError } = await event.locals.supabase
      .from('blog-posts')
      .insert({
        published: data.published,
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        cover_image: publicUrl
      })

    if (insertError) {
      return fail(500, { success: false, message: `Post save failed: ${insertError.message}` })
    }

    return { success: true, published: data.published }
  }
}
