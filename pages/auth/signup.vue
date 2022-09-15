<template>
  <div class="flex justify-center">
    <div class="w-96 pt-10 md:pt-20">
      <div v-if="registered" class="bg-green-200 rounded py-2 px-3 border border-green-300 text-green-800 mb-4">
        You have been registered successfully. Please, confirm your password.
      </div>

      <FormKit type="form" @submit="handleSignup" submit-label="Register" id="signup-form">
        <FormKit type="email" name="email" label="Email address" help="Please enter your email address"
          validation="required" placeholder="example@example.com" />
        <FormKit type="password" name="password" label="Password" help="Please enter your password"
          validation="required" placeholder="******" />
        <FormKit type="password" name="password_confirm" label="Confirm Password" help="Please confirm your password"
          validation="required|confirm" placeholder="******" />
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SignUpType } from '~~/types/auth/signUp';
import { reset } from '@formkit/core'

const client = useSupabaseClient()
const registered = ref(false)

const handleSignup = async (data: SignUpType) => {
  try {
    // Use the Supabase provided method to handle the signup
    const { error } = await client.auth.signUp({
      email: data.email,
      password: data.password,
    })

    if (error) throw error

    registered.value = true

    reset('signup-form')
  } catch (error) {
    alert(error.error_description || error.message)
  }
}
</script>