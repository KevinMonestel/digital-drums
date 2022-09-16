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
import DrumSetType from '~~/types/digital-drums/drumSet';
import defaultTheme   from '~~/assets/drums-themes/default'
import DrumConfigurationType from '~~/types/digital-drums/drumConfiguration';

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

  reset('create-set-form')

  if (error){
    throw error
    return alert(error.details)
  }

  let drumSetAdded: DrumSetType = data[0];
  
  if(formData.use_default){
    let defaultThemeConfigJson: string = JSON.stringify(defaultTheme)
    let defaultThemeConfig: DrumConfigurationType[] = JSON.parse(defaultThemeConfigJson)

    defaultThemeConfig = defaultThemeConfig.map((obj, i) => ({ ...obj, drum_set_id: drumSetAdded.id }));

    const { data, error } = await client.from<DrumConfigurationType[]>('drum_set_configs').insert(defaultThemeConfig)

    if (error) throw error
    else await emits('addSetEmit', drumSetAdded)
  }
}
</script>