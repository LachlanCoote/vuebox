<script setup lang="ts">
import type { IKeyboardButton } from '~/types/interfaces/IKeyboard'

const button = defineModel<IKeyboardButton>('button', { required: true })
const isPressed = ref(false)

function handleClick() {
  isPressed.value = true
  setTimeout(() => {
    isPressed.value = false
  }, 200)
}
</script>

<template>
  <UButton
    class="w-full h-full"
    color="indigo"
    :class="{ pressed: isPressed }"
    @click="handleClick"
  >
    <div class="mx-auto text-center">
      {{ button.label }}
    </div>
  </UButton>
</template>

<style scoped>
.pressed {
  animation: press-animation 0.2s ease-in-out;
}

@keyframes press-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>
