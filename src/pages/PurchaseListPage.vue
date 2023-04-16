<template>
  <div>
    <el-table :data="store.purchases">
      <el-table-column prop="code" label="Код" />
      <el-table-column prop="name" label="Название" />
      <el-table-column prop="count" label="Количество" />
      <el-table-column prop="price" label="Сумма сделки" />
      <el-table-column prop="date" label="Дата" />
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
  router.push(`/purchase/${index}`);
};
const deleteRow = (index) => {
  store.deletePurchase(index);
};
</script>

<style lang="scss" scoped></style>

