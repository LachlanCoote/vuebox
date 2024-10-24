<script setup lang="ts">
import type { IGetKeyboardResponse } from '~/types/dtos/IGetKeyboardResponse'
import { type IKeyboardButton, KBElementType } from '~/types/interfaces/IKeyboard'
import { mapKeyboard } from '~/utils/mapping/keyboard'

const { data } = await useFetch<IGetKeyboardResponse>('https://localhost:7180/api/72855964/keyboard/36')
const keyboard = mapKeyboard(data.value!.keyboard, data.value!.layouts[0])
</script>

<template>
  <div class="keyboard-grid gap-1 p-4 dark:bg-gray-600">
    <KeyboardElement
      v-for="element in keyboard.elements"
      :key="element.key"
      :element
    >
      <template v-if="element.type === KBElementType.Button">
        <KeyboardButton :button="(element as IKeyboardButton)" />
      </template>
      <template v-else-if="element.type === KBElementType.SalesBox">
        <KeyboardSalesBox />
      </template>
      <template v-else-if="element.type === KBElementType.NumPad">
        <KeyboardNumPad />
      </template>
    </KeyboardElement>
  </div>
</template>

<style scoped>
.keyboard-grid {
  display: grid;
  grid-template-columns: repeat(v-bind('keyboard.columns'), minmax(0, 1fr));
  grid-template-rows: repeat(v-bind('keyboard.rows'), minmax(0, 1fr));
}
</style>
