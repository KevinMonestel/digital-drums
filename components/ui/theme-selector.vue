<template>
  <div>
    <button v-if="color.value === 'dark'" @click="color.preference = 'light'">
      <Icon name="material-symbols:light-mode-outline" size="1.5em" />
    </button>

    <button v-if="color.value === 'light'" @click="color.preference = 'dark'" >
      <Icon name="material-symbols:dark-mode-outline" size="1.5em" />
    </button>
  </div>
</template>

<script setup lang="ts">
const color = useColorMode();
</script>