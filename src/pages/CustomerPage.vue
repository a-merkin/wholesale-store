<template>
  <el-container
    direction="vertical"
    style="gap: 20px; background: #fff; padding: 30px 200px; height: 100%"
  >
    <el-form :model="customer">
      <el-form-item label="Имя">
        <el-input placeholder="Имя" v-model="customer.name"></el-input>
      </el-form-item>
      <el-form-item label="ИНН">
        <el-input placeholder="ИНН" v-model="customer.inn"></el-input>
      </el-form-item>
      <el-form-item label="КПП">
        <el-input placeholder="КПП" v-model="customer.kpp"></el-input>
      </el-form-item>
      <el-form-item label="ОГРН">
        <el-input placeholder="ОГРН" v-model="customer.ogrn"></el-input>
      </el-form-item>
      <el-form-item label="Покупки">
        <el-select
          v-model="customer.purchases"
          multiple
          placeholder="Покупки"
          style="width: 240px"
        >
          <el-option
            v-for="(purchase, index) in store.purchases"
            :key="index"
            :label="purchase.name"
            :value="index"
          />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="saveCustomer">Сохранить</el-button>
    </el-form>
  </el-container>
</template>

<script setup>
import CustomerModel from "@/models/customer.model.js";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import router from "@/router";

const route = useRoute();
const store = useStore();

const customer = ref({ ...store.getCustomerById(route.params.id) });

const saveCustomer = () => {
  if (route.params.id) {
    store.changeCustomer(route.params.id, customer.value);
  } else store.createCustomer(customer.value);
  router.push("/customer-list");
};
</script>

<style lang="scss" scoped></style>

