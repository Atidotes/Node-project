<template>
  <navbar></navbar>
  <router-view />
</template>

<script setup>
import navbar from "./components/Navbar/navbar.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
