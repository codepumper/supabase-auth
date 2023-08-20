import SupabaseAuth from '../lib/SupabaseAuth'
require('dotenv').config()

describe('SupabaseAuth', () => {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const auth = new SupabaseAuth(supabaseUrl, supabaseKey)

  it('should sign up a user', async () => {
    const { error } = await auth.signUp('user@example.com', 'password')
    expect(error).toBeNull()
  })

  it('should sign in a user with password', async () => {
    const { error } = await auth.signInWithPassword(
      'user@example.com',
      'password'
    )
    expect(error).toBeNull()
  })

  it('should sign out a user', async () => {
    const { error } = await auth.signOut()
    expect(error).toBeNull()
  })
})
