<template>
  <el-container
    style="
      background: #fff;
      display: flex;
      justify-content: flex-end;
      padding: 10px 60px;
    "
  >
    <el-button type="primary" @click="createEl()"
      >Добавить {{ itemTitleVariables[route.name] }}</el-button
    >
  </el-container>
</template>

<script setup>
import router from "@/router";
import { useRoute } from "vue-router";

const route = useRoute();

const itemTitleVariables = {
  CustomerList: "клиента",
  PurchaseList: "покупку",
};

const createEl = () => {
  const variables = {
    CustomerList: "CustomerCreate",
    PurchaseList: "PurchaseCreate",
  };
  router.push({ name: variables[route.name] });
};
</script>

