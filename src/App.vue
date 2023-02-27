<script setup lang="ts">
import { ref } from "vue";

import viVN from "ant-design-vue/es/locale/vi_VN";
import enUS from "ant-design-vue/es/locale/en_US";

const locale = ref(enUS);

const getPopupContainer = (el: any, dialogContext: any) => {
  if (dialogContext) {
    return dialogContext.getDialogWrap();
  } else {
    return document.body;
  }
};
</script>

<template>
  <a-config-provider :locale="locale" :getPopupContainer="getPopupContainer" :csp="{}">
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
