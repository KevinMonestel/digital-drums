<template>
  <div class="flex justify-center">
    <div class="w-96 pt-10 md:pt-20">
      <FormKit type="form" @submit="handleRecover">
        <FormKit type="email" name="email" label="Email" help="Enter your email" placeholder="example@example.com"
          validation="required" />
      </FormKit>

      <UiSuccessMsg v-if="wasSent">
        An email was sent to your account if you are registered. Please, verify and reset your password.
      </UiSuccessMsg>
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