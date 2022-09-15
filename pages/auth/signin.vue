<template>
  <div class="flex justify-center">
    <div class="w-96 pt-10 md:pt-20">
      <FormKit type="form" @submit="handleSignin" submit-label="Sign in">
        <FormKit type="email" name="email" label="Email address" help="Please enter your email address"
          validation="required" placeholder="example@example.com" />
        <FormKit type="password" name="password" label="Password" help="Please enter your password"
          validation="required" placeholder="******"/>
        <NuxtLink href="/auth/recover" class="text-sm text-blue-400">Recover password</NuxtLink>
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SignInType } from '~~/types/auth/signIn';

const client = useSupabaseClient()
const user = useSupabaseUser()
const route = useRoute()

let redirect: string = route.query.redirect?.toString() ?? '/'

watchEffect(() => {
  if (user.value) {
    navigateTo(redirect)
  }
})

const handleSignin = async (data: SignInType) => {
  try {
    // Use the Supabase provided method to handle the signin
    const { error } = await client.auth.signIn({
      email: data.email,
      password: data.password,
    })

    if (error) throw error
  } catch (error) {
    alert(error.error_description || error.message)
  }
}
</script>