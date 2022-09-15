<template>
  <div>
    <UiPageTitle>My sets</UiPageTitle>
    <div v-if="drumSets.length === 0" class="text-center text-gray-400">
      <Icon name="icomoon-free:info" /> Seems like you don't have any sets created yet. Create
      <button @click="showModal = true"
        class="p-1 bg-gray-200 rounded hover:bg-gray-600 hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600">a
        new
        one
      </button>
      and start playing
    </div>

    <div v-else>
      <button @click="showModal = true"
        class="p-2 mb-5 bg-gray-800 rounded hover:bg-gray-600 text-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600">Create new set
      </button>
      <div class="border-b border-b-gray-300 mb-5 dark:border-b-gray-500"></div>
      <div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <div v-for="drumSet in drumSets" class="bg-gray-200 dark:bg-gray-900 rounded-xl">
            <p class="px-2 py-3 text-center bg-gray-100 dark:bg-gray-800">
              {{drumSet.name}}
            </p>
            <p class="px-2 py-3 text-right text-gray-500">
              <Icon class="mr-2 cursor-pointer" name="icomoon-free:forward" />
              <Icon class="mr-2 cursor-pointer" name="icomoon-free:cog" />
              <Icon class="cursor-pointer" name="icomoon-free:bin" />

            </p>
          </div>
        </div>
      </div>
    </div>

    <vue-final-modal v-model="showModal" classes="flex justify-end"
      content-class="min-w-[40%] md:min-w-[400px] inline-block text-gray-800 rounded px-2 py-2 shadow-xl bg-white dark:shadow-none dark:text-white dark:bg-gray-900">
      <p class="text-center">Create a new set</p>
      <p>
        <FormsCreateSet v-on:add-set-emit="addSetEmit"/>
      </p>
    </vue-final-modal>
  </div>
</template>

<script setup lang="ts">
import DrumSetType from '~~/types/digital-drums/drumSet';

const showModal = ref(false)

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
}
</script>