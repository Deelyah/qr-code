<template>
  <nav
    class="p-4 border-b flex items-center fixed left-0 right-0 top-0 bg-white"
  >
    <div class="flex items-center">
      <img src="./assets/logo.svg" alt="logo" class="mr-2.5" />
      <router-link to="/" class="block">
        <h3 class="text-gray-900 font-semibold text-lg">QR Generator</h3>
      </router-link>
    </div>
    <div class="ml-auto hidden sm:flex">
      <PrimaryBtn
        btn-text="+ Create"
        :is-primary="true"
        v-on:click="toggleModal(true)"
      />
      <router-link to="/all-codes" class="block ml-3">
        <PrimaryBtn btn-text="View All Codes" :is-primary="false" />
      </router-link>
    </div>

    <BaseModal v-on:close-modal="toggleModal(false)" v-if="modalIsVisible" />
  </nav>

  <nav>
    <div class="mt-24 flex sm:hidden px-4">
      <PrimaryBtn btn-text="View All Codes" :is-primary="false" />
      <div class="ml-3">
        <PrimaryBtn
          btn-text="+ Create"
          :is-primary="true"
          v-on:click="toggleModal(true)"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import PrimaryBtn from "./components/buttons/PrimaryBtn.vue";
import { ref } from "vue";
import BaseModal from "./components/modals/BaseModal.vue";

const modalIsVisible = ref(false);

const toggleModal = (value: boolean) => {
  modalIsVisible.value = value;
};
</script>
