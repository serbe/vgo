<template>
  <div class="min-h-screen">
    <div
      class="w-full bg-white dark-mode:bg-gray-800 dark-mode:text-gray-200 text-gray-700"
    >
      <div
        x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl lg:px-8 md:flex-row md:items-center md:justify-between md:px-6 mx-auto px-4"
      >
        <div class="flex flex-row items-center justify-between p-4">
          <a
            href="#"
            class="dark-mode:text-white focus:outline-none focus:shadow-outline font-semibold rounded-lg text-gray-900 text-lg tracking-widest uppercase"
            >Flowtrail UI</a
          >
          <button
            class="focus:outline-none focus:shadow-outline md:hidden rounded-lg"
            @click="switchOpen"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                v-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{ flex: open, hidden: !open }"
          class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"
        >
          <a
            class="bg-gray-200 dark-mode:bg-gray-700 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:bg-gray-600 dark-mode:hover:text-white dark-mode:text-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:text-gray-900 font-semibold hover:bg-gray-200 hover:text-gray-900 md:mt-0 mt-2 px-4 py-2 rounded-lg text-gray-900 text-sm"
            href="#"
            >Blog</a
          >
          <a
            class="bg-transparent dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:bg-gray-600 dark-mode:hover:text-white dark-mode:text-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:text-gray-900 font-semibold hover:bg-gray-200 hover:text-gray-900 md:ml-4 md:mt-0 mt-2 px-4 py-2 rounded-lg text-sm"
            href="#"
            >Portfolio</a
          >
          <a
            class="bg-transparent dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:bg-gray-600 dark-mode:hover:text-white dark-mode:text-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:text-gray-900 font-semibold hover:bg-gray-200 hover:text-gray-900 md:ml-4 md:mt-0 mt-2 px-4 py-2 rounded-lg text-sm"
            href="#"
            >About</a
          >
          <a
            class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Contact</a
          >
          <div
            class="relative"
            x-data="{ open: false }"
            v-click-away="closeOpen"
          >
            <button
              @click="switchOpen"
              class="flex flex-row bg-transparent dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:bg-gray-600 dark-mode:hover:text-white focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:text-gray-900 font-semibold hover:bg-gray-200 hover:text-gray-900 items-center md:inline md:ml-4 md:mt-0 md:w-auto mt-2 px-4 py-2 rounded-lg text-left text-sm w-full"
            >
              <span>Dropdown</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                :class="{ 'rotate-180': open, 'rotate-0': !open }"
                class="duration-200 h-4 inline md:-mt-1 ml-1 mt-1 transform transition-transform w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              v-show="open"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="transform opacity-0 scale-95"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-95"
              class="absolute md:w-48 mt-2 origin-top-right right-0 rounded-md shadow-lg w-full"
            >
              <div
                class="bg-white dark-mode:bg-gray-800 px-2 py-2 rounded-md shadow"
              >
                <a
                  class="block bg-transparent dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:bg-gray-600 dark-mode:hover:text-white dark-mode:text-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:text-gray-900 font-semibold hover:bg-gray-200 hover:text-gray-900 md:mt-0 mt-2 px-4 py-2 rounded-lg text-sm"
                  href="#"
                  >Link #1</a
                >
                <a
                  class="block bg-transparent dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:bg-gray-600 dark-mode:hover:text-white dark-mode:text-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:text-gray-900 font-semibold hover:bg-gray-200 hover:text-gray-900 md:mt-0 mt-2 px-4 py-2 rounded-lg text-sm"
                  href="#"
                  >Link #2</a
                >
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                  >Link #3</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const open = ref(false);
    const switchOpen = () => {
      open.value = !open.value;
    };
    const closeOpen = () => {
      open.value = false;
    };

    return { open, switchOpen, closeOpen };
  },
});
</script>
