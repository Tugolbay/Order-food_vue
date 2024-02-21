<script setup lang="ts">
import Header from "./components/header/Header.vue";

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);
</script>

<template>
  <Header />
</template>
