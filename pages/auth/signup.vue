<template>
  <div class="flex justify-center">
    <div class="w-96 pt-10 md:pt-20">
      <UiSuccessMsg v-if="registered">
        You have been registered successfully. Please, confirm your password.
      </UiSuccessMsg>

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