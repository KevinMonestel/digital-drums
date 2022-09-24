<template>
  <div>
    <UiPageTitle>My sets</UiPageTitle>

    <UiSuccessMsg v-if="showSuccessMessage">
      The drum set has been created successfully.
     </UiSuccessMsg>

    <div v-if="drumSets.length === 0" class="text-center text-gray-400">
      <Icon name="icomoon-free:info" /> Seems like you don't have any sets created yet. Create
      <button @click="showModal = true"
        class="p-2 mb-5 bg-zinc-800 rounded hover:bg-zinc-700 text-zinc-300 dark:bg-zinc-900">a
        new
        one
      </button>
      and start playing
    </div>

    <div v-else>
      <button @click="showModal = true"
        class="p-2 mb-5 bg-zinc-800 rounded hover:bg-zinc-700 text-zinc-300 dark:bg-zinc-900">Create
        new set
      </button>
      <div class="border-b border-b-zinc-300 mb-5 dark:border-b-zinc-700"></div>
      <div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div v-for="drumSet in drumSets" class="bg-zinc-300 dark:bg-zinc-900 rounded-xl">
            <p class="px-2 py-3 text-center bg-zinc-200 dark:bg-zinc-700">
              {{drumSet.name}}
            </p>
            <p class="px-2 py-3 text-right text-gray-500">
              <NuxtLink :href="`/play/${drumSet.id}`">
                <Icon class="mr-2 cursor-pointer" name="icomoon-free:forward" />
              </NuxtLink>
              <NuxtLink :href="`/sets/conf/${drumSet.id}`">
                <Icon class="mr-2 cursor-pointer" name="icomoon-free:cog" />
              </NuxtLink>
              <Icon class="cursor-pointer" name="icomoon-free:bin" />
            </p>
          </div>
        </div>
      </div>
    </div>

    <vue-final-modal v-model="showModal" classes="flex justify-end"
      content-class="min-w-[70%] max-w-[60%] md:min-w-[400px] inline-block px-2 py-2 bg-zinc-100 dark:text-zinc-200 dark:bg-zinc-900">
      <p class="text-center">Create a new set</p>
      <p>
        <FormsCreateSet v-on:add-set-emit="addSetEmit" />
      </p>
    </vue-final-modal>
  </div>
</template>

<script setup lang="ts">
import DrumSetType from '~~/types/digital-drums/drumSet';

const showModal = ref(false)
const showSuccessMessage = ref(false)

definePageMeta({
  middleware: ['auth']
})

const client = useSupabaseClient()
const user = useSupabaseUser()

let userId: string = user.value.id

const { data: drumSets } = await useAsyncData('drum_sets', async () => {
  const { data } = await client.from<DrumSetType>('drum_sets').select('id, name, use_default, user_id, created_at').eq('user_id', userId).order('created_at')

  return data
})

const addSetEmit = (drumSet: DrumSetType) => {
  drumSets.value.push(drumSet)

  showModal.value = false
  showSuccessMessage.value = true
}
</script>