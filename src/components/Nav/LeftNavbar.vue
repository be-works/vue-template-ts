<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navs = ref([]);
const activeRoute = ref("/");

onBeforeMount(() => {
  navs.value = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
});

const gotoRoute = (route) => {
  activeRoute.value = route.path;
  router.push(route.path);
};
</script>

<template>
  <div class="nav-left">
    <ul>
      <li class="nav-left-head">
        <!-- Some info here -->
      </li>
      <li v-for="(route, index) in navs" :class="activeRoute == route.path ? 'active' : ''" @click="gotoRoute(route)">
        {{ route.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav-left {
  @apply w-[265px];
  height: 100%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.75rem;

  .logo-icon {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  ul {
    @apply flex flex-col gap-y-2 p-0;
    list-style-type: none;

    li {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;

      &.active {
        box-shadow: 0px 0px 3px 0px #959595;
      }
    }
  }

  &-head {
    height: 200px;
  }
}
</style>
