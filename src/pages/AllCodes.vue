<template>
  <EmptyScreen v-if="qrCodes.length < 1" />
  <div v-else class="flex flex-wrap w-full justify-center mt-10">
    <div
      v-for="(code, index) in qrCodes"
      class="basis-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-6"
    >
      <BaseCard
        :key="index"
        :image="`https://qrtag.net/api/qr_8.svg?url=${code.link}`"
        :link="code.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseCard from "../components/cards/BaseCard.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { key } from "../store";
import EmptyScreen from "../components/errors/EmptyScreen.vue";

const store = useStore(key);
const qrCodes = ref(store.state.generatedCodes);
</script>
