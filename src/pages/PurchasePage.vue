<template>
  <el-container
    direction="vertical"
    style="gap: 20px; background: #fff; padding: 30px 200px; height: 100%"
  >
    <el-form :model="purchase">
      <el-form-item label="Дата">
        <el-input
          type="date"
          placeholder="Дата"
          v-model="purchase.date"
        ></el-input>
      </el-form-item>
      <el-form-item label="Наименование">
        <el-input placeholder="Наименование" v-model="purchase.name"></el-input>
      </el-form-item>
      <el-form-item label="Код">
        <el-input placeholder="Код" v-model="purchase.code"></el-input>
      </el-form-item>
      <el-form-item label="Количество">
        <el-input placeholder="Количество" v-model="purchase.count"></el-input>
      </el-form-item>
      <el-form-item label="Сумма сделки">
        <el-input
          placeholder="Сумма сделки"
          v-model="purchase.price"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="savePurchase()">Сохранить</el-button>
    </el-form>
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

