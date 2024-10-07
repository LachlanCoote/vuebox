<script lang="ts" setup>
const links = [[{
  label: 'Home',
  icon: 'i-heroicons-home-solid',
  to: '/',
}]]
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-bold">
        <NuxtLink to="/" class="hover:text-gray-400">
          Vuebox
        </NuxtLink>
      </div>
      <div class="ml-auto">
        <UHorizontalNavigation :links />
      </div>
    </div>
  </nav>
</template>
