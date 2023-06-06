<template>
  <div class="mt-2 px-4 w-full h-[70vh] flex justify-center items-center">
    <div
      class="bg-white shadow-lg py-8 px-6 shadow-violet-500 flex flex-col justify-center"
    >
      <h3 class="mb-5 text-center font-medium text-xl">Hello there!</h3>
      <p class="mb-3">Click the button above to quicly generate a QR-Code</p>
      <p class="text-sm text-violet-950">Note:</p>
      <p class="mt-2 text-sm text-violet-950">
        Code links must be valid links containing 'http' or 'https'
      </p>
      <p class="mt-2 text-sm text-violet-950">
        You can't generate more than 10 codes
      </p>
      <p class="mt-2 text-sm text-violet-950">
        After 10 codes, kindly refresh your page to add more.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
