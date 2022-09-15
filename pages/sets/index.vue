<template>
  <div>
    <UiPageTitle>My sets</UiPageTitle>
    <div v-if="drumSets.length === 0" class="text-center text-gray-400">
      Seems like you don't have any sets created yet. Create
      <button class="p-1 bg-gray-200 rounded hover:bg-gray-600 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600">a new
        one</button>
      and start playing.
    </div>

    <div v-else>
      {{drumSets}}
    </div>
  </div>
</template>

<script setup lang="ts">
import DrumSetType from '~~/types/digital-drums/drumSet';

definePageMeta({
  middleware: ['auth']
})

const route = useRoute()
const client = useSupabaseClient()
const user = useSupabaseUser()

let userId: string = user.value.id

const { data: drumSets } = await useAsyncData('drum_sets', async () => {
  const { data } = await client.from<DrumSetType>('drum_sets').select('id, name, user_id, created_at').eq('user_id', userId).order('created_at')

  return data
})
</script>