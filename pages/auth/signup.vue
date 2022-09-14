<template>
  <div>
    <FormKit type="form" @submit="handleSignup" submit-label="Register">
      <FormKit type="email" name="email" label="Email address" help="Please enter your email address"
        validation="required" placeholder="example@example.com" />
      <FormKit type="password" name="password" label="Password" help="Please enter your password" validation="required"
        placeholder="******" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { SignUpType } from '~~/types/auth/signUp';

const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})

const handleSignup = async (data: SignUpType) => {
  try {
    // Use the Supabase provided method to handle the signup
    const { error } = await client.auth.signUp({
      email: data.email,
      password: data.password,
    })

    if (error) throw error
  } catch (error) {
    alert(error.error_description || error.message)
  }
}
</script>