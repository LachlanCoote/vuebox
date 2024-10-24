<script setup lang="ts">
import { type IKeyboardButton, type IKeyboardElement, KBType } from '~/types/interfaces/IKeyboard'

const columns = 8
const rows = 12
const elements = [
  { id: 1, label: 'Button 1', type: KBType.Button, colSpan: 1, rowSpan: 1 },
  { id: 2, label: 'Button 2', type: KBType.Button, colSpan: 1, rowSpan: 1 },
  { id: 3, label: 'Button 3', type: KBType.Button, colSpan: 1, rowSpan: 1 },
  { id: 4, label: 'SalesGrid', type: KBType.SalesBox, colSpan: 2, rowSpan: 4, colStart: 1, rowStart: 1 },
  { id: 5, label: 'Button 5', type: KBType.Button, colSpan: 1, rowSpan: 1 },
  { id: 6, label: 'Numpad', type: KBType.NumPad, colSpan: 2, rowSpan: 3, colStart: 4, rowStart: 1 },
  { id: 7, label: 'Button 7', type: KBType.Button, colSpan: 1, rowSpan: 1 },
  { id: 8, label: 'Button 8', type: KBType.Button, colSpan: 1, rowSpan: 1 },
] as IKeyboardElement[]
</script>

<template>
  <div class="keyboard-grid gap-1 p-4 dark:bg-gray-600">
    <KeyboardElement
      v-for="element in elements"
      :key="element.id"
      :element
    >
      <template v-if="element.type === KBType.Button">
        <KeyboardButton :button="(element as IKeyboardButton)" />
      </template>
      <template v-else-if="element.type === KBType.SalesBox">
        <KeyboardSalesBox />
      </template>
      <template v-else-if="element.type === KBType.NumPad">
        <KeyboardNumPad />
      </template>
    </KeyboardElement>
  </div>
</template>

<style scoped>
.keyboard-grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), minmax(0, 1fr));
  grid-template-rows: repeat(v-bind(rows), minmax(0, 1fr));
}
</style>
