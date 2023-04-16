<template>
  <div>
    <el-table :data="customers">
      <el-table-column prop="name" label="Имя" width="180" />
      <el-table-column prop="inn" label="ИНН" width="180" />
      <el-table-column prop="kpp" label="КПП" />
      <el-table-column prop="ogrn" label="ОГРН" />
    </el-table>
  </div>
</template>

<script setup>
const customers = [
  {
    name: "Иванов Иван Иванович",
    inn: "1232131231",
    kpp: "12313123123",
    ogrn: "123123213",
  },
  {
    name: "Кеков Кек Кекович",
    inn: "1232131231",
    kpp: "12313123123",
    ogrn: "123123213",
  },
  {
    name: "Карабас Барабас Барабасов",
    inn: "1232131231",
    kpp: "12313123123",
    ogrn: "123123213",
  },
  {
    name: "Акакий Акак Акакиевич",
    inn: "1232131231",
    kpp: "12313123123",
    ogrn: "123123213",
  },
  {},
];
</script>

<style lang="scss" scoped></style>

