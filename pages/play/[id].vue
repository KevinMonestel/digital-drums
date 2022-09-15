<template>
  <div class="pt-5">
    {{route.params.id}}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  middleware: ['auth']
})

</script>