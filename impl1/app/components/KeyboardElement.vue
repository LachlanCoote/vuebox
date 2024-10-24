<script setup lang="ts">
import type { IKeyboardElement } from '~/types/interfaces/IKeyboard'

const element = defineModel<IKeyboardElement>('element', { required: true })
const isSpan = computed(() => element.value?.colStart == null && element.value?.rowStart == null)
</script>

<template>
  <div :class="isSpan ? 'element-span' : 'element-start-end'">
    <slot />
  </div>
</template>

<style scoped>
.element-span {
    grid-column: span v-bind('element.colSpan');
    grid-row: span v-bind('element.rowSpan');
}
.element-start-end {
  grid-column-start: v-bind('element.colStart');
  grid-column-end: span v-bind('element.colSpan');
  grid-row-start: v-bind('element.rowStart');
  grid-row-end: span v-bind('element.rowSpan');
}
</style>
