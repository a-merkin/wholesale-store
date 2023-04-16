<template>
  <el-menu
    default-active="1"
    :collapse="isCollapse"
    style="height: 100%; width: 200px"
  >
    <el-menu-item index="1" @click="handleRoute('/customer-list')">
      <el-icon><IconHome /></el-icon>
      <template #title>Клиенты</template>
    </el-menu-item>
    <el-menu-item index="2" @click="handleRoute('/purchase-list')">
      <el-icon><IconTasks /></el-icon>
      <template #title>Покупки</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";

const isCollapse = ref(false);

function handleOpen() {
  isCollapse.value = !isCollapse.value;
}
const handleRoute = (route) => {
  router.push(`${route}`);
};
</script>

<style scoped></style>
