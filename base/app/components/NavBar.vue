<script lang="ts" setup>
const items = [[{
  label: 'Home',
  icon: 'i-heroicons-home-solid',
  to: '/',
}]]
</script>

<template>
  <nav class="p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-bold">
        <NuxtLink to="/" class="hover:text-gray-400">
          Vuebox
        </NuxtLink>
      </div>
      <div class="ml-auto">
        <UNavigationMenu :items />
      </div>
    </div>
  </nav>
</template>
