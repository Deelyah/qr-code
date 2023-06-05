<template>
  <div class="flex flex-wrap w-full justify-center mt-10">
    <div
      v-for="(_, index) in 6"
      class="basis-auto sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-6"
    >
      <BaseCard
        :key="index"
        image="https://qrtag.net/api/qr_8.svg?url=https://www.github.com"
      />
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts">
import BaseCard from "../components/cards/BaseCard.vue";
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import { key } from '../store'

export default defineComponent({
  name: "AllCodes",
  components: {
    BaseCard
  },
  setup() {
    const store = useStore(key);
    const count = computed(() => store.state.count);

    return {
      count,
    };
  },
});
</script>
