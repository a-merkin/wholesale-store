<template>
  <el-menu
    default-active="1"
    :collapse="isCollapse"
    style="height: 100%; width: 288px"
  >
    <el-menu-item index="2" @click="handleRoute('/home')">
      <el-icon><IconHome /></el-icon>
      <template #title>Home</template>
    </el-menu-item>
    <el-menu-item index="3" @click="handleRoute('/trips-list')">
      <el-icon><IconTasks /></el-icon>
      <template #title>Задачи</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><IconRequests /></el-icon>
      <template #title>Заявки</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><IconConsultation /></el-icon>
      <template #title>Консультация</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><IconWiki /></el-icon>
      <template #title>База знаний</template>
    </el-menu-item>
    <el-menu-item index="7">
      <el-icon><IconBusiness /></el-icon>
      <template #title>Бизнес процессы</template>
    </el-menu-item>
    <el-menu-item index="8">
      <el-icon><IconHelpdesk /></el-icon>
      <template #title>Help desk</template>
    </el-menu-item>
    <el-menu-item index="9">
      <el-icon><IconCalls /></el-icon>
      <template #title>Звонки</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const isCollapse = ref(false);

function handleOpen() {
  isCollapse.value = !isCollapse.value;
}
const handleRoute = (route: String) => {
  router.push(`${route}`);
};
</script>

<style scoped></style>
