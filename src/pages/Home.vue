<template>
  <div class="mt-8 px-4">
    <h3 class="text-gray-900 font-medium text-2xl">Recent Codes</h3>
    <div class="mt-4 flex">
      <PrimaryBtn btn-text="View All Codes" :is-primary="false" />
      <div class="ml-3">
        <PrimaryBtn
          btn-text="+ Create"
          :is-primary="true"
          v-on:click="toggleModal(true)"
        />
      </div>
    </div>
    <div class="flex flex-wrap w-full justify-center">
      <div v-for="(_, index) in 6" class="basis-1/4 px-6">
        <BaseCard
          :key="index"
          image="https://qrtag.net/api/qr_8.svg?url=https://www.github.com"
        />
      </div>
    </div>

    <BaseModal v-on:close-modal="toggleModal(false)" v-if="modalIsVisible" />
  </div>
</template>

<script setup lang="ts">
import PrimaryBtn from "../components/buttons/PrimaryBtn.vue";
import BaseCard from "../components/cards/BaseCard.vue";
import BaseModal from "../components/modals/BaseModal.vue";
import { ref } from "vue";

const modalIsVisible = ref(false);

const toggleModal = (value: boolean) => {
  console.log(modalIsVisible.value);
  modalIsVisible.value = value;
};
</script>
