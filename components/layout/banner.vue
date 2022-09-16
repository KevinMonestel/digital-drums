<template>
  <div class="min-h-[calc(100vh-70px)] container flex flex-col justify-center items-center">
    <p v-if="user" class="mb-2">
      Welcome, <strong>{{user.email}}</strong> to
    </p>
    <p class="flex items-center">
      <Icon name="icomoon-free:equalizer" size="4em" />
      <span class="text-1xl md:text-2xl ml-2">
        Digital Drum
      </span>
    </p>
    <h1 class="text-3xl text-center mt-2 mb-5">The sound of a real drum set... <br>
      on your own keyboard!</h1>
    <UiPlayBtn />
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

</script>