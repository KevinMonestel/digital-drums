<template>
  <LayoutMainLayout>
    <LayoutHeader />
    <LayoutMainContent>
      <slot></slot>
    </LayoutMainContent>
  </LayoutMainLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Digital Drum'
})
</script>