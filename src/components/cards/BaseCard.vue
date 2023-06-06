<template>
  <div class="shadow-lg border mt-10">
    <span class="w-full h-1 block bg-violet-600"></span>
    <div class="py-5 px-4 flex flex-col items-center">
      <!-- <slot></slot> -->
      <img :src="image" alt="qrtag" />
      <div class="mt-2 font-medium">Link: {{ link }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  link: string;
}>();
</script>
