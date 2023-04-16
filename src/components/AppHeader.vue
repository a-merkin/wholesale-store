<template>
  <el-container
    style="
      background: #fff;
      display: flex;
      justify-content: flex-end;
      padding: 10px 60px;
    "
  >
    <el-button type="primary" @click="createEl()">Создать</el-button>
  </el-container>
</template>

<script setup>
import router from "@/router";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.name);

const createEl = () => {
  console.log(route.name);
  const variables = {
    CustomerList: "CustomerCreate",
    PurchaseList: "PurchaseCreate",
  };
  router.push({ name: variables[route.name] });
};
</script>

