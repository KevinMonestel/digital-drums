<template>
  <div>
    <img src="~/assets/images/snare.png" id="snare"/>
    {{route.params.id}}
  </div>
</template>

<script setup lang="ts">
import { Howl, Howler } from 'howler'
import DrumConfigurationType from '~~/types/digital-drums/drumConfiguration'

const client = useSupabaseClient()
const route = useRoute()

definePageMeta({
  middleware: ['auth']
})

const { data } = await useAsyncData('drum_set_configurations', async () => {
  const { data } = await client.from<DrumConfigurationType>('drum_set_configurations').select('*').eq('drum_set_id', parseInt(route.params.id.toString())).order('created_at')

  return data
})

const KeyboardAction = (e: KeyboardEvent) => {
  let keyboardAction: DrumConfigurationType = data.value.filter(
    (x) => x.keyword_code.toLowerCase() === e.code.toLowerCase()
  )[0];

  if (keyboardAction) {
    var sound = new Howl({
      src: keyboardAction.sound_url,
      autoplay: true,
      loop: false,
      volume: keyboardAction.volume,
      onend: function () {
        console.log('Finished!');
      }
    })
  }
}

onMounted(() => {
  window.addEventListener("keydown", KeyboardAction);
  //window.addEventListener("keyup", this.KeyboardUpAction);
})

onUnmounted(() => {
  window.removeEventListener("keydown", KeyboardAction);
  //window.removeEventListener("keyup", this.KeyboardUpAction);
})
</script>