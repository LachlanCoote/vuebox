<script setup lang="ts">
const { button } = defineProps<{
  button: {
    id?: number
    label: string
    colSpan: number
    rowSpan: number
  }
}>()
const columnSpan = computed(() => button.colSpan)
const rowSpan = computed(() => button.rowSpan)
const isPressed = ref(false)

function handleClick() {
  isPressed.value = true
  setTimeout(() => {
    isPressed.value = false
  }, 200)
}
</script>

<template>
  <div class="keyboard-button">
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
  </div>
</template>

<style scoped>
.keyboard-button {
    grid-column: span v-bind(columnSpan);
    grid-row: span v-bind(rowSpan);
}

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
