<template>
  <div class="text-gray-700 dark:text-white">
    <LayoutHeader />
    <LayoutMainContent>
      <slot></slot>
    </LayoutMainContent>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Digital Drum'
})
</script>