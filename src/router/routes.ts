import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default [
  {
    path: "",
    name: "Default Layout",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/AboutView.vue"),
      },
    ],
  },
];
