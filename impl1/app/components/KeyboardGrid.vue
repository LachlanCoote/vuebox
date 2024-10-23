<script setup lang="ts">
const columns = 5
const buttons = [
  { id: 1, label: 'Button 1', colSpan: 1, rowSpan: 1 },
  { id: 2, label: 'Button 2', colSpan: 1, rowSpan: 1 },
  { id: 3, label: 'Button 3', colSpan: 1, rowSpan: 1 },
  { id: 4, label: 'Button 4', colSpan: 2, rowSpan: 1 },
  { id: 5, label: 'Button 5', colSpan: 1, rowSpan: 1 },
  { id: 6, label: 'Button 6', colSpan: 1, rowSpan: 1 },
  { id: 7, label: 'Button 7', colSpan: 1, rowSpan: 1 },
  { id: 8, label: 'Button 8', colSpan: 1, rowSpan: 1 },
  { id: undefined, label: '', colSpan: 1, rowSpan: 1 },
  // Add more buttons as needed
]
</script>

<template>
  <div class="button-grid gap-1 p-4 min-h-72">
    <KeyboardButton
      v-for="button in buttons"
      :key="button.id"
      :button
    />
  </div>
</template>

<style scoped>
.button-grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), minmax(0, 1fr));
}
</style>
