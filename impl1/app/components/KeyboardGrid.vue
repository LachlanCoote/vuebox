<script setup lang="ts">
const buttons = [
  { id: 1, label: 'Button 1', colSpan: 1, rowSpan: 1 },
  { id: 2, label: 'Button 2', colSpan: 2, rowSpan: 1 },
  { id: 3, label: 'Button 3', colSpan: 1, rowSpan: 2 },
  { id: 4, label: 'Button 4', colSpan: 1, rowSpan: 1 },
  // Add more buttons as needed
]
</script>

<template>
  <div class="grid grid-cols-2 gap-4 p-4">
    <div
      v-for="button in buttons"
      :key="button.id"
      :class="`col-span-${button.colSpan} row-span-${button.rowSpan}`"
    >
      <UButton>
        {{ button.label }}
      </UButton>
    </div>
  </div>
</template>
