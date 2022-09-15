<template>
  <div class="pt-5">
    {{route.params.id}}
  </div>
</template>

<script setup lang="ts">
import { Howl, Howler } from 'howler';

const route = useRoute()

definePageMeta({
  middleware: ['auth']
})

const KeyboardAction = (e: KeyboardEvent) => {
  alert(e.code)

  var sound = new Howl({
    src: 'https://ugzbntbdlbdgmifxklgk.supabase.co/storage/v1/object/sign/drum-sets/default/bass.wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkcnVtLXNldHMvZGVmYXVsdC9iYXNzLndhdiIsImlhdCI6MTY2MzI3MTE3MiwiZXhwIjoxOTc4NjMxMTcyfQ.6wBITEmbipX2pe0iZ53EAHhFOTyRdMjgA3lpP4bWKH4',
    autoplay: true,
    loop: false,
    volume: 0.5,
    onend: function () {
      console.log('Finished!');
    }
  });
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