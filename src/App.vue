<template class="min-h-screen">
  <Navbar />
  <!-- <div class="mx-auto px-4 py-4">
    <router-view></router-view>
  </div>
  <footer class="object-bottom">
    <div class="">
      <div class="object-center">© 2021 Сочи</div>
    </div>
  </footer> -->
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Navbar from "./components/navbar.vue";
  import "./App.css";

  export default defineComponent({
    name: "App",
    components: { Navbar },
  });
</script>

<style></style>
