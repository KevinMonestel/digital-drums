<template>
  <FormKit type="form" @submit="handleSubmit" submit-label="Create" validation-label="sd" id="create-set-form">
    <FormKit type="text" name="name" label="Name" help="Please enter a name for this set" validation="required"
      placeholder="" />
    <FormKit type="checkbox" name="use_default" label="This set will use default configuration?" validation="accepted"
      :validation-messages="
      {accepted: 'At this moment, only sets with default configuration can be created'}" value="false"/>
  </FormKit>
</template>

<script setup lang="ts">
import { reset } from '@formkit/core';
import { date } from '@formkit/i18n';
import DrumSetType from '~~/types/digital-drums/drumSet';

const client = useSupabaseClient()
const user = useSupabaseUser()

const emits = defineEmits(['addSetEmit'])

const handleSubmit = async (formData: DrumSetType) => {
  formData.user_id = user.value.id

  const { data, error } = await client.from<DrumSetType>('drum_sets').insert({
    name: formData.name,
    use_default: formData.use_default,
    user_id: formData.user_id
  })

  if (error) throw error

  await emits('addSetEmit', data[0])

  reset('create-set-form')
}
</script>