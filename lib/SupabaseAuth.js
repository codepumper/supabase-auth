import { createClient } from '@supabase/supabase-js'

class SupabaseAuth {
  constructor(supabaseUrl, supabaseKey) {
    this.supabase = createClient(supabaseUrl, supabaseKey)
  }

  async signUp(email, password) {
    const { error } = await this.supabase.auth.signUp({
      email,
      password,
    })
    return { error }
  }

  async signInWithPassword(email, password) {
    const { error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut()
    return { error }
  }

  // TODO: add password reset
}

export default SupabaseAuth
