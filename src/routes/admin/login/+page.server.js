/** @satisfies {import('./$types').Actions} */
import { redirect, fail } from '@sveltejs/kit'

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData()

    const { data, error } = await event.locals.supabase.auth.signInWithPassword({
      email: formData.get('email')?.toString() ?? '',
      password: formData.get('password')?.toString() ?? ''
    })

    console.log(error)
    console.log(data)

    if (error) {
      return fail(400, { message: error.message })
    }
    redirect(303, '/admin/create')
  }
};
