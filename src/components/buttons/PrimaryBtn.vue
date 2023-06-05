<template>
  <button
    @click="$emit('click')"
    class="shadow-xs py-2.5 border font-medium px-5 rounded-lg"
    :class="[
      isPrimary
        ? 'bg-violet-600 border-violet-600 hover:bg-violet-700 text-white'
        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50',
    ]"
  >
    {{ btnText }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  btnText: string | number;
  isPrimary: boolean;
}>();

defineEmits<{ (e: "click"): void }>();
</script>
