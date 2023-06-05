<template>
  <div
    class="fixed inset-0 backdrop-blur-md flex justify-center sm:h-screen sm:items-center"
  >
    <form
      @submit.prevent="handleSubmit"
      class="shadow-lg border-4 pt-5 pb-10 px-5 bg-white h-fit"
    >
      <div class="flex justify-end pr-2 mb-8">
        <button class="py-1.5 px-2 border" @click.prevent="handleClick">
          <img src="../../assets/close.png" alt="close" />
        </button>
      </div>

      <h2 class="text-violet-600 font-semibold text-center mb-4">
        Enter QR CODE URL
      </h2>

      <div className="border-2 rounded-lg pl-1 flex">
        <input
          required
          className="focus:outline-none border-transparent border-0 p-3"
          type="text"
          placeholder="www.myqrcode.org"
          name="codeURL"
          v-model="codeURL"
        />
        <button
          className="py-3 px-4 border-l-2 hover:bg-gray-100 text-gray-900 font-medium"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let codeURL = ref<string | null>("");

let emit = defineEmits(["closeModal"]);

const handleClick = () => {
  emit("closeModal");
};
const handleSubmit = () => {
  codeURL.value = "";
  emit("closeModal");
};
</script>
