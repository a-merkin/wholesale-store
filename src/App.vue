<script setup>
import { ModalsContainer } from "vue-final-modal";
import router from "@/router";

router.push("/customer-list");
</script>

<template>
  <router-view></router-view>
  <ModalsContainer />
</template>

<style scoped></style>

