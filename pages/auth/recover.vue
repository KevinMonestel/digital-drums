<template>
  <div>
    <FormKit type="form" @submit="handleRecover">
      <FormKit type="email" name="email" label="Email" help="Enter your email" placeholder="example@example.com"
        validation="required" />
    </FormKit>

    <div v-if="wasSent" class="bg-green-200 rounded py-5 px-2 border border-green-300 text-green-600">
      An email was sent to your account if you are registered. Please, verify and reset your password.
    </div>
  </div>
</template>

<script setup lang="ts">
import { RecoverPasswordType } from '~~/types/auth/recoverPassword';

const client = useSupabaseClient()
let wasSent = ref(false)

const handleRecover = async (data: RecoverPasswordType) => {
  const { error } = await client.auth.api.resetPasswordForEmail(data.email)

  if (error) return alert(error.message)

  return wasSent.value = true
}
</script>