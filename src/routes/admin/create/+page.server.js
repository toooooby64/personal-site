/** @satisfies {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
  const { session } = await event.locals.safeGetSession()

  if (!session) {
    redirect(303, '/admin/login')
  }
}

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData()
    console.log(formData)
    const data = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      excerpt: formData.get('excerpt'),
      cover_image: formData.get('cover_image'),
      content: formData.get('content'),
      published: formData.get('published') === 'on'
    }

    const { error } = await event.locals.supabase.from('blog-posts').insert({ published: data.published, title: data.title, slug: data.slug, excerpt: data.excerpt, content: data.content, cover_image: data.cover_image })
    console.log(error)

  }
}
