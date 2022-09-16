<template>
  <div>
    <UiPageTitle>Playing with set {{route.params.id.toString()}}</UiPageTitle>
    <UiAlertMsg v-if="drumSetsConfigurations.length === 0">
      This set does not have any configuration added.
    </UiAlertMsg>
    <div v-else class="grid grid-cols-5">
      <div v-for="drumPart in drumPartsDistinc" v-on:key="drumPart.id" :id="`drum-part-${drumPart.base_name}`" class="drum-element">
        <img :src="`/assets/images/${drumPart.base_name}.svg`" id="snare" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Howl, Howler } from 'howler'
import DrumConfigurationType from '~~/types/digital-drums/drumConfiguration'
import DrumPartsType from '~~/types/digital-drums/drumParts';

const client = useSupabaseClient()
const route = useRoute()

definePageMeta({
  middleware: ['auth']
})

const { data: drumSetsConfigurations } = await useAsyncData('drum_set_configurations', async () => {
  const { data } = await client.from<DrumConfigurationType>('drum_set_configurations').select('*').eq('drum_set_id', parseInt(route.params.id.toString())).order('created_at')

  return data
})

const { data: drumParts } = await useAsyncData('drum_parts', async () => {
  const { data } = await client.from<DrumPartsType>('drum_parts').select('*')

  return data
})

let drumPartsDistinc: DrumPartsType[] = []

drumPartsDistinc = [...new Map(drumParts.value.map(item =>
  [item['base_name'], item])).values()]

const KeyboardAction = (e: KeyboardEvent) => {
  let drumSetConfiguration: DrumConfigurationType = drumSetsConfigurations.value.filter(
    (x) => x.keyword_code.toLowerCase() === e.code.toLowerCase()
  )[0];

  if (drumSetConfiguration) {
    let drumPart: DrumPartsType = drumParts.value.filter(
      (x) => x.id === drumSetConfiguration.drum_part_id
    )[0];

    document.querySelector(`#drum-part-${drumPart.base_name}`).classList.add('scale-105')

    new Howl({
      src: drumSetConfiguration.sound_url,
      autoplay: true,
      loop: false,
      volume: drumSetConfiguration.volume,
      onend: function () {
        console.log('Finished!');
      }
    })
  }
}

const KeyboardUpAction = () => {
  let elements = document.querySelectorAll(".drum-element");
      elements.forEach((x) => {
        x.classList.remove("scale-105");
      });
}

onMounted(() => {
  window.addEventListener("keydown", KeyboardAction);
  window.addEventListener("keyup", KeyboardUpAction);
})

onUnmounted(() => {
  window.removeEventListener("keydown", KeyboardAction);
  window.removeEventListener("keyup", KeyboardUpAction);
})
</script>