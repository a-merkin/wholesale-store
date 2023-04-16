<template>
  <div>
    <el-table :data="store.customers">
      <el-table-column prop="name" label="Имя" />
      <el-table-column prop="inn" label="ИНН" />
      <el-table-column prop="kpp" label="КПП" />
      <el-table-column prop="ogrn" label="ОГРН" />
      <el-table-column fixed="right" width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="changeRow(scope.$index)"
          >
            Изменить
          </el-button>
          <el-popconfirm title="Вы уверены?" @confirm="deleteRow(scope.$index)"
            ><template #reference
              ><el-button link type="primary" size="small">
                Удалить
              </el-button></template
            ></el-popconfirm
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { useStore } from "@/store.js";
import router from "@/router/index.js";

const store = useStore();

const changeRow = (index) => {
  router.push(`/customer/${index}`);
};
const deleteRow = (index) => {
  store.deleteCustomer(index);
};
</script>

<style lang="scss" scoped></style>

