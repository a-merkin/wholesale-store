<template>
  <el-container
    direction="vertical"
    style="gap: 20px; background: #fff; padding: 18px; height: 100%"
  >
    <el-input placeholder="Дата" v-model="purchase.date"></el-input>
    <el-input placeholder="Наименование" v-model="purchase.name"></el-input>
    <el-input placeholder="Код" v-model="purchase.code"></el-input>
    <el-input placeholder="Количество" v-model="purchase.count"></el-input>
    <el-input placeholder="Сумма сделки" v-model="purchase.price"></el-input>
    <el-button type="primary" @click="savePurchase()">Сохранить</el-button>
  </el-container>
</template>

<script setup>
import PurchaseModel from "@/models/customer.model.js";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import router from "@/router";

const route = useRoute();
const store = useStore();

const purchase = ref(
  { ...store.getPurchaseById(route.params.id) } || PurchaseModel
);

const savePurchase = () => {
  if (route.params.id) {
    store.changePurchase(route.params.id, purchase.value);
  } else store.createPurchase(purchase.value);
  router.push("/purchase-list");
};
</script>

<style lang="scss" scoped></style>

