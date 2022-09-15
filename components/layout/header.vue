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
            <li v-if="!user">
              <NuxtLink href="/auth/signin">Log in</NuxtLink>
            </li>
            <li v-if="!user">
              <NuxtLink href="/auth/signup">Register</NuxtLink>
            </li>
            <li v-if="user" class="nav-item">
              <button @click="handleLogOut"
                class="text-red-700 dark:text-red-300">Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()

const handleLogOut = async () => {
  try {
    const { error } = await client.auth.signOut()

    if (error) throw error

    navigateTo('/')
  } catch (error) {
    alert(error.error_description || error.message);
  }
}
</script>

<style scoped>
nav ul li {
  margin-right: 1em;
}

nav ul li:hover {
  transform: scale(1.1);
  transition: transform .2s;
}

nav ul li:last-child {
  margin-right: 0;
}
</style>