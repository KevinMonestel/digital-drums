<template>
  <div>
    <UiPageTitle>Playing with set {{route.params.id.toString()}}</UiPageTitle>
    <UiAlertMsg v-if="drumSetsConfigurations.length === 0">
      This set does not have any configuration added.
    </UiAlertMsg>
    <LayoutDrumSetContainer v-else>
      <div v-for="drumPart in drumPartsDistinc" v-on:key="drumPart.id" :id="`drum-part-${drumPart.base_name}`"
        class="drum-element flex items-center justify-center"
        @touchstart="playDrumSound(drumSetsConfigurations.filter(x => x.drum_part_id === drumPart.id)[0].keyword_code, false)">
        <img v-if="drumSetsConfigurations.filter(x => x.drum_part_id === drumPart.id).length !== 0"
          :src="drumPart.image_url" />
      </div>
    </LayoutDrumSetContainer>
  </div>
</template>

<script setup lang="ts">
import { Howl } from 'howler'
import DrumConfigurationType from '~~/types/digital-drums/drumConfiguration'
import DrumPartsType from '~~/types/digital-drums/drumParts';

const pageLoaded = ref(false)
const client = useSupabaseClient()
const route = useRoute()

definePageMeta({
  middleware: ['auth']
})

const { data: drumSetsConfigurations } = await useAsyncData('drum_set_configs', async () => {
  const { data } = await client.from<DrumConfigurationType>('drum_set_configs').select('*').eq('drum_set_id', route.params.id.toString()).order('created_at')

  return data
})

const { data: drumParts } = await useAsyncData('drum_parts', async () => {
  const { data } = await client.from<DrumPartsType>('drum_parts').select('*')

  return data
})

let drumPartsDistinc: DrumPartsType[] = []
let drumSetsConfigurationsSounds: string[] = []

drumPartsDistinc = [...new Map(drumParts.value.map(item =>
  [item['base_name'], item])).values()]

drumSetsConfigurationsSounds = [...new Set(drumSetsConfigurations.value.map(item =>
  item['sound_url']))]

let preloader: Howl = new Howl({
  src: drumSetsConfigurationsSounds,
  autoplay: false,
  preload: true,
  volume: 0
})

preloader.unload()

const keyboardAction = (e: KeyboardEvent) => {
  playDrumSound(e.code, true)
}

const playDrumSound = (keywordCode: string, changeStyle: boolean) => {
  let drumSetConfiguration: DrumConfigurationType = drumSetsConfigurations.value.filter(
    (x) => x.keyword_code.toLowerCase() === keywordCode.toLowerCase()
  )[0];

  if (drumSetConfiguration) {
    let drumPart: DrumPartsType = drumParts.value.filter(
      (x) => x.id === drumSetConfiguration.drum_part_id
    )[0];

    if (changeStyle)
      document.querySelector(`#drum-part-${drumPart.base_name}`).classList.add('scale-105')

      let sound: Howl = new Howl({
      src: drumSetConfiguration.sound_url,
      autoplay: true,
      preload: true,
      volume: drumSetConfiguration.volume
    })
  }
}

const keyboardUpAction = () => {
  let elements = document.querySelectorAll(".drum-element")

  elements.forEach((x) => {
    x.classList.remove("scale-105")
  })
}

pageLoaded.value = true

onMounted(() => {
  window.addEventListener("keydown", keyboardAction)
  window.addEventListener("keyup", keyboardUpAction)
})

onUnmounted(() => {
  window.removeEventListener("keydown", keyboardAction)
  window.removeEventListener("keyup", keyboardUpAction)
})
</script>