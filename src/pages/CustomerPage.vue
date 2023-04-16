<template>
  <div>
    <el-input v-model="customer.name"></el-input>
    <el-input v-model="customer.inn"></el-input>
    <el-input v-model="customer.kpp"></el-input>
    <el-input v-model="customer.ogrn"></el-input>
    <el-button>Сохранить</el-button>
  </div>
</template>

<script setup>
import CustomerModel from "@/models/customer.model.js";
import { useRoute } from "vue-router";
import { useStore } from "@/store";

const route = useRoute();
const store = useStore();

const customer = ref(store.getCustomerById(route.params.id));
</script>

<style lang="scss" scoped></style>

