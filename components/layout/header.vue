<template>
  <header class="bg-gray-50 dark:bg-gray-800">
    <div class="h-[50px] container flex justify-between items-center">
      <div>
        <NuxtLink class="flex items-center justify-center" href="/">
          <Icon name="icomoon-free:equalizer" size="2em" />
          <p class="hidden md:block md:ml-2">Digital Drums</p>
        </NuxtLink>
      </div>

      <div>
        <nav>
          <ul class="flex items-center">
            <li>
              <UiThemeSelector />
            </li>
            <li>
              <NuxtLink class="underline-light-400" href="/play/1">Let's Play!</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/auth/signin">Log in</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/auth/signup">Register</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
nav ul li {
  margin-right: 1em;
}

nav ul li:last-child {
  margin-right: 0;
}
</style>