<script lang="ts" setup>
</script>

<template>
  <div>
    <NuxtPwaManifest v-if="$config.public.usePWA" />
    <NavBar />
    <MyHello />
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <UNotifications />
  </div>
</template>
