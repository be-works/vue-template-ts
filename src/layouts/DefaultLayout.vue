<script setup>
import LeftNavbar from "../components/Nav/LeftNavbar.vue";
import HeadNavbar from "../components/Nav/HeadNavbar.vue";
</script>
<template>
  <HeadNavbar />
  <div class="main">
    <div class="nav-left">
      <LeftNavbar />
    </div>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  @apply grid;
  grid-template-columns: 265px auto;
  column-gap: 2rem;
}
.main-content {
  background-color: #fff;
  border-radius: 0.75rem;
}
</style>
