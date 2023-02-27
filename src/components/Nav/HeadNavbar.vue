<script setup></script>

<template>
  <div class="nav-head">
    <div class="nav-head-right">
      <ul>
        <li class="nav-head-avatar">
          <img src="@/assets/avartar.jpeg" alt="" class="nav-head-avatar-img" />
          <span>Developer</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-head {
  @apply w-full h-[65px] flex justify-end items-center;
  background-color: #fff;
  border-radius: 0.75rem;

  &-right {
    @apply px-4;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  &-avatar {
    @apply flex items-center gap-x-2;
    &-img {
      width: 40px;
      height: 40px;
      border-radius: 9999px;
    }
  }
}
</style>
