<template>
  <header class="bg-zinc-900 text-zinc-300">
    <div class="h-[80px] py-5">
      <NuxtLink class="flex flex-col items-center" href="/">
          <Icon name="icomoon-free:equalizer" size="2em" />
          <p class="hidden md:block">Digital Drum</p>
        </NuxtLink>
    </div>

    <div class="h-[calc(100%-81px)] flex flex-col items-center justify-center border-b border-t border-zinc-600">
      <nav class="w-full">
          <ul class="flex flex-col items-center">
            <li class="w-full flex h-[50px] flex items-center justify-center hover:bg-zinc-800 transition-colors">
              <UiThemeSelector />
            </li>
            <li class="w-full hover:bg-zinc-800 transition-colors">
              <NuxtLink href="/sets" class="w-full h-[50px] flex items-center justify-center">
                <span v-if="!user">Let's Play!</span>
                <span v-else>My sets</span>
              </NuxtLink>
            </li>
            <li v-if="!user" class="w-full hover:bg-zinc-800 transition-colors">
              <NuxtLink href="/auth/signin" class="w-full h-[50px] flex items-center justify-center">Log in</NuxtLink>
            </li>
            <li v-if="!user" class="w-full hover:bg-zinc-800 transition-colors">
              <NuxtLink href="/auth/signup" class="w-full h-[50px] flex items-center justify-center">Register</NuxtLink>
            </li>
            <li v-if="user" class="w-full hover:bg-zinc-800 transition-colors">
              <button @click="handleLogOut"
                class="w-full h-[50px] flex items-center justify-center">Log Out</button>
            </li>
          </ul>
        </nav>
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