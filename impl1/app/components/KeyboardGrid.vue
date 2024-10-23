<script setup lang="ts">
const columns = 8
const buttons = [
  { id: 1, label: 'Button 1', colSpan: 1, rowSpan: 1 },
  { id: 2, label: 'Button 2', colSpan: 1, rowSpan: 1 },
  { id: 3, label: 'Button 3', colSpan: 1, rowSpan: 1 },
  { id: 4, label: 'Button 4', colSpan: 1, rowSpan: 1 },
  { id: 5, label: 'Button 5', colSpan: 1, rowSpan: 1 },
  { id: 6, label: 'Button 6', colSpan: 1, rowSpan: 1 },
  { id: 7, label: 'Button 7', colSpan: 1, rowSpan: 1 },
  { id: 8, label: 'Button 8', colSpan: 1, rowSpan: 1 },
  // Add more buttons as needed
]
</script>

<template>
  <div class="button-grid gap-2 p-4">
    <div
      v-for="button in buttons"
      :key="button.id"
      :class="[
        `col-span-${button.colSpan}`,
        `row-span-${button.rowSpan}`,
      ]"
    >
      <UButton class="w-full min-h-16 ">
        <div class="mx-auto text-center">
          {{ button.label }}
        </div>
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}
</style>
